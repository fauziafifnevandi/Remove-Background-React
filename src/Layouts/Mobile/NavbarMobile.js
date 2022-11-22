import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function NavbarMobile() {
  return (
    <Navbar fixed="top" className="shadow hehe" bg="light" expand="lg">
      <Container fluid className="ms-1 me-1">
        <Navbar.Brand href="#">
          <img
            src="/remove-bg.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-mobile-centered"
            style={{ height: "180px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">How it Works</Nav.Link>
            <Nav.Link href="#action1">Tools & Api</Nav.Link>
            <Button>Remove Background</Button>
            <Button className="mt-2" variant="outline-secondary">
              Log in
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMobile;
