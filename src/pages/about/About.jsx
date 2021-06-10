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
          <Col className="about__hide"> 
            <Image className="profile fluid" src={Profile} thumbnail />
          </Col>
          <Col >
            <Row>
              <h4 className="">Hi there, I'm <b>Shannon</b></h4>
              <br></br>
              <br></br>
              <br></br>
              <p>I am a former Army Medic who decided to pursue a life of research. I studied to become an analytical chemist but discovered programming along the way and have been driven to turn it into a career ever since. I completed my degree in Chemistry and returned to school for programming and development.  I transitioned into IT work shortly after moving to Raleigh and will continue to transition into Software Development. </p>
              <p>Although I am predominately self-taught, I am attending Wake Technical Community College working towards programming certificates and have had a Software Engineer with a degree in Computer Science mentor me along the way.  I am familiar with Object-Oriented Programming, Front-End Development, scripting, and IT fundamentals.  I try to be as humble and accurate about my skillset as possible.  The skills that I have listed on my resume are all things that I have been exposed to and are familiar with.  I am a motivated, fast learner with strong troubleshooting and problem-solving skills.</p>
              <p>
              In my free time, I enjoy learning a variety of things. I am trying to learn Spanish. Being multilingual is very important and I love learning about different cultures and ways of life. I am very creative and artistic so I’m always learning about different art techniques and mediums. I also play piano, a variety of outdoor activities, and making video games with Unity as well as playing them.
              </p>
              <p>
              I created this portfolio using React.js.  I understand this portfolio could have been created using vanilla JavaScript but I wanted a simple project for applying what I’ve learned with React.  In the future, I would love to keep updating this portfolio and applying what I’ve learned.  I’ve created a few portfolios now, and I always love looking back and seeing my progress as a developer.
              </p>
              <p>
              I appreciate you taking the time to look at my portfolio and always welcome constructive criticism.
              </p>
            </Row>
            <Col className="my-details">
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