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
      <Modal.Header 
        closeButton 
        className="px-4 py-3"
        style={{
          backgroundColor: '#000000',
          borderBottom: '1px solid #333',
          borderTopLeftRadius: '0.5rem',
          borderTopRightRadius: '0.5rem'
        }}
      >
        <Modal.Title className="fs-3 fs-md-2 fw-bold w-100 text-center" style={{ color: '#00FF7F' }}>
          <span className="d-none d-sm-inline">🚀 Recruitment Drive Alert! 🚀</span>
          <span className="d-sm-none">🚀 Recruitment Alert! 🚀</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body 
        className="px-4 py-4"
        style={{
          backgroundColor: '#000000',
          color: '#FFFFFF'
        }}
      >
        <div className="event-content">
          <div className="text-center mb-4">
            <h4 className="fs-4 fs-md-3 mb-3 fw-bold" style={{ color: '#00FF7F' }}>
              Programming Club Presents
            </h4>
            <h1 className="display-5 display-md-3 fw-bold mb-4" style={{ color: '#4A90E2' }}>
              Cin&gt;&gt;PC
            </h1>
          </div>
          
          <p className="fs-5 fs-md-4 mb-4 text-center fw-normal" style={{ color: '#FFFFFF' }}>
            Cin&gt;&gt;PC is the official recruitment drive of the Programming Club, designed exclusively for 2nd-year students who are passionate about coding and problem-solving.
          </p>
          
          <div className="event-info mb-4">
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-3 fs-3">📅</span>
                  <span className="fw-bold fs-4" style={{ color: '#FFFFFF' }}>Date:</span>
                </div>
                <div className="fs-4 fw-semibold ms-5" style={{ color: '#FFFFFF' }}>May 5, 2025 - May 6, 2025</div>
              </div>
              
              <div className="col-12 col-sm-6">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-3 fs-3">⏰</span>
                  <span className="fw-bold fs-4" style={{ color: '#FFFFFF' }}>Time:</span>
                </div>
                <div className="fs-4 fw-semibold ms-5" style={{ color: '#FFFFFF' }}>9:00 AM - 6:00 PM</div>
              </div>
              
              <div className="col-12">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-3 fs-3">📍</span>
                  <span className="fw-bold fs-4" style={{ color: '#FFFFFF' }}>Venue:</span>
                </div>
                <div className="fs-4 fw-semibold ms-5" style={{ color: '#FFFFFF' }}>CSIT Seminar Hall</div>
              </div>
              
              <div className="col-12">
                <div className="d-flex align-items-center mb-2">
                  <span className="me-3 fs-3">💻</span>
                  <span className="fw-bold fs-4" style={{ color: '#FFFFFF' }}>Recruitment Coding Contest:</span>
                </div>
                <div className="fs-4 fw-semibold ms-5" style={{ color: '#FFFFFF' }}>May 7, 2025 from 4:00 PM - 6:30 PM</div>
              </div>
            </div>
          </div>
          
          <div className="event-description">
            <h4 className="fw-bold mb-3 fs-3" style={{ color: '#FFFFFF' }}>Why participate?</h4>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <span className="me-3 fs-4" style={{ color: '#00FF7F' }}>→</span>
                <span className="fs-4" style={{ color: '#FFFFFF' }}>✨ Showcase your coding and problem-solving skills</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span className="me-3 fs-4" style={{ color: '#00FF7F' }}>→</span>
                <span className="fs-4" style={{ color: '#FFFFFF' }}>🎯 Get an opportunity to become a member of the Programming Club</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span className="me-3 fs-4" style={{ color: '#00FF7F' }}>→</span>
                <span className="fs-4" style={{ color: '#FFFFFF' }}>🏆 Win exciting prizes and certificates</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <span className="me-3 fs-4" style={{ color: '#00FF7F' }}>→</span>
                <span className="fs-4" style={{ color: '#FFFFFF' }}>🚀 Learn, grow, and connect with seniors and alumni for career guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer 
        className="px-4 py-3"
        style={{
          backgroundColor: '#000000',
          borderTop: '1px solid #333',
          borderBottomLeftRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem'
        }}
      >
        <div className="d-flex flex-column flex-sm-row gap-3 w-100">
          <Button 
            variant="outline-light"
            onClick={handleClose}
            className="flex-fill flex-sm-grow-0 fs-4 py-2 fw-semibold"
            style={{
              borderWidth: '2px',
              borderRadius: '8px',
              borderColor: '#666'
            }}
          >
            Close
          </Button>
          <Button 
            onClick={handleRegister}
            className="flex-fill flex-sm-grow-1 fs-4 py-3 fw-bold"
            style={{
              backgroundColor: '#8B4B9C',
              borderColor: '#8B4B9C',
              color: '#FFFFFF',
              borderRadius: '8px'
            }}
          >
            Apply Now
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default EventPopup;
