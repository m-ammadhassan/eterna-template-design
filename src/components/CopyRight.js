import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CopyRight = () =>
{
    return(
        <section className="copyright-section py-3">
            <Container className="py-3 text-center">
                <Row className="mb-2">
                    <Col>
                        <span>&copy; Copyright <strong>Eterna.</strong> All Rights Reserved</span>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <span>Designed By <a href="http://www.ammad-hassan.web.app">Muhammad Ammad Hassan</a></span>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CopyRight;