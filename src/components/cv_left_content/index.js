import React, { Component } from 'react';
import '../cv_left_content/style.css';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { Button} from 'react-bootstrap';
import resume from '../../assets/Dharmik_Patel_Resume.pdf'
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


  render(){
    
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
                  I'm Dharmik Patel. I’m currently in third year of Beachlor of
                  Enginnering. I'm doing my undergrade in Information
                  Techonology from <b>GCET</b>.
                </p>
                <p>
                  I'm a <b>web developer</b>, geek and curious human besides
                  being an OpenSource enthusiast. I am efficient at frontend and
                  currently learning backend in Node.js
                </p>
                <p className="finalText">I love travel and watching cricket.</p>
              </div>

              <div className="resume-container">
                <p className="resume-heading">
                  Open to opportunities and challenges.
                </p>
                <a href={resume}>
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
