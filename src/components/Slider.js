import React from 'react';
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import SliderData from '../data/SliderData';

const Slider = () =>
{
    return(
        <section className="slider-section">
            <Container className="px-0" fluid>
                <Row>
                    <Col>

                        <Carousel className="carousel-dark">
                            {
                                SliderData.map( (item)=>
                                    <Carousel.Item key={item.slideID}>
                                        <Image src={item.slideImage} className="d-block w-100"/>

                                        <Carousel.Caption>
                                            <h2 className="fw-bold">{item.slideTitle1} <span>{item.slideTitle2}</span></h2>
                                            <p>{item.slideDesc}</p>
                                            <Button className="main-btn primary-btn mb-3">Read More</Button>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            }
                            
                        </Carousel>
                         
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Slider;