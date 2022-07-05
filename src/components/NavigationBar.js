import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavigationBar = () =>
{
    return(
        <section className="navigation-section">
            <Navbar expand="lg" className="py-3" sticky="top">
                <Container>

                    <Navbar.Brand>
                        <h1 className="mb-0 ps-2 text-uppercase">
                            <a>Eterna</a>
                        </h1>
                    </Navbar.Brand>

                    <Navbar.Toggle id="the-navbar" className="p-0 border-0" />

                    <Navbar.Collapse id="the-navbar">
                        <Nav className="ms-auto">
                            <Nav.Link className="active ms-3">Home</Nav.Link>
                            <Nav.Link className="ms-3">About</Nav.Link>
                            <Nav.Link className="ms-3">Services</Nav.Link>
                            <Nav.Link className="ms-3">Portfolio</Nav.Link>
                            <Nav.Link className="ms-3">Team</Nav.Link>
                            <Nav.Link className="ms-3">Pricing</Nav.Link>
                            <Nav.Link className="ms-3">Blog</Nav.Link>
                            <NavDropdown title="Dropdown" className="ms-3" id="nav-dropdown">
                                <NavDropdown.Item>Item 1</NavDropdown.Item>
                                <NavDropdown.Item>Item 2</NavDropdown.Item>
                                <NavDropdown.Item>Item 3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="ms-3">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </section>
    );
}

export default NavigationBar;