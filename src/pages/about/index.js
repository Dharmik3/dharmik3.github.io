import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import CV from '../../components/cv';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/about_particle.js';
import Particles from 'react-particles-js';

class About extends Component {


 
  render() {
    return (
      <Container className="About-header" fluid={true}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | Dharmik Patel</title>
          <link rel="canonical" href="http://dharmik3.github.io/home" />
          <meta
            name="description"
            content="Dharmik Patel | About - Web Developer | Learner "
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Container className="Contact-header" fluid={true}>

          <Row className="About-main">
            <HamburgerMenu />
            <CV />
          </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
          </Container>
        </Animate>
      </Container>
    );
  }
}

export default About;
