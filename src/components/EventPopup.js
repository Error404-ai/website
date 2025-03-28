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
          <h2>Code Wars 2024</h2>
          <p className="event-details">
            Join us for an exciting coding competition where you can showcase your programming skills!
          </p>
          <ul className="event-info">
            <li>📅 Date: April 15, 2024</li>
            <li>⏰ Time: 2:00 PM - 5:00 PM</li>
            <li>📍 Venue: Main Auditorium</li>
            <li>🎁 Prizes worth ₹10,000</li>
          </ul>
          <p className="event-description">
            Participate in our flagship coding event featuring:
            <ul>
              <li>Competitive Programming Challenges</li>
              <li>Real-world Problem Solving</li>
              <li>Networking with Industry Experts</li>
              <li>Exciting Prizes and Certificates</li>
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