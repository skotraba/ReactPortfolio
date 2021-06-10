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
      <div className="skills__holder">
          {/* Frontend */}
          <div className="focus skills__card" style={{ width: '18rem' }}>
            <div className="text-center skills__card__heading">FrontEnd</div>
            <div className="skills__card__inner">
              {skills.frontend.map((skill, index) => (
                <span className="skills__card__inner__skill" key={`${skill.skillname}${index}`}>
                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                    <p>{skill.skillname}</p> 
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="focus skills__card" style={{ width: '18rem' }}>
            <div className="text-center skills__card__heading">Backend</div>
            <div className="skills__card__inner">
              {skills.backend.map((skill, index) => (
                <span className="skills__card__inner__skill" key={`${skill.skillname}${index}`}>
                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                    <p>{skill.skillname}</p> 
                </span>
              ))}
            </div>
          </div>

        {/* Languages */}
        <div className="focus skills__card" style={{ width: '18rem' }}>
            <div className="text-center skills__card__heading">Languages</div>
            <div className="skills__card__inner">
              {skills.languages.map((skill, index) => (
                <span className="skills__card__inner__skill" key={`${skill.skillname}${index}`}>
                    <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image>
                    <p>{skill.skillname}</p> 
                </span>
              ))}
            </div>
          </div>
      </div>
  </div>
  );
}

export default Skills;