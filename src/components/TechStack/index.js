import React from "react";
import './style.css'
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiSass,
  DiFirebase,
} from "react-icons/di";
import {
  SiExpress,
  SiMaterialui,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript, } from 'react-icons/io5'


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < IoLogoFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
