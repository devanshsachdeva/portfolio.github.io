import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Navr.css'


const NavigationBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="transparent sticky-top " variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            src={require('../../assets/logo.png')}
                            width="90"
                            height="60"
                            className="d-inline-block align-center"
                            alt="React Bootstrap logo"
                        />
                        {" "} Devansh Sachdeva</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <br />
                            <Nav.Link href="/tata" >Home</Nav.Link>
                            <Nav.Link href="/projects" >Projects</Nav.Link>
                            <Nav.Link href="/education">Education</Nav.Link>
                            <Nav.Link href="/blogs">Blogs</Nav.Link>
                            <Nav.Link href="/coffee">
                                Buy me a coffee ☕
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
