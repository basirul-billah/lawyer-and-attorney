import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Meet me I can help you</h3>
                        <p>From criminal cases to domestic issues, I am ready to serve you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Constant support 24x7</h3>
                        <p>I am always ready by the clock to help you in emergency cases.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Negotiate boldly</h3>
                        <p>With my negotiation skills I will help you to get through the toughest negotiations.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;