import React from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';

import {
    Navbar,
    Nav,
    Container
}from 'react-bootstrap';

export const Heading = () => {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/"><img src="https://xego.vn/assets/images/XEGO-logo.svg" style={{width:'100px', height: 'auto'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <ul className="nav__links">
                    <li><Link to="/" className="nav__items">Trang chủ</Link></li>
                    <li><Link to="/book" className="nav__items">Đặt xe</Link></li>
                    <li><Link to="/" className="nav__items">Về chúng tôi</Link></li>
                </ul>
               
                </Navbar.Collapse>
                <a href="/login" className="cta"><button>Đăng nhập</button></a>
        </Container>
    </Navbar> 
    )
}