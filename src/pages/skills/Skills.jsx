import React from 'react';
//Bootstrap
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//skills
import "./Skills.scss";
import {skills} from "./SkillsData";


const Skills = () => {
  return (
    <div id="skills"  className="skills">
      <h1 className="text-center skills__heading">Tech Skills</h1>
      <CardDeck>
          {/* Frontend */}
          <Card className="focus skills__card" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="text-center">FrontEnd</Card.Title>
            <Card.Text>
              {skills.frontend.map((skill, index) => (
                <span className="p-2" key={`${skill.skillname}${index}`}>
                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                </span>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Backend */}
        <Card className="focus skills__card" style={{ width: '18rem' }}> 
          <Card.Body>
            <Card.Title className="text-center">Backend</Card.Title>
            <Card.Text>
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

        {/* Languages */}
        <Card className="focus skills__card" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="text-center">Languages</Card.Title>
            <Card.Text>
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