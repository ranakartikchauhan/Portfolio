import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          Hi, I’m  <span className="text-purple">Kartik Chauhan</span> , a MERN Stack Developer with 1+ years
          of experience in building scalable web applications, robust APIs, and
          optimized database solutions. I hold a B.Tech in Computer Science
          and have developed impactful projects like job platforms and real
          estate systems. Let’s connect to create innovative solutions!
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
