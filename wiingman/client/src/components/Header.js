import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
    return (

        <div className="glass-container">
    <h1 className="text-center mt-3">Ask Lola 😉</h1>
    </div>
        );
};

{/* <Navbar bg="light" expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="#home">Ask Lola 😉</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}; */}

export default Header;