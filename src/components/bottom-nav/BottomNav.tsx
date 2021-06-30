import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const BottomNav: React.FC = () => {
  return (
    <Navbar className="bottom-nav-bar px-0 py-3 border-bottom" expand="sm">
      <NavDropdown title="Categories" id="basic-nav-dropdown" className="bottom-nav-dropdown mr-md-4 ml-md-4 px-1">
        <NavDropdown.Item href="#fruits">Fruits</NavDropdown.Item>
        <NavDropdown.Item href="#vagetables">Vegetables</NavDropdown.Item>
        <NavDropdown.Item href="#electronics">Electronics</NavDropdown.Item>
        <NavDropdown.Item href="#furniture">Furniture</NavDropdown.Item>
        <NavDropdown.Item href="#grocery">Grocery</NavDropdown.Item>
        <NavDropdown.Item href="#meat">Meat</NavDropdown.Item>
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
