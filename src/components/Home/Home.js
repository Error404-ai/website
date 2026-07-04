import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HiOutlineChevronDown } from "react-icons/hi";
import Home2 from "./Home2";
import Type from "./Type";
import LightRays from "./LightRays";
import "./HomeStyle.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <div className="home-rays" aria-hidden="true">
          <LightRays
            raysOrigin="top-center"
            raysColor="#EF334C"
            raysSpeed={1.2}
            lightSpread={0.7}
            rayLength={1.3}
            fadeDistance={1.1}
            saturation={0.9}
            followMouse={true}
            mouseInfluence={0.08}
            noiseAmount={0.06}
            distortion={0.03}
          />
        </div>
        <Container className="home-content">
          <Row className="justify-content-center">
            <Col md={9} lg={8} className="home-header text-center">
              <h1 className="hero-title">Programming Club</h1>

              <p className="hero-tagline">Brute force is for the weak.</p>

              <div className="type-container">
                <span className="type-prefix">We specialize in</span>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>

        <a href="#about" className="scroll-cue" aria-label="Scroll down">
          <HiOutlineChevronDown />
        </a>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
