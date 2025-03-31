import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EventPopup() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup on every page load
    setShow(true);
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
      size="lg"
      centered
      className="event-popup"
    >
      <Modal.Header closeButton>
        <Modal.Title>🎉 New Event Alert! 🎉</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="event-content">
          <h3>Programming Club Presents</h3>
          <h2>#Include 4.0</h2>
          <p className="event-details">
            Join us for an exciting competitive programming workshop where you can elevate your programming skills!
          </p>
          <ul className="event-info">
            <li>📅 Date: April 6, 2025 - April 7, 2025</li>
            <li>⏰ Time: 9:00 AM - 6:00 PM</li>
            <li>📍 Venue: CSIT Seminar Hall</li>
            <li>💻 Coding Contest on April 8, 2025 from 4:00 PM - 6:00 PM</li>
          </ul>
          <p className="event-description">
            Participate in our flagship coding event featuring:
            <ul>
              <li>Competitive Programming Workshop for Beginners 1st year students</li>
              <li>Coding Contest for both 1st and 2nd year students</li>
              <li>Opportunity to win exciting prizes and certificates</li>
              <li>Connect with your seniors and alumini for career guidance</li>
            </ul>
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleRegister}>
          Register Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EventPopup; 