import React from 'react';
import { Carousel } from 'react-bootstrap'

import eagle1 from '../../assets/images/eagle1.jpg'
import eagle2 from '../../assets/images/eagle2.jpg'
import eagle3 from '../../assets/images/eagle3.jpg'
import "./Carousel.css"

function ControlledCarousel() {
    return (
        <div className="carousel">
            <Carousel>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={eagle1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={eagle2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src={eagle3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
  }

export default ControlledCarousel;