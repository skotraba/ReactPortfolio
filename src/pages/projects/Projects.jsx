import React from 'react';

//Components
import Project from "../../components/Project/Project";
import {ProjectsData} from "./ProjectsData";

import "./Projects.css"


const Projects = () => {
  return (
    <div>
      <div>
        <h2 className="mt-5 text-center font-details">Projects</h2>
      </div >
      <div id="projects" className="projectsSec mb-5">
        {ProjectsData.map((project, index) => (
          <Project name={project.name} imgSrc={project.imageSrc} description={project.description} link={project.link}></Project>
        ))}
      </div>
      
    </div>  
  );
}

export default Projects;