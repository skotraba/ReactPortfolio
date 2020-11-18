import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';

//Components
import Project from "../../components/Project/Project";

import "./Projects.css"


const Projects = (props) => {
  return (
    <div>
      <div>
        <h2 className="mt-5 text-center font-details">Projects</h2>
      </div>
        <div id="projects" className="projectsSec">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        
      </div>  
  );
}

export default Projects;