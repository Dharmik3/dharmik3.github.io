import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a
        href="https://github.com/Dharmik3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/dharmikS_patel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="twitter" icon={faTwitter} />
      </a>
      <a
        href="https://www.instagram.com/dharmik._.3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="insta" icon={faInstagram} />
      </a>
      <a
        href="https://www.linkedin.com/in/dharmik3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      </a>
    </Col>
  );
}

export default SocialIcons;
