import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "./Particle";
import ReCAPTCHA from "react-google-recaptcha";
import { FaCheckCircle } from "react-icons/fa";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch_name: "",
    student_no: "",
    phone: "",
    hackerrank: "",
    gender: "",
    hosteller: "",
    year: "",
    registration_type: ""
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const validateForm = () => {
    // Email validation for AKGEC domain
    if (!formData.email.endsWith('@akgec.ac.in')) {
      setFormError('Please use your AKGEC email address');
      return false;
    }

    // Phone number validation (10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      setFormError('Please enter a valid 10-digit phone number');
      return false;
    }

    // Student number validation (7 or 8 digits)
    if (!/^\d{7,8}$/.test(formData.student_no)) {
      setFormError('Please enter a valid 7 or 8-digit student number');
      return false;
    }

    // HackerRank username validation (no spaces or special characters)
    if (!/^[a-zA-Z0-9_-]+$/.test(formData.hackerrank)) {
      setFormError('Please enter a valid HackerRank username (no spaces or special characters)');
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Format phone number to remove any non-digit characters
    if (name === 'phone') {
      const formattedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prevState => ({
        ...prevState,
        [name]: formattedValue
      }));
      return;
    }

    // Format student number to remove any non-digit characters and limit to 8 digits
    if (name === 'student_no') {
      const formattedValue = value.replace(/\D/g, '').slice(0, 8);
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

    // Transform the data to match the API schema
    const apiData = {
      name: formData.name,
      branch_name: formData.branch_name,
      recaptcha_token: recaptchaToken,
      student_no: formData.student_no,
      hackerrank: formData.hackerrank,
      phone: formData.phone,
      email: formData.email,
      gender: formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1).toLowerCase(),
      hosteller: formData.hosteller === 'yes' ? 'True' : 'False',
      year: formData.year,
      registration_type: formData.registration_type === 'workshop_contest' ? 'contest_workshop' : 'contest'
    };

    try {
      setIsLoading(true);
      const response = await fetch('https://api.programming-club.tech/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(apiData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Registration failed');
      }

      // Success handling
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        branch_name: "",
        student_no: "",
        phone: "",
        hackerrank: "",
        gender: "",
        hosteller: "",
        year: "",
        registration_type: ""
      });
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Registration error:', error);
      setFormError(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="register-section">
      <div className="particle-container">
        <Particle />
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="register-form-container">
            <h1 className="heading-name text-center mb-4">
              <span className="purple">INCLUDE 4.0</span> REGISTRATION
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
                {formError && <Alert variant="danger">{formError}</Alert>}
                
                <Form onSubmit={handleSubmit} className="register-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
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
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@akgec.ac.in"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="10-digit phone number"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Year</Form.Label>
                        <Form.Select
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Year</option>
                          <option value="1">1st Year</option>
                          <option value="2">2nd Year</option>
                          <option value="3">3rd Year</option>
                          <option value="4">4th Year</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Branch</Form.Label>
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
                        <Form.Label>Registration Type</Form.Label>
                        <Form.Select
                          name="registration_type"
                          value={formData.registration_type}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Option</option>
                          <option value="workshop_contest">Workshop + Contest</option>
                          <option value="contest">Contest Only (Free)</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
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
                        <Form.Label>Are you a Hosteller?</Form.Label>
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
                          required
                          placeholder="Your HackerRank username"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Student Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="student_no"
                          value={formData.student_no}
                          onChange={handleChange}
                          required
                          placeholder="Enter your student number"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="recaptcha-container mb-4">
                    <ReCAPTCHA
                      sitekey="6LeyqpApAAAAAKTZxQW5Kf4fEepP5YXzAGXZHsuK"
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