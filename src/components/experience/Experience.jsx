import React from 'react';
import Container from 'react-bootstrap/Container';

//CSS
import "./Experience.scss"

const Experience = (props) => {
  return (
      <div className="myDiv">
      <h2 className="myDiv__heading">{props.jobName}</h2>
      <p>{props.description}</p>
        <div className="border"></div>
      </div>
  );
}

export default Experience;