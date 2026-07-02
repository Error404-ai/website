import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import { FaEye, FaUsers } from "react-icons/fa";
import icpc1 from "../../Assets/Projects/icpc1.jpg";
import icpc2 from "../../Assets/Projects/icpc2.jpg";
import icpc3 from "../../Assets/Projects/icpc3.jpg";
import "./About.css";

// Data array for gallery
const galleryData = [
  {
    id: 1,
    image: icpc3,
    caption: "ICPC Amritapuri Regionals 2024",
    team: ["Aakarsh Singh", "Ayush Agrawal", "Paras Upadhayay"],
  },
  {
    id: 2,
    image: icpc2,
    caption: "ICPC Chennai Regionals 2023",
    team: ["Satvik Maheshwari", "Utkarsh Kumar Yadav", "Shreyansh Mohan"],
  },
  {
    id: 3,
    image: icpc1,
    caption: "ICPC Kanpur Regionals 2023",
    team: ["Kapish Upadhyay", "Shreyansh Mittal", "Utkarsh Shukla"],
  },
];

// Data for Timeline
const timelineData = [
  {
    year: "2025",
    title: "ICPC Kanpur Regional Contest",
    description: "Rank 32 - An incredible leap forward showcasing our continuous improvement and dedication.",
    team: ["Aakarsh Singh", "Ayush Agrawal", "Paras Upadhayay"],
    align: "left"
  },
  {
    year: "2024",
    title: "ICPC Amritapuri Doublesite Regional Contest",
    description: "Rank 95 - Qualified for the prestigious Amritapuri regional contest, competing against the best in the nation.",
    team: ["Aakarsh Singh", "Ayush Agrawal", "Paras Upadhayay"],
    align: "right"
  },
  {
    year: "2023",
    title: "ICPC Kanpur & Chennai Regional Contests",
    description: "Achieved regionalist status across two different sites with two formidable teams.",
    team: [
      "Team 1: Kapish Upadhyay, Shreyansh Mittal, Utkarsh Shukla",
      "Team 2: Satvik Maheshwari, Utkarsh Kumar Yadav, Shreyansh Mohan"
    ],
    align: "left"
  }
];

function About() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageData, setSelectedImageData] = useState(null);

  const handleShowModal = (data) => {
    setSelectedImageData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImageData(null);
  };

  return (
    <Container fluid className="about-section">
      {/* --- ACHIEVEMENTS SECTION --- */}
      <Container>
        <h1 className="project-heading">
          Our <strong className="purple">Achievements</strong>
        </h1>
        <p className="section-subtitle">
          Driven by passion and code, here are our proudest milestones on the competitive programming stage.
        </p>
        
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="achievement-card-col">
            <Card className="achievement-card">
              <Card.Body>
                <div className="achievement-icon">🏆</div>
                <Card.Title>ICPC Regionalist '25</Card.Title>
                <Card.Text>
                  Rank 32 at ICPC Kanpur Regionals 2025.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="achievement-card-col">
            <Card className="achievement-card">
              <Card.Body>
                <div className="achievement-icon">🎖️</div>
                <Card.Title>ICPC Regionalist '24</Card.Title>
                <Card.Text>
                  Rank 95 at Amritapuri Doublesite Regional Contest.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="achievement-card-col">
            <Card className="achievement-card">
              <Card.Body>
                <div className="achievement-icon">🏅</div>
                <Card.Title>ICPC Regionalist '23</Card.Title>
                <Card.Text>
                  Achieved regionalist status at the Kanpur and Chennai sites.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* --- ICPC JOURNEY TIMELINE SECTION --- */}
      <Container className="icpc-journey-section">
        <h1 className="journey-heading">
          Our Path as <strong className="purple">ICPC Regionalists</strong>
        </h1>
        <p className="section-subtitle">
          The International Collegiate Programming Contest (ICPC) is the world's most prestigious algorithmic programming contest. This is the story of our legacy.
        </p>
        
        <div className="journey-slider-container">
          <div className="journey-slider">
            {timelineData.map((item, index) => (
              <div key={index} className="journey-card">
                <div className="journey-year">{item.year}</div>
                <div className="journey-title">{item.title}</div>
                <p className="journey-desc">
                  {item.description}
                </p>
                <ul className="journey-team">
                  {item.team.map((member, i) => (
                    <li key={i}><FaUsers size={14} /> {member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* --- PHOTO GALLERY GRID SECTION --- */}
      <Container className="gallery-section">
        <h1 className="project-heading">
          Photo <strong className="purple">Gallery</strong>
        </h1>
        <p className="section-subtitle">
          Moments captured during our regional contests and club events.
        </p>
        
        <div className="gallery-grid">
          {galleryData.map((item) => (
            <div className="gallery-item" key={item.id} onClick={() => handleShowModal(item)}>
              <img src={item.image} alt={item.caption} className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-caption">{item.caption}</div>
                <div className="gallery-action">
                  View Moment <FaEye />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      
      {/* --- MODAL FOR IMAGE VIEW --- */}
      {selectedImageData && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="gallery-modal">
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title>{selectedImageData.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedImageData.image} alt={selectedImageData.caption} className="img-fluid modal-image" />
            <div className="modal-team-info">
              <h5 className="purple">Team Members:</h5>
              <ul>
                {selectedImageData.team.map((member, index) => (
                  <li key={index}><ImPointRight /> {member}</li>
                ))}
              </ul>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
}

export default About;
