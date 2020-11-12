import React from 'react';

import {Carousel} from 'react-bootstrap';

import home from "../../images/floes y queso.jpeg";
import azul from "../../images/azul higos.jpeg"

export const CarouselImages = () => {
    return (
        <Carousel>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={home}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={azul}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2500}>
    <img
      className="d-block w-100"
      src={home}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    )
}
