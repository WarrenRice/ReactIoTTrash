import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MenuButton } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/"><MenuButton/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Drashboard</Nav.Link>
            <Nav.Link href="/api">Controls</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
