import React from 'react'
// import {Link} from 'react-router-dom';
import {
    Navbar,
    Nav,
    Container
}from 'react-bootstrap';

export const Heading = () => {
    return(
       <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Thuê xe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add">Đặt xe</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}