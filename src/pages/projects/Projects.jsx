import React from 'react';

import './Projects.scss';

const Projects = () => {
  return (
    <div className="Projects">
      Projects
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