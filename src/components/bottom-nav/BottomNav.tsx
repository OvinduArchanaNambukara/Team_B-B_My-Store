import React from "react";
import {Container, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom"

const BottomNav: React.FC = () => {
  const history = useHistory();

  return (
      <Container fluid={true}>
        <Navbar className="bottom-nav-bar px-0 py-3 border-bottom" expand="sm">
          <NavDropdown title="Categories" id="basic-nav-dropdown" className="bottom-nav-dropdown mr-md-4 ml-md-4 px-1">
            <NavDropdown.Item onClick={() => history.push('/home/All')}>
              All
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push('/home/Grocery')}>
              Grocery
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push('/home/Pharmacy')}>
              Pharmacy
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push('/home/Food')}>
              Food
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push('/home/Electronic')}>
              Electronic
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="bottom-nav-collapse">
            <Nav className="bottom-nav mr-auto ">
              <Nav.Link>
                <Link to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/faq'>FAQ</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/aboutus'>About us</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/contactus'>Contact us</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}

export default BottomNav;
