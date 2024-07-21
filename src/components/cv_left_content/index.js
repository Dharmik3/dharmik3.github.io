import React, { Component } from 'react';
import '../cv_left_content/style.css';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Button } from 'react-bootstrap';
import resume from '../../assets/img/Dharmik_Resume.pdf'
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1
    }}
  />
);

class CLC extends Component {


  render() {

    return (
      <Bounce>
        <div className="clc_main">
          <div className="clc_container">
            <Fade top cascade>
              <h1 className="clc_header">About Me</h1>
            </Fade>
            <ColoredLine color="#FFC466" />
            <Fade top cascade>
              <div className="about-details">
                <p>
                  Hi <span>&#128075; </span>
                  <br />
                  I'm Dharmik Patel. I’m a Full-Stack Developer
                </p>
                <p>
                  I'm a <b>Software Developer</b>, geek and curious human besides
                  being an OpenSource enthusiast.</p>
                <p>
                  In my recent experience I was working as a Software Developer position, where I honed my skills and contributed to impactful projects for creating the database tool for Devops and Data team.
                </p><p>My passion lies in creating user-friendly software and applications that drive engagement and satisfaction. I am committed to continuous learning and staying updated with the latest technologies.
                </p>
                <p className="finalText">I love travel and watching cricket.</p>
              </div>

              <div className="resume-container">
                <p className="resume-heading">
                  Open to opportunities and challenges.
                </p>
                <a style={{ textDecoration: 'none' }} href={resume} target="_blank">
                  <div className="resume-download">
                    <Button variant="primary" className="resume-btn">
                      RESUME
                    </Button>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </Bounce>
    );
  }


}

export default CLC;
