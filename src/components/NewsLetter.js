import React, {useState} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const NewsLetter = () =>
{
    let [newsletterEmail, setNewsletterEmail] = useState("");

    console.log(newsletterEmail);

    function formValidation()
    {
        let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(newsletterEmail === "")
        { return {message: "Email is required", status: false}; }

        else if(emailExp.test(newsletterEmail) == false)
        { return {message: "Email is not valid", status: false}; }

        else
        { return {message: "", status: true} }
    }

    function formSubmit(event)
    {
        event.preventDefault();
        let result = formValidation();
        if(result.status == false)
        {
            alert(`ERROR: ${result.message}`);
        }
        else
        {
            alert(`Dear User, ${newsletterEmail} is successfully subscribed`);
            setNewsletterEmail("");
        }
    }

    return(
        <section className="newsletter-section py-4">
            <Container className="py-3">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <h4 className="mb-3 fw-bold">Our Newsletter</h4>
                        <p>
                            Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                        </p>
                    </Col>

                    <Col lg={6}>
                        <Form onSubmit={(event)=>formSubmit(event)} id="newsletterForm">
                            <Form.Group className="newsletter-field d-flex py-1 px-1 ">
                                <Form.Control 
                                    type="text" 
                                    className="ms-1 me-2"
                                    value={newsletterEmail}
                                    name="newsletter-email"
                                    onChange={(e)=>setNewsletterEmail(e.target.value)} />
                                <Button type="submit" className="main-btn primary-btn">Subscribe</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default NewsLetter;