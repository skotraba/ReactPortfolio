import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

//images
import Slide1 from "../../assets/Carousal/keyboard.jpg";
import Slide2 from "../../assets/Carousal/code.jpg";
import Slide3 from "../../assets/Carousal/code2.jpg";


import "./MyCarousal.scss";

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
    </div>
  );
}

export default MyCarousal;