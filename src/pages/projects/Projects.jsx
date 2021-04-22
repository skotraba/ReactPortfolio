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
    description: "I created a clone of Trello using the React framework.  The project incorporates react-beautiful-dnd to recreate the drag and drop feature and material-ui for design.  The data is stored using Firebase/Firestore.  Written using REM methodology and a mobile first design."
  }

  return (
    <div className="Projects">
      <div className="Projects__upper">
        <h1 className="text-center Projects__heading">Projects</h1>
        <div className="Projects__card-featured">
          <img src={featuredProject.imageSrc} className="Projects__img-featured"/>
          <div className="Projects__description-featured">
            {featuredProject.description}
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







// import React from 'react';

// //Components
// import Project from "../../components/Project/Project";
// import {ProjectsData} from "./ProjectsData";

// import {Card, CardDeck, CardGroup, Button} from 'react-bootstrap'

// import "./Projects.scss"


// const Projects = () => {
//   return (
//     <div className="Projects">
//       <Project/>
//       <h1 className="font-details-b text-center">Projects</h1>
//       <CardDeck className="Projects__box">
//         {ProjectsData.map(project => (
//           <Card className="Projects__card" style={{ minWidth: '18rem' }}>
//           <Card.Img 
//           variant="top" 
//           src={project.imageSrc}
//           style={{ minHeight: '18rem' }} />
//           <Card.Body>
//             <Card.Title>{project.name}</Card.Title>
//             <Card.Text>
//               {project.description}
//             </Card.Text>
            
//           </Card.Body>
//           <Button className="Projects__btn" href={project.link} variant="primary">View Code</Button>
//         </Card>
//         ))}
//       </CardDeck>
//     <div className="clear"></div>
//     </div>
    

//   );
// }

// export default Projects;