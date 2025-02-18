import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import aakarsh from "../../Assets/Projects/Aakarsh Singh.jpeg"
import anas from "../../Assets/Projects/ANAS KHAN.jpg"
import AanandPC from  "../../Assets/Projects/AanandPC.jpg"
import AanyaPC from "../../Assets/Projects/aanyaPC.png"
import AsjadPC from "../../Assets/Projects/AsjadPC.png"
import DeepakPC from "../../Assets/Projects/DeepakPC.png"
import DEVPC from "../../Assets/Projects/DEVPC.png"
import IshitaPC from "../../Assets/Projects/IshitaPC.png"
import KapishPC from "../../Assets/Projects/KapishPC.png"
import KartikeyPC from "../../Assets/Projects/KartikeyPC.jpeg"
import KeshavPC from "../../Assets/Projects/KeshavPC.png"
import KinjalPC from "../../Assets/Projects/KinjalPC.png"
import KshitizPC from "../../Assets/Projects/KshitizPC.png"
import LishaPC from "../../Assets/Projects/LishaPC.jpg"
import MadhurPC from "../../Assets/Projects/MadhurPC.png"
import NikhilPC from "../../Assets/Projects/NikhilPC.png"
import SaumyaPC from "../../Assets/Projects/SaumyaPC.jpg"
import ShambhaviPC from "../../Assets/Projects/ShambhaviPC.jpg"
import ShoryaPC from "../../Assets/Projects/ShoryaPC.png"
import ShreyanshPC from "../../Assets/Projects/ShreyanshPC.jpg"
import SiddharthPC from "../../Assets/Projects/siddharthPC.png"
import SnehaPC from "../../Assets/Projects/SnehaPC.png"
import TusharPC from "../../Assets/Projects/TusharPC.png"
import UtkarshPC from "../../Assets/Projects/UtkarshPC.png"
import AdarshPC from "../../Assets/Projects/AdarshPC.png"
import AkhilPC from "../../Assets/Projects/Akhil.jpg"
import AnanyaPC from "../../Assets/Projects/AnanyaPC.jpg"
import AnasPC from "../../Assets/Projects/AnasPC.png"
import ApoorvaPC from "../../Assets/Projects/Apoorva.jpeg"
import AyushPC from "../../Assets/Projects/AyushAgrawalPC.jpg"
import HarshitPC from "../../Assets/Projects/HarshitPC.jpeg"
import LakshayPC from "../../Assets/Projects/Lakshay.jpg"
import LakshyaPC from "../../Assets/Projects/Lakshya Goel.jpeg"
import ManasPC from "../../Assets/Projects/ManasPC.jpg"
import MeghaPC from "../../Assets/Projects/Megha.jpg"
import MittalPC from "../../Assets/Projects/Mr.Mittal.jpg"
import Paras from "../../Assets/Projects/Paras.jpg"
import MohitPC from "../../Assets/Projects/Mohitpc.jpg"
import PrachiPC from "../../Assets/Projects/PrachiPC.png"
import PranjalPC from "../../Assets/Projects/PranjalPC.png"
import RachitPC from "../../Assets/Projects/RachitPC.jpg"
import RahulPC from "../../Assets/Projects/RahulPC.png"
import RohitPC from "../../Assets/Projects/Rohitpc.png"
import Shreyansh from "../../Assets/Projects/ShreyanshPC.png"
import ShreyaPC from "../../Assets/Projects/ShreyaPC.png"
import Siddhant from "../../Assets/Projects/SiddhantPC.png"
import VaibhavPC from "../../Assets/Projects/VaibhavPC.png"
import AchalPC from "../../Assets/Projects/AchalPC.jpg"
import AnchalPC from "../../Assets/Projects/AnchalPC.jpg"
import AnubhavPC from "../../Assets/Projects/AnubhavPC.jpg"
import Ayush2PC from "../../Assets/Projects/Ayush2PC.jpg"
import AkagraPC from "../../Assets/Projects/AkagraPC.jpg"
import ArthPC from "../../Assets/Projects/ArthPC.jpg"
import HarshPC from "../../Assets/Projects/HarshPC.jpg"
import MeetPC from "../../Assets/Projects/MeetPC.jpg"
import Rachit2PC from "../../Assets/Projects/rachit2PC..jpg"
import RitikPC from "../../Assets/Projects/RitikPC.jpg"
import ShreyaaPC from "../../Assets/Projects/ShreyaaPC.jpg"
import SachiPC from "../../Assets/Projects/SachiPC.jpg"
import ShwetaPC from "../../Assets/Projects/ShwetaPC.jpg"
import Siddharth2PC from "../../Assets/Projects/Siddharth2PC.jpg"
import TanishaPC from "../../Assets/Projects/TanishaPC.jpg"

import { useTransition } from "react";


function Projects() {
  return (
    <Container fluid className="home-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">4th  </strong> Year Members
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AanandPC}
              isBlog={false}
              title="Aanand"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AanyaPC}
              isBlog={false}
              title="Aanya"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AsjadPC}
              isBlog={false}
              title="Asjad"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={DeepakPC}
              isBlog={false}
              title="Deepak"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={DEVPC}
              isBlog={false}
              title="Dev"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={IshitaPC}
              isBlog={false}
              title="Ishita"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={KapishPC}
              isBlog={false}
              title="Kapish"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={KartikeyPC}
              isBlog={false}
              title="Kartikey"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={KeshavPC}
              isBlog={false}
              title="Keshav"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={KinjalPC}
              isBlog={false}
              title="Kinjal"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={KshitizPC}
              isBlog={false}
              title="Kshitiz"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={LishaPC}
              isBlog={false}
              title="Lisha"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={MadhurPC}
              isBlog={false}
              title="Madhur"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={NikhilPC}
              isBlog={false}
              title="Nikhil"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={SaumyaPC}
              isBlog={false}
              title="Saumya"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ShambhaviPC}
              isBlog={false}
              title="Shambhavi"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ShoryaPC}
              isBlog={false}
              title="Shorya"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ShreyanshPC}
              isBlog={false}
              title="Shreyansh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={SiddharthPC}
              isBlog={false}
              title="Siddharth"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={SnehaPC}
              isBlog={false}
              title="Sneha"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={TusharPC}
              isBlog={false}
              title="Tushar"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={UtkarshPC}
              isBlog={false}
              title="Utkarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Container>
        <h1 className="project-heading">
           <strong className="purple">3rd  </strong> Year Members
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={aakarsh}
              isBlog={false}
              title="Aakarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AdarshPC}
              isBlog={false}
              title="Adarsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AkhilPC}
              isBlog={false}
              title="Akhil"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AnanyaPC}
              isBlog={false}
              title="Ananya"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

       
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ApoorvaPC}
              isBlog={false}
              title="Apoorva"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AyushPC}
              isBlog={false}
              title="Ayush"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={HarshitPC}
              isBlog={false}
              title="Harshit"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={LakshayPC}
              isBlog={false}
              title="Lakshay"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={LakshyaPC}
              isBlog={false}
              title="Lakshya"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ManasPC}
              isBlog={false}
              title="Manas"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={MeghaPC}
              isBlog={false}
              title="Megha"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
         <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={MittalPC}
              isBlog={false}
              title="Kavya"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* not an square image  */}

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AnasPC}
              isBlog={false}
              title="Mohd. Anas"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={MohitPC}
              isBlog={false}
              title="Mohit"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={Paras}
              isBlog={false}
              title="Paras"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={PrachiPC}
              isBlog={false}
              title="Prachi"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={PranjalPC}
              isBlog={false}
              title="Pranjal"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={RachitPC}
              isBlog={false}
              title="Rachit"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col><Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={RahulPC}
              isBlog={false}
              title="Rahul"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col><Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={RohitPC}
              isBlog={false}
              title="Rohit"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col><Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={Shreyansh}
              isBlog={false}
              title="Shreyansh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col><Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ShreyaPC}
              isBlog={false}
              title="Shreya"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col><Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={Siddhant}
              isBlog={false}
              title="Siddhant"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col><Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={VaibhavPC}
              isBlog={false}
              title="Vaibhav"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>

      
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container>
        <h1 className="project-heading">
           <strong className="purple">2nd  </strong> Year Members
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AchalPC}
              isBlog={false}
              title="Achal"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AkagraPC}
              isBlog={false}
              title="Akagra"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AnchalPC}
              isBlog={false}
              title="Anchal"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={AnubhavPC}
              isBlog={false}
              title="Anubhav"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

       
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ArthPC}
              isBlog={false}
              title="Arth"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={Ayush2PC}
              isBlog={false}
              title="Ayush"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={HarshPC}
              isBlog={false}
              title="Harsh"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={MeetPC}
              isBlog={false}
              title="Meet"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={Rachit2PC}
              isBlog={false}
              title="Rachit"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={RitikPC}
              isBlog={false}
              title="Ritik"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={SachiPC}
              isBlog={false}
              title="Sachi"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
         <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard 
              imgPath={ShreyaaPC} 
              isBlog={false}
              title="Shreyaa"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* not an square image  */}

          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={ShwetaPC}
              isBlog={false}
              title="Shweta"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={Siddharth2PC}
              isBlog={false}
              title="Siddharth"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col lg = {2} md={4} sm={6} xs={12} className="project-card">
            <ProjectCard
              imgPath={TanishaPC}
              isBlog={false}
              title="Tanisha"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
