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
      style={{
        '--bs-modal-width': '90vw',
        '--bs-modal-max-width': '600px'
      }}
    >
      <Modal.Header closeButton className="px-3 px-md-4">
        <Modal.Title className="fs-5 fs-md-4">
          <span className="d-none d-sm-inline">🚀 Recruitment Drive Alert! 🚀</span>
          <span className="d-sm-none">🚀 Recruitment Alert! 🚀</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 px-md-4">
        <div className="event-content">
          <div className="text-center mb-3">
            <h4 className="fs-6 fs-md-5 text-success mb-2">Programming Club Presents</h4>
            <h2 className="fs-3 fs-md-1 fw-bold text-primary">Cin&gt;&gt;PC</h2>
          </div>
          
          <p className="event-details fs-6 fs-md-5 mb-3">
            Cin&gt;&gt;PC is the official recruitment drive of the Programming Club, designed exclusively for 2nd-year students who are passionate about coding and problem-solving.
          </p>
          
          <div className="event-info mb-3">
            <div className="row g-2">
              <div className="col-12 col-sm-6">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">📅</span>
                  <small className="fw-semibold">Date:</small>
                </div>
                <small className="ms-3 d-block">Sept 3, 2025</small>
              </div>
              
              <div className="col-12 col-sm-6">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">⏰</span>
                  <small className="fw-semibold">Time:</small>
                </div>
                <small className="ms-3 d-block">4:00 PM - 7:30 PM</small>
              </div>
              
              <div className="col-12 col-sm-6">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">📍</span>
                  <small className="fw-semibold">Venue:</small>
                </div>
                <small className="ms-3 d-block">CSIT Block</small>
              </div>
        
            </div>
          </div>
          
          <div className="event-description">
            <p className="fw-semibold mb-2 fs-6">Why participate?</p>
            <ul className="list-unstyled">
              <li className="mb-1">
                <small>✨ Showcase your coding and problem-solving skills</small>
              </li>
              <li className="mb-1">
                <small>🎯 Get an opportunity to become a member of the Programming Club</small>
              </li>
              <li className="mb-1">
                <small>🏆 Win exciting prizes and certificates</small>
              </li>
              <li className="mb-1">
                <small>🚀 Learn, grow, and connect with seniors and alumni for career guidance</small>
              </li>
            </ul>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="px-3 px-md-4">
        <div className="d-flex flex-column flex-sm-row gap-2 w-100">
          <Button 
            variant="outline-secondary" 
            onClick={handleClose}
            className="flex-fill flex-sm-grow-0"
          >
            Close
          </Button>
          <Button 
            variant="primary" 
            onClick={handleRegister}
            className="flex-fill flex-sm-grow-1"
          >
            Apply Now
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default EventPopup;