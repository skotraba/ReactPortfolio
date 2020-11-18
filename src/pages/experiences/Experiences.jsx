import React from 'react';
//Component

import {Slide} from 'react-awesome-reveal';
import Experience from "../../components/experience/Experience"


let jobs = [
  {
    name: 'IT',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam consectetur illum ullam id odio numquam. Assumenda asperiores, iste veniam necessitatibus deleniti culpa quae facilis. Perspiciatis perferendis sit dolorum architecto officiis.',
    delay: 0
  },
  {
    name: 'Job 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam consectetur illum ullam id odio numquam. Assumenda asperiores, iste veniam necessitatibus deleniti culpa quae facilis. Perspiciatis perferendis sit dolorum architecto officiis.',
    delay: 200
  },
  {
    name: 'Job 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam consectetur illum ullam id odio numquam. Assumenda asperiores, iste veniam necessitatibus deleniti culpa quae facilis. Perspiciatis perferendis sit dolorum architecto officiis.',
    delay: 200
  },
  
]



const Experiences = (props) => {
  return (
    <div id="experience">
        <h1 className="font-details-b text-center">Related Experience</h1>
        {jobs.map((job, index) => (
          <Slide delay={job.delay}>
            <Experience jobName={job.name} description={job.description} key={index}/>
          </Slide>
            
        ))}
    </div>
  );
}

export default Experiences;