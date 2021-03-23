import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'

export default props => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Ínicio</Nav.Link>
                <Nav.Link href="/about">Sobre</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)