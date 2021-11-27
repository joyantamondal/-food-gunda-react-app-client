import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <div className="food-banner">
        <Container>
      <Carousel className="mb-4">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 slider-img banner-img"
            src="https://www.masalabox.com/themes/organie1/img/party%20order%20banner%209.jpg?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 slider-img banner-img"
            src="https://www.simplyfresh.info/wp-content/themes/Food-Theme/images/healthy_banner.jpg?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-img banner-img"
            src="https://image.freepik.com/free-vector/online-food-delivery-grocery-order-service-banner_107791-2153.jpg?text=&bg=20232a"
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
    </Container>
    
        </div>
    );
};

export default Banner;