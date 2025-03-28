import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "./Particle";

import Card from "react-bootstrap/Card";  
import { ImPointRight } from "react-icons/im";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    hackerrankId: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="home-section" style={{ minHeight: "100vh", paddingTop: "100px" }}>
      <Particle />
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="register-form-container">
            <h1 className="heading-name text-center mb-4">Registration Form</h1>
            <Form onSubmit={handleSubmit} className="register-form">
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

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Branch</Form.Label>
                <Form.Select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your branch</option>
                  <option value="CSE">Computer Science Engineering</option>
                  <option value="ECE">Electronics & Communication Engineering</option>
                  <option value="ME">Mechanical Engineering</option>
                  <option value="CE">Civil Engineering</option>
                  <option value="EE">Electrical Engineering</option>
                  <option value="IT">Information Technology</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>HackerRank ID</Form.Label>
                <Form.Control
                  type="text"
                  name="hackerrankId"
                  value={formData.hackerrankId}
                  onChange={handleChange}
                  required
                  placeholder="Enter your HackerRank username"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="submit-btn">
                Submit Registration
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register; 