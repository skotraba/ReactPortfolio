import React from 'react';
import Button from "react-bootstrap/Button";



const Project = (props) => {
  return (
    <div className="img_wrap">
      <img className="img-fluid img " src={props.imgSrc} alt="Image not found"/>
      <div className="img_description text-center">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <Button className="m-2" variant="primary">
                View Code
            </Button>
        </a>
      </div>
    </div>
  );
}

export default Project;