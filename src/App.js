import React from "react";
import "./myApp.scss";
import {Parallax} from "react-parallax";
import Container from 'react-bootstrap/Container';
import Picture from "./assets/bg.jpg";

//Components
import MyNavbar from "./components/navbar/MyNavbar";
import  MyCarousal from "./components/MyCarousal/MyCarousal";
import MyTitleMessage from "./components/MyTitleMessage/MyTitleMessage";
import Footer from "./components/Footer/Footer";

//Pages
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Experiences from "./pages/experiences/Experiences";
import Projects from "./pages/projects/Projects";

//CSS


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      {/* {alert("Mobile view is currently in progress. Sorry!")} */}
      <MyCarousal />
      <MyTitleMessage />
      <MyNavbar />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={Picture}
          bgImageAlt=""
          strength={-500}
        >
          <div>
            <Container className="container-box rounded">
                <About />
            </Container>
          </div>
        </Parallax>
        <Skills/>
      </div>
      <br/><br/>
      <Experiences/>
      <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={Picture}
          bgImageAlt=""
          strength={-500}
        >
          <div>
            <Projects />
          </div>
      </Parallax>
      <Footer/>
    </div>
  );
};

export default App;
