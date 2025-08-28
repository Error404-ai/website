import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { FaCheckCircle } from "react-icons/fa";
import "./Register.css";

const RECAPTCHA_SITE_KEY = "6LcnprQrAAAAABbDh36kcDHZHlAJbdg3FrSiD_Wv";

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

  // Helper function to parse and format error messages - IMPROVED VERSION
  const parseErrorMessage = (errorData) => {
    console.log('Parsing error data:', errorData);

    // If errorData is a string, return it directly
    if (typeof errorData === 'string') {
      return errorData;
    }

    // If errorData is not an object, return default message
    if (!errorData || typeof errorData !== 'object') {
      return 'Registration failed. Please check your information and try again.';
    }

    // Handle specific field errors with user-friendly messages
    const fieldErrors = {
      email: 'Please enter a valid AKGEC email address (@akgec.ac.in)',
      phone: 'Please enter a valid 10-digit phone number',
      roll_no: 'Please enter a valid University roll number',
      student_no: 'Please enter a valid student number',
      name: 'Please enter a valid name',
      branch_name: 'Please select a valid branch',
      gender: 'Please select your gender',
      hosteller: 'Please specify if you are a hosteller',
      recaptcha_token: 'Please complete the reCAPTCHA verification'
    };

    // Check for duplicate/unique constraint errors
    const duplicateMessages = {
      email: 'This email is already registered. Please use a different email address.',
      phone: 'This phone number is already registered. Please use a different phone number.',
      roll_no: 'This roll number is already registered. Please contact support if this is an error.',
      student_no: 'This student number is already registered. Please contact support if this is an error.'
    };

    // Check each field for errors
    for (const [field, defaultMessage] of Object.entries(fieldErrors)) {
      if (errorData[field]) {
        const fieldError = Array.isArray(errorData[field]) ? errorData[field][0] : errorData[field];
        
        // Check if it's a duplicate error
        if (typeof fieldError === 'string') {
          if (fieldError.toLowerCase().includes('already exists') || 
              fieldError.toLowerCase().includes('unique') ||
              fieldError.toLowerCase().includes('duplicate')) {
            return duplicateMessages[field] || `This ${field.replace('_', ' ')} is already registered.`;
          }
          
          if (field === 'email' && (
              fieldError.toLowerCase().includes('college') || 
              fieldError.toLowerCase().includes('invalid') ||
              fieldError.toLowerCase().includes('domain')
          )) {
            return 'Please use your AKGEC email address (@akgec.ac.in)';
          }
        }
        
        return defaultMessage;
      }
    }

    // Handle non-field errors
    if (errorData.non_field_errors) {
      const errors = Array.isArray(errorData.non_field_errors) 
        ? errorData.non_field_errors 
        : [errorData.non_field_errors];
      return errors[0] || 'Registration failed. Please try again.';
    }

    // Handle general error messages
    if (errorData.detail) {
      return typeof errorData.detail === 'string' ? errorData.detail : 'Registration failed. Please try again.';
    }

    if (errorData.message) {
      return typeof errorData.message === 'string' ? errorData.message : 'Registration failed. Please try again.';
    }

    if (errorData.error) {
      return typeof errorData.error === 'string' ? errorData.error : 'Registration failed. Please try again.';
    }

    // Default fallback
    return 'Registration failed. Please check your information and try again.';
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

    // Debug logging (remove in production)
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
        // Enhanced error handling with user-friendly messages
        let errorMessage = 'Registration failed. Please try again.';
        
        try {
          const errorData = await response.json();
          console.log('Error response data:', errorData);
          
          // Use the improved parseErrorMessage function
          errorMessage = parseErrorMessage(errorData);
          
        } catch (parseError) {
          console.error('Error parsing JSON response:', parseError);
          
          // Fallback to text response
          try {
            const textResponse = await response.text();
            console.log('Raw response text:', textResponse);
            
            // Handle common text-based error responses
            if (textResponse.toLowerCase().includes('email') && textResponse.toLowerCase().includes('invalid')) {
              errorMessage = 'Please use your AKGEC email address (@akgec.ac.in)';
            } else if (textResponse.toLowerCase().includes('already exists')) {
              errorMessage = 'You are already registered. Please contact support if this is an error.';
            } else if (response.status === 400) {
              errorMessage = 'Invalid information provided. Please check your details and try again.';
            } else if (response.status === 500) {
              errorMessage = 'Server error. Please try again later.';
            } else {
              errorMessage = `Registration failed (Error ${response.status}). Please try again later.`;
            }
          } catch {
            errorMessage = `Server error (${response.status}). Please try again later.`;
          }
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
        setFormError('Unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="register-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="register-form-container">
            <h1 className="heading-name text-center mb-4">
              <span className="purple">CIN&gt;&gt;PC</span> REGISTRATION
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
                    {formError}
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