import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import Profile from '../../assets/working.png';

import "./about.css";

const About = (props) => {
  return (
    <div id="about" className="about">
      <h1 className=" text-center font-details pb-5">About Me</h1>
      <h1 className="aboutH">ABOUT</h1>
      <Container>
        <Row>  {/* Picture Col */}
          <Col xs={12} md={6}> 
            <Image className="profile justify-content-end fluid" src={Profile} thumbnail />
          </Col>
          <Col xs={12} md={{span:4, offset:2}}>
            <Row>
              <h4 className="">Hi there, I'm <b>Shannon</b></h4>
              <br></br>
              <br></br>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam obcaecati vel voluptates, nihil nobis aut et animi repellat, unde in deserunt ullam eaque fugit iusto dolorem quis porro placeat.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nisi obcaecati maiores voluptate quaerat velit enim et voluptatem, fuga assumenda, vitae labore, veniam omnis inventore ullam! Veritatis unde tempore voluptas.</p>
            </Row>
            <Col className="d-flex justify-content-center flex-wrap my-details">
              <div>
                <a href="#contact">
                  <Button className="m-2" variant="outline-primary">
                    Let's talk
                  </Button>
                </a>
              </div>
              <div>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Button className="m-2" variant="outline-dark">
                    My Resume
                  </Button>
                </a>
              </div>
              <div>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Button className="m-2" variant="outline-success">
                    GitHub
                  </Button>
                </a>
              </div>
              <div>
                <a href="" target="_blank" rel="noopener noreferrer">
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