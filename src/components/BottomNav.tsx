import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const BottomNav: React.FC = () => {
  return (
    <Navbar className="bottom-nav-bar p-3 border-bottom" expand="sm">
      <NavDropdown title="Categories" id="basic-nav-dropdown" className="bottom-nav-dropdown mr-md-4 ml-md-4 px-1">
        <NavDropdown.Item href="#grocery">Grocery</NavDropdown.Item>
        <NavDropdown.Item href="#pharmacy">Pharmacy</NavDropdown.Item>
        <NavDropdown.Item href="#food">Food</NavDropdown.Item>
        <NavDropdown.Item href="#electronics">Electronics</NavDropdown.Item>
      </NavDropdown>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className="bottom-nav-collapse">
        <Nav className="bottom-nav mr-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BottomNav;