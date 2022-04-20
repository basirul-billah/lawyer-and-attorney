import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Lawyer & Attorney</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link href="#services">Services</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Log in</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </header>
    );
};

export default Header;