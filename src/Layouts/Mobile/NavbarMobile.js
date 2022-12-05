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
            <Nav.Link
              target="_blank"
              href="https://github.com/fauziafifnevandi/remove-bg"
            >
              How it Works
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://github.com/fauziafifnevandi/remove-bg"
            >
              Tools & Api
            </Nav.Link>
            <Button href="/workspace">Remove Background</Button>
            <Button
              onClick={() => {
                alert("features are coming soon");
              }}
              className="mt-2"
              variant="outline-secondary"
            >
              Log in
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMobile;
