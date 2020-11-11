import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import Profile from '../../assets/color.png';

import "./about.css";

const About = (props) => {
  return (
    <div id="#about" className="about">
      <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
      <Container>
        <Row className="pt-3 pb-5 align-items-center">
          <Col xs={12} md={6}>
            {/* Profile Pic */}
            <Row className="justify-content-center mb-2 mr-2">
            <Image className="profile justify-content-end fluid" src={Profile} thumbnail />
            </Row>
          </Col>
          <Col xs={12} md={6}>
            {/* Description */}
            <Row>
              <h4 className="">Hi there, I'm <b>Shannon</b></h4>
              <br></br>
              <br></br>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam obcaecati vel voluptates, nihil nobis aut et animi repellat, unde in deserunt ullam eaque fugit iusto dolorem quis porro placeat.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nisi obcaecati maiores voluptate quaerat velit enim et voluptatem, fuga assumenda, vitae labore, veniam omnis inventore ullam! Veritatis unde tempore voluptas.</p>
            </Row>
            <Row>
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
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;