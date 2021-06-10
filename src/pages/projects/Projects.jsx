import React from 'react';

import './Projects.scss';

import {ProjectsData} from './ProjectsData.js';
import TrelloGif from '../../assets/gifs/testTrello.gif';

const Projects = () => {
  const featuredProject =
   {
    imageSrc: TrelloGif,
    link: "https://github.com/skotraba/TrelloClone",
    name: "Trello Clone",
    description: "I created a clone of Trello using the React framework.  The project incorporates react-beautiful-dnd to recreate the drag and drop feature and material-ui for design.  The data is stored using Firebase/Firestore.  Written using BEM methodology and a mobile first design."
  }

  return (
    <div className="Projects" id="projects">
      <div className="Projects__upper">
        <h1 className="text-center Projects__heading">Projects</h1>
        <div className="Projects__card-featured">
          <img src={featuredProject.imageSrc} className="Projects__img-featured"/>
          <div className="Projects__description-featured">
            {/* {featuredProject.description} */}
            <h3>{featuredProject.name}</h3>
            <a className="Projects__btn" href={featuredProject.link} target="_blank">View Code</a>
          </div>
        </div>
      </div>
      <div className="Projects__flex">
        {ProjectsData.map(project => (
           <div className="Projects__card">
            <img src={project.imageSrc} className="Projects__img"/>
            <div className="Projects__description">
              {project.description}
            </div>
            <a className="Projects__btn" href={project.link} target="_blank">View Code</a>
          </div>
        ))}
      </div>
    </div>
      
  );
};

export default Projects;





