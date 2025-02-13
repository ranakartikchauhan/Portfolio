import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <br/>
        <button className="btn btn-outline-primary">VS Studio</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <br/>
        <button className="btn btn-outline-primary">Postman</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <br/>
        <button className="btn btn-outline-primary">Vercel</button>
      </Col>
    </Row>
  );
}

export default Toolstack;
