import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from "react-bootstrap/Button";

import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";

import testImage from "../../assets/images/photo1.webp";

const Project = (props) => {
  return (
    <div class="img_wrap">
      <img class="img" src={testImage} />
      <p class="img_description text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
  );
}

export default Project;