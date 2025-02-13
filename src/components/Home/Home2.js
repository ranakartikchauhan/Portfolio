import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Designer.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About </span> Me
            </h1>
            <p className="home-about-body">
              Results-Driven Software Developer having  experience in full-stack web development using the MERN
              stack (MongoDB, Express.js, React, Node.js). Skilled in building scalable RESTful APIs, optimizing database
              performance, and delivering end-to-end solutions. Led cross-functional teams to implement 10+ client-facing
              features, boosting user engagement by 20%. Experienced in problem solving, code optimization, and collaboration
              in Agile environments to deliver high-quality software.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
   
      </Container>
    </Container>
  );
}
export default Home2;
