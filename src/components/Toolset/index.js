import React from "react";
import "./style.css";
import { Col, Row,  } from "react-bootstrap";
import {
  
  DiGit,
} from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,

} from "react-icons/si";

function Toolset() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolset;
