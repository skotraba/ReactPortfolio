import React from 'react';
import Button from "react-bootstrap/Button";



const Project = (props) => {
  return (
    <div className="img_wrap">
      <img className="img-fluid img " src={props.imgSrc} alt="Image not found"/>
      <div className="img_description text-center">
        {console.log(props)}
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <Button>View Code</Button>
      </div>
    </div>
  );
}

export default Project;