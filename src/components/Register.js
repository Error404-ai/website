import React, { useState, useEffect, lazy, Suspense } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { FaCheckCircle } from "react-icons/fa";
import "./Register.css";

// Lazy load particle component
const Particle = lazy(() => import("./Particle"));
const RECAPTCHA_SITE_KEY = "6LePUwUrAAAAAPZdevNjCuMlDlPgEKZQ2aHUZSLE";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    roll_no: "",
    email: "",
    branch_name: "",
    student_no: "",
    phone: "",
    hackerrank: "",
    gender: "",
    hosteller: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [shouldRenderParticles, setShouldRenderParticles] = useState(false);
  const [yearError, setYearError] = useState(false);

  // Only enable particles on desktop devices and if user's device is powerful enough
  useEffect(() => {
    const isDesktop = window.innerWidth >= 992;
    const isLowEndDevice = navigator.hardwareConcurrency <= 4;
    setShouldRenderParticles(isDesktop && !isLowEndDevice);

    const handleResize = () => {
      setShouldRenderParticles(window.innerWidth >= 992 && !isLowEndDevice);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const validateForm = () => {
    // Enhanced email validation for AKGEC domain
    const email = formData.email.trim().toLowerCase();
    
    // Check if email ends with @akgec.ac.in (case insensitive)
    if (!email.endsWith('@akgec.ac.in')) {
      setFormError('Please use your AKGEC email address (@akgec.ac.in)');
      return false;
    }
    
    // Check if email has valid format before @akgec.ac.in
    const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@akgec\.ac\.in$/;
    if (!emailRegex.test(email)) {
      setFormError('Please enter a valid AKGEC email address (e.g., yourname.rollno@akgec.ac.in)');
      return false;
    }

    // Phone number validation (exactly 10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      setFormError('Please enter a valid 10-digit phone number');
      return false;
    }

    // Roll number validation - improved regex
    if (!/^(\d{13,15})(-[dD])?$/i.test(formData.roll_no.trim())) {
      setFormError('Please enter a valid University roll number (13-15 digits, optionally ending with -d)');
      return false;
    }

    // Student number validation - improved regex
    if (!/^(\d{7,8})(-[dD])?$/i.test(formData.student_no.trim())) {
      setFormError('Please enter a valid student number (7-8 digits, optionally ending with -d)');
      return false;
    }

    // Required field validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.branch_name ||
        !formData.student_no.trim() || !formData.phone.trim() || !formData.gender ||
        !formData.hosteller || !formData.roll_no.trim()) {
      setFormError('All fields are required except HackerRank profile');
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear form errors when user starts typing
    if (formError) {
      setFormError("");
    }
    
    // Format phone number to remove any non-digit characters and limit to 10 digits
    if (name === 'phone') {
      const formattedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prevState => ({
        ...prevState,
        [name]: formattedValue
      }));
      return;
    }

    // Format student number - allow digits and optional -d suffix
    if (name === 'student_no') {
      const formattedValue = value.replace(/[^0-9dD-]/g, '').slice(0, 10);
      setFormData(prevState => ({
        ...prevState,
        [name]: formattedValue
      }));
      return;
    }

    // Format roll number - allow digits and optional -d suffix
    if (name === 'roll_no') {
      const formattedValue = value.replace(/[^0-9dD-]/g, '').slice(0, 18);
      setFormData(prevState => ({
        ...prevState,
        [name]: formattedValue
      }));
      return;
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);

    if (formError && formError.includes('reCAPTCHA')) {
      setFormError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    
    if (!recaptchaToken) {
      setFormError('Please complete the reCAPTCHA verification');
      return;
    }

    if (!validateForm()) {
      return;
    }

    // Enhanced API data preparation with exact server format
    const apiData = {
      name: formData.name.trim(),
      roll_no: formData.roll_no.trim(),
      email: formData.email.trim().toLowerCase(),
      hackerrank: formData.hackerrank.trim() || "", // Keep as empty string for server compatibility
      student_no: formData.student_no.trim(),
      recaptcha_token: recaptchaToken,
      branch_name: formData.branch_name,
      gender: formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1).toLowerCase(),
      phone: formData.phone.trim(),
      hosteller: formData.hosteller === 'yes' ? 'True' : 'False', // Backend expects string 'True'/'False'
    };

    // Debug logging
    console.log('Sending data:', JSON.stringify(apiData, null, 2));

    try {
      setIsLoading(true);
      
      const response = await fetch('https://cin-pc.onrender.com/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 Registration Form'
        },
        body: JSON.stringify(apiData),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      // Handle different response statuses
      if (response.status === 201 || response.status === 200) {
        // Success handling
        const responseData = await response.json();
        console.log('Success response:', responseData);
        
        setShowSuccess(true);
        
        // Reset form data
        setFormData({
          name: "",
          roll_no: "",
          email: "",
          branch_name: "",
          student_no: "",
          phone: "",
          hackerrank: "",
          gender: "",
          hosteller: "",
        });
        
        // Reset reCAPTCHA
        setRecaptchaToken(null);
        window.scrollTo(0, 0);
        
      } else {
        // Enhanced error handling for 400 Bad Request
        let errorMessage = 'Registration failed. Please try again.';
        let responseText = '';
        
        try {
          // First, try to get the response as text to see what we're dealing with
          const clonedResponse = response.clone();
          responseText = await clonedResponse.text();
          console.log('Raw response text:', responseText);
          
          // Then try to parse as JSON
          const errorData = await response.json();
          console.log('Error response data:', errorData);
          
          if (errorData.message) {
            errorMessage = errorData.message;
          } else if (errorData.error) {
            errorMessage = errorData.error;
          } else if (errorData.detail) {
            errorMessage = errorData.detail;
          } else if (typeof errorData === 'string') {
            errorMessage = errorData;
          } else if (errorData.errors) {
            // Handle validation errors from server
            if (typeof errorData.errors === 'object') {
              const errorMessages = Object.entries(errorData.errors).map(([field, messages]) => {
                const messageArray = Array.isArray(messages) ? messages : [messages];
                return `${field}: ${messageArray.join(', ')}`;
              });
              errorMessage = errorMessages.join('\n');
            } else {
              errorMessage = errorData.errors;
            }
          } else if (errorData.non_field_errors) {
            errorMessage = Array.isArray(errorData.non_field_errors) 
              ? errorData.non_field_errors.join('\n')
              : errorData.non_field_errors;
          }
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
          errorMessage = responseText || `Server returned ${response.status}: ${response.statusText}`;
        }
        
        setFormError(errorMessage);
      }
      
    } catch (error) {
      console.error('Network error:', error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setFormError('Network error: Unable to connect to server. Please check your internet connection and try again.');
      } else if (error.name === 'AbortError') {
        setFormError('Request timed out. Please try again.');
      } else {
        setFormError(error.message || 'Unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="register-section">
      {shouldRenderParticles && (
        <Suspense fallback={<div />}>
          <div className="particle-container">
            {/* <Particle /> */}
          </div>
        </Suspense>
      )}
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="register-form-container">
            <h1 className="heading-name text-center mb-4">
              <span className="purple">#INCLUDE 4.0</span> REGISTRATION
            </h1>
            <p className="text-center subtitle mb-4">Organized by Programming Club, AKGEC</p>
            
            {showSuccess ? (
              <div className="success-message">
                <div className="success-icon">
                  <FaCheckCircle />
                </div>
                <h2>Registration <span className="purple">Complete!</span></h2>
                <p>Thank you for registering! Please check your email for further instructions and confirmation details.</p>
                <Button 
                  variant="primary" 
                  className="submit-btn"
                  onClick={() => setShowSuccess(false)}
                >
                  Register Another
                </Button>
              </div>
            ) : (
              <>
                {formError && (
                  <Alert variant="danger">
                    <pre style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word', margin: 0}}>
                      {formError}
                    </pre>
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit} className="register-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="firstname.lastname@akgec.ac.in"
                          pattern="[0-9a-zA-Z][0-9a-zA-Z._-]*[0-9a-zA-Z]@akgec[.]ac[.]in"
                          title="Please enter a valid AKGEC email address (e.g., yourname.rollno@akgec.ac.in)"
                        />
                        <Form.Text className="text-muted">
                          Must be an AKGEC domain email (@akgec.ac.in) - Example: john.doe@akgec.ac.in
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="10-digit phone number"
                          pattern="[0-9]{10}"
                          title="Please enter exactly 10 digits"
                        />
                        <Form.Text className="text-muted">
                          Must be exactly 10 digits
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Roll Number <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="roll_no"
                          value={formData.roll_no}
                          onChange={handleChange}
                          required
                          placeholder="Enter your university roll number"
                        />
                        <Form.Text className="text-muted">
                          13-15 digits, optionally ending with -d
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Branch <span className="text-danger">*</span></Form.Label>
                        <Form.Select
                          name="branch_name"
                          value={formData.branch_name}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Branch</option>
                          <option value="CSE">CSE</option>
                          <option value="CSE (AIML)">CSE (AIML)</option>
                          <option value="CSE (Hindi)">CSE (Hindi)</option>
                          <option value="CSE (DS)">CSE (DS)</option>
                          <option value="CS">CS</option>
                          <option value="CS IT">CS IT</option>
                          <option value="AIML">AIML</option>
                          <option value="IT">IT</option>
                          <option value="ECE">ECE</option>
                          <option value="EE">EE</option>
                          <option value="ME">ME</option>
                          <option value="CE">CE</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Student Number <span className="text-danger">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="student_no"
                          value={formData.student_no}
                          onChange={handleChange}
                          required
                          placeholder="Enter your student number"
                          pattern="[0-9]{7,8}"
                          title="Please enter 7 or 8 digits"
                        />
                        <Form.Text className="text-muted">
                          7-8 digits, optionally ending with -d
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Gender <span className="text-danger">*</span></Form.Label>
                        <Form.Select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Are you a Hosteller? <span className="text-danger">*</span></Form.Label>
                        <Form.Select
                          name="hosteller"
                          value={formData.hosteller}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Option</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>HackerRank Profile</Form.Label>
                        <Form.Control
                          type="text"
                          name="hackerrank"
                          value={formData.hackerrank}
                          onChange={handleChange}
                          placeholder="Your HackerRank username"
                        />
                        <Form.Text className="text-muted">
                          Optional field
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="recaptcha-container mb-4">
                    <ReCAPTCHA
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={handleRecaptchaChange}
                    />
                  </div>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="submit-btn" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Submit Registration'}
                  </Button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Register;