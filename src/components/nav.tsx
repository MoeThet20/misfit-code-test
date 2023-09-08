'use client';

import type { NextPage } from 'next';
import { Container, Nav, Navbar } from 'react-bootstrap';
const NavBar: NextPage = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Code Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/assignment1">Assignment 1</Nav.Link>
                        <Nav.Link href="/assignment2">Assignment 2</Nav.Link>
                        <Nav.Link href="/assignment4">Assignment 4</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavBar;
