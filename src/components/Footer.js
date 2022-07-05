import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import NewsLetter from './NewsLetter';
import CopyRight from './CopyRight';
import SocialData from '../data/SocialData';
import UsefulLinks from '../data/UsefulLinks';
import OurServices from '../data/OurServices';

const Footer = () =>
{
    return(
        <footer>
            <NewsLetter />

            <section className="footer-section pt-5 pb-3">
                <Container className="py-3">
                    <Row>
                        <Col md={6} lg={3}>
                            <h4 className="fs-6 fw-bold text-uppercase mb-3">Useful Links</h4>
                            <ul>
                                {
                                    UsefulLinks.map( (item)=>
                                        <li className="d-flex align-items-center mb-3" key={item.id}>
                                            <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                     )
                                }
                            </ul>
                        </Col>

                        <Col md={6} lg={3}>
                            <h4 className="fs-6 fw-bold text-uppercase mb-3">Our Services</h4>
                            <ul>
                                {
                                    OurServices.map( (item)=>
                                        <li className="d-flex align-items-center mb-3" key={item.serviceID}>
                                            <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                                            <a href={item.serviceLink}>{item.serviceName}</a>
                                        </li>
                                     )
                                }
                            </ul>
                        </Col>

                        <Col md={6} lg={3}>
                            <h4 className="fs-6 fw-bold text-uppercase mb-3">Contact Us</h4>
                            <p className="mb-4">
                                A108 Adam Street <br/>New York, NY 535022 <br/>United States
                            </p>

                            <p>
                                <strong>Phone:</strong> +1 5589 55488 55 <br/>
                                <strong>Email:</strong> info@example.com
                            </p>
                        </Col>

                        <Col md={6} lg={3}>
                            <h4 className="fs-6 fw-bold text-uppercase mb-3">About Eterna</h4>
                            <p>
                                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.
                            </p>
                            <div className="social-links d-flex">
                                {
                                    SocialData.map( (item)=>
                                        <div className="social-link-background d-flex justify-content-center align-items-center me-2" key={item.socialID}>
                                            <a href={item.socialLink} target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={item.socialIcon} />
                                            </a>
                                        </div>
                                     )
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <CopyRight />
        </footer>
    );
}

export default Footer;