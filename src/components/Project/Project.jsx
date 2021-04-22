import React from 'react';
import Button from "react-bootstrap/Button";

import TrelloGif from '../../assets/gifs/updatedTrello.gif';
import './Project.scss';

const Project = (props) => {


  const featured = {
    imageSrc: TrelloGif,
    link: "https://github.com/skotraba/TrelloClone",
    name: "Trello Clone",
    description: "I created a clone of Trello using the React framework.  The project incorporates react-beautiful-dnd to recreate the drag and drop feature and material-ui for design.  The data is stored using Firebase/Firestore.  Written using REM methodology and a mobile first design."
  }

  return (
    <div className="img">
      <h1 className="img__heading">Featured Project</h1>
      <img src={featured.imageSrc} className="img__image"></img>
      <div className="img__description text-center">
        <h4>{featured.name}</h4>
        <p>{featured.description}</p>
        <a href={featured.link} target="_blank" rel="noopener noreferrer">
            <Button className="m-2" variant="primary">
                View Code
            </Button>
        </a>
      </div>
    </div>
  );
}

export default Project;