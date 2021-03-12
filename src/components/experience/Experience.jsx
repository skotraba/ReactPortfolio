import React from 'react';
import Container from 'react-bootstrap/Container';

//CSS
import "./Experience.scss"

const Experience = (props) => {
  return (
    <Container >
      <div className="myDiv">
      <h2>{props.jobName}</h2>
      <p>{props.description}</p>
        <div className="border"></div>
      </div>
      <br/>
    </Container> 
  );
}

export default Experience;