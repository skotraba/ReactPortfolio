import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import Profile from '../../assets/working.png';
import Resume from '../../assets/images/Resume2.pdf';

import "./about.scss";

const About = (props) => {
  return (
    <div id="about" className="about">
      <h1 className=" text-center about__heading">About Me</h1>
      <h1 className="aboutH">ABOUT</h1>
      <Container>
        <Row>  {/* Picture Col */}
          <Col > 
            <Image className="profile fluid" src={Profile} thumbnail />
          </Col>
          <Col >
            <Row>
              <h4 className="">Hi there, I'm <b>Shannon</b></h4>
              <br></br>
              <br></br>
              <br></br>
              <p>I am a former Army Medic who decided to pursue a life of research. I studied to become an analytical chemist but discovered programming along the way and have been driven to turn it into a career ever since. I completed my degree in Chemistry and returned to school for programming and development as well as some programming certificates.  I transitioned into IT work shortly after moving to Raleigh and will continue to transition to Software Development. Experienced with Object-Oriented Programming, Front-End Development, scripting and IT fundamentals.  I am particulary passionate about responsive and dynamic solutions for web applications. I am a motivated, fast learner with strong troubleshooting and problem-solving skills and an analytical mindset.</p>
            </Row>
            <Col className="d-flex  flex-wrap my-details">
              <div>
                <a href="#contact">
                  <Button className="m-2" variant="outline-primary">
                    Let's talk
                  </Button>
                </a>
              </div>
              <div>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  <Button className="m-2" variant="outline-dark">
                    My Resume
                  </Button>
                </a>
              </div>
              <div>
                <a href="https://github.com/skotraba" target="_blank" rel="noopener noreferrer">
                  <Button className="m-2" variant="outline-success">
                    GitHub
                  </Button>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/shannon-kotraba/" target="_blank" rel="noopener noreferrer">
                  <Button className="m-2" variant="outline-info">
                    LinkedIn
                  </Button>
                </a>
              </div>
              </Col>
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default About;