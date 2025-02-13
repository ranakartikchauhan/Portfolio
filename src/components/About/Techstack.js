import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiDocker
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <br/>
        <div className="btn btn-outline-primary">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <br/>
        <div className="btn btn-outline-primary">Node Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <br/>
        <button className="btn btn-outline-primary">React</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <br/>
        <button className="btn btn-outline-primary">MongoDB</button>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <br/>
        <button className="btn btn-outline-primary">Git</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
        <br/>
        <button className="btn btn-outline-primary">PHP</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
        <br/>
        <button className="btn btn-outline-primary">Laravel</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <br/>
        <button className="btn btn-outline-primary">SQL</button>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <br/>
        <button className="btn btn-outline-primary">Docker</button>
      </Col>
    </Row>
  );
}

export default Techstack;
