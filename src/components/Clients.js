import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Client1 from '../assets/images/clients/client-1.png';
import Client2 from '../assets/images/clients/client-2.png';
import Client3 from '../assets/images/clients/client-3.png';
import Client4 from '../assets/images/clients/client-4.png';
import Client5 from '../assets/images/clients/client-5.png';
import Client6 from '../assets/images/clients/client-6.png';
import Client7 from '../assets/images/clients/client-7.png';
import Client8 from '../assets/images/clients/client-8.png';

const Clients = () =>
{

    return(
        <section className="clients-section">
            <Container className="py-3">
                <Row className="section-title mb-4">
                    <Col xs={12}>
                        <h3 className="d-inline-block mb-3 pb-3">Clients</h3>
                    </Col>
                    <Col xs={12} className="px-0">
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Swiper 
                            modules={[Autoplay, Pagination]}
                            slidesPerView={6}
                            spaceBetween={100}
                            pagination={{clickable: true,}}
                            loop={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false,}}
                        >
                            <SwiperSlide className="d-inline-block">
                                <Image src={Client1} fluid />
                            </SwiperSlide>
                            <SwiperSlide className="d-inline-block">
                                <Image src={Client2} fluid />
                            </SwiperSlide>
                            <SwiperSlide className="d-inline-block">
                                <Image src={Client3} fluid />
                            </SwiperSlide>
                            <SwiperSlide className="d-inline-block">
                                <Image src={Client4} fluid />
                            </SwiperSlide>
                            <SwiperSlide className="d-inline-block">
                                <Image src={Client5} fluid />
                            </SwiperSlide>
                            <SwiperSlide className="d-inline-block">
                                <Image src={Client6} fluid />
                            </SwiperSlide>
                            <SwiperSlide className="d-inline-block">
                                <Image src={Client7} fluid />
                            </SwiperSlide>
                            <SwiperSlide className="d-inline-block">
                                <Image src={Client8} fluid />
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Clients;