import React from 'react';

//Components
import Project from "../../components/Project/Project";
import {ProjectsData} from "./ProjectsData";

import {Card, CardDeck, CardGroup, Button} from 'react-bootstrap'

import "./Projects.scss"


const Projects = () => {
  return (
    <div className="Projects">
      <h1 className="font-details-b text-center">Projects</h1>
      <CardDeck >
        {ProjectsData.map(project => (
          <Card className="" style={{ minWidth: '18rem' }}>
          <Card.Img 
          variant="top" 
          src={project.imageSrc}
          style={{ minHeight: '18rem' }} />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>
              {project.description}
            </Card.Text>
            
          </Card.Body>
          <Button className="Projects__btn" href={project.link} variant="primary">View Code</Button>
        </Card>
        ))}
      </CardDeck>
    <div className="clear"></div>
    </div>
    
    






    // <div>
    //   <div>
    //     <h2 className="mt-5 text-center font-details">Projects</h2>
    //   </div >
    //   <div id="projects" className="projectsSec mb-5">
    //     {ProjectsData.map((project, index) => (
    //       <Project name={project.name} imgSrc={project.imageSrc} description={project.description} link={project.link}></Project>
    //     ))}
    //   </div>
      
    // </div>  
  );
}

export default Projects;