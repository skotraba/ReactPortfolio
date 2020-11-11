import React from 'react';
//Bootstrap
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//skills
import "./Skills.css";
import {skills} from "./SkillsData";


const Skills = () => {
  return (
    <div id="skills">
      <h1 className="text-center pb-4 font-details-b">Tech Skills</h1>
      <CardDeck>
          {/* Frontend */}
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center card-title">Frontend</Card.Title>
                <br/>
                <hr />
                <Card.Text className="card-text">
                  {skills.frontend.map((skill, index) => (
                    <span className="p-2" key={`${skill.skillname}${index}`}>
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

             {/* Backend */}
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Backend and Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.backend.map((skill, index) => (
                    <span className="p-2" key={`${skill.skillname}${index}`}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Somethingelse */}
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.languages.map((skill, index) => (
                    <span className="p-2" key={`${skill.skillname}${index}`}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
      </CardDeck>
  </div>
  );
}

export default Skills;