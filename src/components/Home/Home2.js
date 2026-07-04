import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main2.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaCode, FaProjectDiagram, FaChalkboardTeacher } from "react-icons/fa";
import LightRays from "./LightRays";

const highlightChips = [
  {
    icon: <FaCode />,
    title: "Competitive Programming",
    text: "Regular contests on Codeforces, CodeChef & LeetCode.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "DSA Mastery",
    text: "Structured practice in Data Structures & Algorithms.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Workshops & Seminars",
    text: "Hands-on sessions to sharpen problem-solving skills.",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section position-relative" id="about">
      <div className="home-rays" aria-hidden="true">
        <LightRays
          raysOrigin="bottom-center"
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
      <Container className="home-about-content">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="about-heading">
              What We <span className="purple">Do</span>
            </h1>
            <p className="home-about-body">
              The <span className="purple">Programming Club</span> at Ajay Kumar
              Garg Engineering College is dedicated to competitive programming
              and building strong problem-solving skills, preparing students
              for national and global coding competitions.
            </p>

            <div className="home-about-chips">
              {highlightChips.map((chip) => (
                <div className="home-about-chip" key={chip.title}>
                  <div className="home-about-chip-icon">{chip.icon}</div>
                  <div>
                    <h3 className="home-about-chip-title">{chip.title}</h3>
                    <p className="home-about-chip-text">{chip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with us
            </p>
            <ul className="home-about-social-links">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/programming-club-akgec/mycompany/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/programmingclub.akgec/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
