import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">KARTIK CHAUHAN </span>
            from <span className="purple"> Saharanpur, Uttar Pradesh.</span>
            <br />
            I am currently looking for the new opportunity in the field of MERN stack/ Software engineer.
            <br />
            I have completed B.tech in computer science from IKG PTU Mohali, Punjab. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing  Poem
            </li>
            <li className="about-activity">
              <ImPointRight /> Planting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ultimate goal of life is happiness"{" "}
          </p>
          <footer className="blockquote-footer">Kartik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
