import React from "react";
import "./myApp.css";
import Fade from 'react-reveal/Fade';
import {Parallax} from "react-parallax";
import Container from 'react-bootstrap/Container';

import Picture from "./assets/bg.webp";

//Components
import MyNavbar from "./components/navbar/MyNavbar";
import  MyCarousal from "./components/MyCarousal/MyCarousal";
import MyTitleMessage from "./components/MyTitleMessage/MyTitleMessage";

//Pages
import About from "./pages/about/About"


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
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
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <hr />
    </div>
  );
};

export default App;
