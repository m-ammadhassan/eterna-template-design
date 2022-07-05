import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeaturesData from '../data/FeaturesData';

const Features = () =>
{
    return(
        <section className="features-section py-5">
            <Container className="py-3">
                <Row>
                    {
                        FeaturesData.map( (item) =>
                            <Col lg={4} className="mt-4 mt-lg-0" key={item.featureID}>
                                <Card className="feature-card border-0 py-4 px-2 h-100">
                                    <Card.Body>
                                        <FontAwesomeIcon icon={item.featureIcon} size="2x" className="mb-3" />
                                        <Card.Title className="mb-3">
                                            {item.featureTitle}
                                        </Card.Title>
                                        <Card.Text>{item.featureDesc}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                         )
                    }
                </Row>
            </Container>
        </section>
    );
}

export default Features;