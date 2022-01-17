import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import "./Navbars.css";
const Navbars = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
      <Navbar.Brand href="#home"><h4 id="portfolio">Portfolio</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">
              <span className="nav_text">Home</span>
            </Nav.Link>
            <Nav.Link href="#about">
              <span className="nav_text">About</span>
            </Nav.Link>
            <Nav.Link href="#resume">
              <span className="nav_text">Resume</span>
            </Nav.Link>
            <Nav.Link href="#testimonial">
              <span className="nav_text">Testimonial</span>
            </Nav.Link>
            <Nav.Link href="#project">
              <span className="nav_text">Project</span>
            </Nav.Link>
            <Nav.Link href="#achievement">
              <span className="nav_text">Achievement</span>
            </Nav.Link>
            <Nav.Link href="#contact">
              <span className="nav_text">Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
