import React from "react";
import {Image, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {Link, useRouteMatch} from 'react-router-dom';
import {FiLogOut, FiMenu} from "react-icons/all";
import defaultAvatar from '../../assets/images/admin/default-avatar.png';
import Logo from "../top-nav-bar/Logo";

const AdminNav: React.FC = () => {
  let {path} = useRouteMatch();


  return (
    <Row className="navigation">
      <Navbar collapseOnSelect expand="lg" sticky="top" className='navbar pr-0 border-bottom'>
        <Navbar.Brand className="ml-3">
          <Logo/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle'>
          <FiMenu size='2.5rem'/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to={`${path}`}>Dashboard</Link>
            <Link to={`${path}/products`}>Products</Link>
            <Link to={`${path}/orders`}>Orders</Link>
          </Nav>
          <Nav className='mr-1 p-0'>
            <NavDropdown title={<Image className='profile' src={defaultAvatar} roundedCircle/>}
                         id="navbarScrollingDropdown"
                         drop="left">
              <NavDropdown.Item>John Doe</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item>Logout
                <FiLogOut className="ml-3" size={16}/>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
}

export default AdminNav;