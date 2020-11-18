import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import catLogo from "../../assets/blackCat.png";

import "./MyNavbar.css";

const MyNavbar = () => {
    return (
        <>
        <Navbar variant="dark" fixed="top" className="animate-navbar nav-theme justify-content-between">
          <Navbar.Brand href="#home"></Navbar.Brand>
            <img className="logo" src={catLogo} alt="dunno"></img>
          <Nav className="ml-auto">
            <Nav.Link className="navLink" href="#home">Home</Nav.Link>
            <Nav.Link className="navLink" href="#about">About</Nav.Link>
            <Nav.Link className="navLink" href="#skills">Skills</Nav.Link>
            <Nav.Link className="navLink" href="#experience">Experience</Nav.Link>
          </Nav>
        </Navbar>
        <br />
      </>
    );
}

export default MyNavbar;