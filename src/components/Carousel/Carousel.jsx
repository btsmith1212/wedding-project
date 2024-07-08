import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import reactImg from '../../assets/react.svg';
import flowerImg from '../../assets/flower.webp';


function CarouselFade() {
  return (
    <section id="carousel" >
        <Carousel fade>
          <Carousel.Item>
              <img src={reactImg} alt="Image 1" class='active'/>
          </Carousel.Item>
          <Carousel.Item>
              <img src={flowerImg} alt="Image 2"/>
          </Carousel.Item>
        </Carousel>
    </section>
  );
}

export default CarouselFade;
