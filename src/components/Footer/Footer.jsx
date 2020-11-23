import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer py-2 text-center">
      <h2 className="p-4">CONTACT ME</h2>
      <div id="contact">
      <Jumbotron className="contact">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:skotraba@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" >Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/shannon-kotraba/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary">LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/skotraba" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-success">GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
      
      <h5>© SHANNON KOTRABA created using React</h5>
      <a href="http://www.freepik.com">Images by starline / Freepik</a>
    </div>
  );
}

export default Footer;