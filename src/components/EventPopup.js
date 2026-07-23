import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./EventPopup.css";

function EventPopup() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShow(false);

  const handleRegister = () => {
    handleClose();
    navigate("/register");
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg" // lg se thoda chota kiya taaki compact aur pyara lage
      centered
      className="custom-tech-modal" 
    >
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="modal-title-custom">🚨 Recruitment Drive</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body-custom">
        <div className="event-content">
          <p className="club-name">PROGRAMMING CLUB PRESENTS</p>
          <h2 className="event-title">
            <span className="highlight">CIN</span> &gt;&gt; PC
          </h2>

          <p className="event-tagline">
            "Got the logic? Got the passion for code? Come be a part of our CP & DSA family"
          </p>

          <div className="event-details-box">
            <ul>
              <li><span className="icon">📅</span> <strong>Date:</strong> 3 August 2026</li>
              <li><span className="icon">⏰</span> <strong>Time:</strong> 4:00 PM Onwards</li>
              <li><span className="icon">📍</span> <strong>Venue:</strong> CS/IT Block(3rd floor)</li>
            </ul>
          </div>

          <p className="event-description">
            Whether you're just starting out or looking to sharpen your skills, PC is the perfect place to learn Competitive Programming, improve logical thinking, and grow with an amazing coding community.
            <br /><br /><span style={{ color: "#ff4d4d", fontWeight: "bold" }}>Ready to begin your  CP & DSA journey? Join us and let's grow together! </span>
          </p>
        </div>
      </Modal.Body>

      <Modal.Footer className="modal-footer-custom">
        <Button variant="secondary" className="btn-close-custom" onClick={handleClose}>
          Maybe Later
        </Button>
        <Button className="btn-register-custom" onClick={handleRegister}>
          Apply Now 
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EventPopup;