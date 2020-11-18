//FRONTEND
import BOOTSTRAP from "../../assets/skills/skills_icons/bootstrap-4.svg";
import REACTBOOTSTRAP from "../../assets/skills/skills_icons/react-bootstrap.svg";
import REACT from "../../assets/skills/skills_icons/react.svg";
import CSS from "../../assets/skills/skills_icons/css3.svg";
import HTML from "../../assets/skills/skills_icons/html-5.svg";
import MATERIAL from "../../assets/skills/skills_icons/material.svg";
import SASS from "../../assets/skills/skills_icons/sass.svg";
import STYLECOMP from "../../assets/skills/skills_icons/styled-components.svg";

//BACKEND
import MYSQL from "../../assets/skills/skills_icons/mssql.svg";
import NODEJS from "../../assets/skills/skills_icons/nodejs.svg"

//LANGUAGES
import JAVASCRIPT from "../../assets/skills/skills_icons/javascript.svg";
import PYTHON from "../../assets/skills/skills_icons/python.svg";
import CPP from "../../assets/skills/skills_icons/cpp.png";
import CSHARP from "../../assets/skills/skills_icons/csharp.svg";

export const skills = {
  frontend: [
    { skillname: 'BootStrap',
    imgSrc: BOOTSTRAP},
    { skillname: 'ReactBootstrap',
    imgSrc: REACTBOOTSTRAP},
    { skillname: 'React',
    imgSrc: REACT},
    { skillname: 'CSS',
    imgSrc: CSS},
    { skillname: 'HTML',
    imgSrc: HTML},
    { skillname: 'Material',
    imgSrc: MATERIAL},
    { skillname: 'Sass',
    imgSrc: SASS},
    { skillname: 'Styled Components',
    imgSrc: STYLECOMP}
  ],
  backend: [
    {skillname: 'MySQL',
    imgSrc: MYSQL},
    {skillname: 'Node',
    imgSrc:NODEJS }

  ],
  languages: [
    { skillname: 'Javascript',
    imgSrc: JAVASCRIPT},
    { skillname: 'Python',
    imgSrc: PYTHON },
    { skillname: 'C++',
    imgSrc: CPP},
    { skillname: 'C#',
    imgSrc: CSHARP}

  ]
}