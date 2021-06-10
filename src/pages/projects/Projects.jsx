import React, {useState} from 'react';

import './Projects.scss';

import {ProjectsData} from './ProjectsData.js';
// import TrelloGif from '../../assets/gifs/testTrello.gif';

const Projects = () => {

  let projects = [...ProjectsData];

  const [active, setActive] = useState(projects[0]);



  const change = (index) =>{
    let projectChange = active;
    projectChange.active = false;
    projectChange = projects[index];
    projectChange.active = true;
    setActive(projects[index]);
  }

  return (
    <div className="Projects" id="projects">
       <h1 className="Projects__heading">Projects</h1>
      <div className="Projects__container">
        <div className="Projects__upper">
          <div className="Projects__card">
            <img src={active.imageSrc} className="Projects__img"/>
            <div className="Projects__description">
              <h3>{active.name}</h3>
              <p> {active.description}</p>
              <a className="Projects__btn" href={active.link} target="_blank">View Code</a>
            </div>
          </div>
        </div>
        <div class="pagination">

          {
            projects.map((project, index) => (
              <a 
              onClick={() => change(index)}
              className={project.active ? "active" : ""}
              >{index + 1}</a>
            ))
          }
        </div>
      </div>
    
    </div>
      
  );
};

export default Projects;





