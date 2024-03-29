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
import omnifood from "../../assets/img/omnifood.jpeg";
import citylight from "../../assets/img/citylight.png";
import bankist from "../../assets/img/bankist.png";
import sociopedia from "../../assets/img/sociopedia.jpeg";
import movieland from "../../assets/img/movieland.jpeg";
import imagetotext from "../../assets/img/imagetotext.png";
import codeeditor from "../../assets/img/codeeditor.png";
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
                    imgPath={sociopedia}
                    isBlog={false}
                    title="Sociopedia"
                    description="This is a social media web application. It allows users to sign up, log in, post images with captions, make friends with other users, and like other users' posts and see their profile and modify it."
                    ghLink="https://github.com/Dharmik3/sociopedia"
                    demoLink="https://dharmik3.github.io/sociopedia"
                  />
                </Col>
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={movieland}
                    isBlog={false}
                    title="Movieland"
                    description="A movieland site developed using React and used API which gives all the essential information about the movies. Website will generate all the keyword related results. Users can able to see the trailer video of movie"
                    ghLink="https://github.com/Dharmik3/movieland"
                    demoLink="https://dharmik3.github.io/movieland/"
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
                    imgPath={imagetotext}
                    isBlog={false}
                    title="Image to Text Converter"
                    description="Image to text converter developed using React and tesseract.js library, which provide pure javascript OCR. User can able to copy the text on to clipboard directly."
                    ghLink="https://github.com/Dharmik3/Image-to-Text-in-React"
                    demoLink="https://image-to-text-dharmik3.vercel.app/"
                  />
                </Col>
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={codeeditor}
                    isBlog={false}
                    title="CodersGround"
                    description="Coders ground is a online code editor, to run HTML,CSS and JS in browser without additional local environment setup.Users can choose their themes, and auto complete the syntax and store the previously written code in localstorage."
                    ghLink="https://github.com/Dharmik3/codersground"
                    demoLink="https://codersground.vercel.app/"
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
