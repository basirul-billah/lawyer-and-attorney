import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Lawyer and Attorney</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Services</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </header>
    );
};

export default Header;