import React from "react";
import "./style.css";
import { Col, Row, } from "react-bootstrap";
import {
  DiGit, DiGithubBadge,
} from "react-icons/di";
import {
  SiPostman,
  SiBitbucket,
} from "react-icons/si";
import { BiLogoVisualStudio } from 'react-icons/bi'
import { FiFigma } from 'react-icons/fi'

function Toolset() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVisualStudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < FiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    <Col Col xs = { 4} md = { 2} className = "tech-icons" >
      <DiGithubBadge />
      </Col >
    </Row >
  );
}

export default Toolset;
