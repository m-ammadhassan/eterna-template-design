import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialBar = () =>
{
    return(
        <section className="social-section">
            <Container className="py-2">
                <Row>
                    <Col xs={12} md={8} className="contact-info d-flex flex-column flex-sm-row justify-content-center justify-content-md-start align-items-center">
                        <div className="email d-flex align-items-center me-0 me-sm-4">
                            <FontAwesomeIcon icon={faEnvelope}  />
                            <span className="ms-2">
                                <a href="mailto:contact@example.com">contact@example.com</a>
                            </span>
                        </div>
                        <div className="mobile d-flex align-items-center">
                            <FontAwesomeIcon icon={faMobileAlt} />
                            <span className="ms-2">
                                +1 5589 55488 55
                            </span>
                        </div>
                    </Col>

                    <Col md={4} className="social-links d-none d-md-flex justify-content-end">
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="me-2">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="me-2">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="me-2">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SocialBar;