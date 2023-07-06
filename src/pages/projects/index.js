import React, { Component } from 'react';
import '../projects/style.css';
import {Container, Row,Col} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/project_particle.js';
import Particles from 'react-particles-js';
import ProjectCard from "../../components/project_card";
import omnifood from "../../assets/img/omnifood.png";
import citylight from "../../assets/img/citylight.png";
import bankist from "../../assets/img/bankist.png";
import pigGame from "../../assets/img/pigGame.png";
import guessNum from "../../assets/img/guessNum.png";

class Projects extends Component {
 
  render() {
    return (
      <Container className="About-header" fluid={true}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Project | Dharmik Patel</title>
          <link rel="canonical" href="http://dharmik3.github.io/home" />
          <meta
            name="description"
            content="Dharmik Patel | Project - Web Developer Learner  portfolio react designer coder"
          />
         
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Row className="About-main">
            <Particles params={particles} className="particle" />
            <HamburgerMenu />
            <Container className="project-section">
              <h1 className="project-heading">
                My Recent <strong className="purple">Works </strong>
              </h1>
              <p className="project-sub-heading">
                Here are a few projects I've worked on recently.
              </p>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={citylight}
                    isBlog={false}
                    title="CityLight"
                    description="CityLight is a restaurant app made with react that allows users to explore food items, add them to the cart, make payments through the Stripe payment gateway, and generate invoices for their orders. The app utilizes Firebase for storing data related to food items, user information, and the user's cart."
                    ghLink="https://github.com/Dharmik3/CityLight"
                    demoLink="https://restaurant-app-3.web.app/"
                  />
                </Col>
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={omnifood}
                    isBlog={false}
                    title="Omnifood"
                    description="Omnifood is an food subscription website that will make you eat healthy again build with HTML, CSS and Vanilla Javascript. Containing features of real form and good loking UI."
                    ghLink="https://github.com/Dharmik3/Omnifood-project"
                    demoLink="https://healthyomnifood.netlify.app/"
                  />
                </Col>

                
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={pigGame}
                    isBlog={false}
                    title="Pig-Game"
                    description="Pig game is very popular game for beginners level projects which I made with HTML, CSS, js. In this game there are two player. Player roll the dice until he gets 1 on dice, otherwise hold and gave chance to other player. "
                    ghLink="https://github.com/Dharmik3/pig-game.io"
                    demoLink="https://dharmik3.github.io/pig-game.io/"
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={bankist}
                    isBlog={false}
                    title="Bankist"
                    description="Bankist is a bank website which showcase the information of bank, which build using vanilla js,HTML and CSS. Website having lazy loading image and slider testimonial."
                    ghLink="https://github.com/Dharmik3/bankist.io"
                    demoLink="https://dharmik3.github.io/bankist.io/"
                  />
                </Col>

                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={guessNum}
                    isBlog={false}
                    title="Guess My Number"
                    description="Guess my number is a guessing game. Build with HTML, CSS and js.It's generate random number and player has to guess right number in minimum steps. "
                    ghLink="https://github.com/Dharmik3/guess-num.io"
                    demoLink="https://dharmik3.github.io/guess-num.io/"
                  />
                </Col>
              </Row>
            </Container>
          </Row>
          <br />
          <Row className="About-footer">
            <Footer />
          </Row>
        </Animate>
      </Container>
    );
  }
}

export default Projects;
