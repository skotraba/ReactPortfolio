import React from 'react';
//Component

import {Slide} from 'react-awesome-reveal';
import Experience from "../../components/experience/Experience"

import "./Experiences.scss";

const jobs = [
  {
    name: 'Bachlors of Chemistry, Minor in Criminal Justice',
    description: "I graduated in 2019 and returned to school in 2020. I am currently attending Wake Technical Community College, I have completed a Programming and Development certificate and currently working towards an Associates of Programming and C++ Certificate.  I hope to gain professional experience and later return to school for a Master's in Computer Science",
    delay: 200
  },
  {
    name: 'IT Technician at Jilasoan March 2020',
    description: 'Developed and managed multiple Wordpress sites, General troubleshooting for Mac and Windows OS, Assisted clients with software and hardware issues, Network set up and troubleshooting.'
    ,
    delay: 0
  },
  {
    name: 'Analytical Chemical Technician Intern at Pneuma Respiratory 2019',
    description: 'Produced and analyzed experiments using standard analytical laboratory equipment,	Calculated and evaluated data to be in a presentable format',
    delay: 200
  },
 
  
  
]

let isMobile;
if(window.screen.width < 600){
  isMobile = true;
} else {
  isMobile = false;
}


const Experiences = (props) => {
  return (
    <div id="experience" className="Experiences">
        <h1 className="text-center Experiences__heading">Related Experience</h1>
        {(isMobile) ? 
        jobs.map((job, index) => (
          <div delay={job.delay}>
            <Experience jobName={job.name} description={job.description} key={index}/>
          </div> )) :
          jobs.map((job, index) => (
            <Slide delay={job.delay}>
              <Experience jobName={job.name} description={job.description} key={index}/>
            </Slide> ))
        }
        {console.log(isMobile)}
        
    </div>
  );
}

export default Experiences;