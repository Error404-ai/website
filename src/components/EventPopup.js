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
      className="custom-tech-modal" // 👈 Nayi class lagayi hai
    >
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="modal-title-custom">🚨 Recruitment Drive</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body-custom">
        <div className="event-content">
          <p className="club-name">PROGRAMMING CLUB RECRUITS</p>
          <h2 className="event-title">
            <span className="highlight">CIN</span> &gt;&gt; PC;
          </h2>

          <p className="event-tagline">
            "Got the logic? Got the passion for code? Come be a part of our CP & DSA family — no experience needed, just curiosity! 🚀💡"
          </p>

          <div className="event-details-box">
            <ul>
              <li><span className="icon">📅</span> <strong>Date:</strong> 27th July 2026</li>
              <li><span className="icon">⏰</span> <strong>Time:</strong> 4:00 PM Onwards</li>
              <li><span className="icon">📍</span> <strong>Venue:</strong> CS/IT Block(3rd floor)</li>
            </ul>
          </div>

          <p className="event-description">
            First year? No CP background? No problem! We'll train you from the basics — logic building, problem solving, and everything you need to crack your first contest and beyond.
            <br /><br /><span style={{ color: "#ff4d4d", fontWeight: "bold" }}>Limited seats — only the sharpest minds get in! 🔥</span>
          </p>
        </div>
      </Modal.Body>

      <Modal.Footer className="modal-footer-custom">
        <Button variant="secondary" className="btn-close-custom" onClick={handleClose}>
          Maybe Later
        </Button>
        <Button className="btn-register-custom" onClick={handleRegister}>
          Apply Now 🚀
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EventPopup;