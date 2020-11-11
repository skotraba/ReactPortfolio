import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

//images
import Slide1 from "../../assets/Carousal/slide1.webp";
import Slide2 from "../../assets/Carousal/slide2.webp";
import Slide3 from "../../assets/Carousal/slide3.webp";

//Components
import ScrollDown from "../ScrollDown/ScrollDown"

import "./MyCarousal.css"

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel className="mine" pauseOnHover={false}>
        <Carousel.Item>
          <img
          className="d-block w-100 custom-img"
          src={Slide1}
          alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="d-block w-100 custom-img"
          src={Slide2}
          alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="d-block w-100 custom-img"
          src={Slide3}
          alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
}

export default MyCarousal;