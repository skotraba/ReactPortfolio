import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/SKLogo.png";

import "./MyNavbar.css";

const MyNavbar = () => {
    return (
        <>
        {
        <Navbar  fixed="top" expand="lg" bg="dark" variant="dark" className="animate-navbar nav-theme justify-content-between">
          <Navbar.Brand href="#home"></Navbar.Brand>
            <a href="home"><img className="logo" src={Logo} alt="dunno"></img></a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="navLink" href="#home">Home</Nav.Link>
                <Nav.Link className="navLink" href="#about">About</Nav.Link>
                <Nav.Link className="navLink" href="#skills">Skills</Nav.Link>
                <Nav.Link className="navLink" href="#experience">Experience</Nav.Link>
                <Nav.Link className="navLink" href="#contact">Contact</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
        }
      </>
    );
}

export default MyNavbar;