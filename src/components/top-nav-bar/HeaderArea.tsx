import React, {useState} from "react";
import {Col, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {CgClose, FaTruck, FiUser, IoCallOutline} from "react-icons/all";
import ButtonArea from "./ButtonArea";

const HeaderArea: React.FC = () => {
  const [toggleIcon, setToggleIcon] = useState<boolean>(false);

  /**
   * when click change the toggle icon
   * @author Ovindu
   */
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  }

  return (
      <Col xs={12} className='px-0 header-nav'>
        <Navbar collapseOnSelect expand="md" className='py-0'>
          <Nav className='d-md-none'>
            <Nav.Link className='mr-4'>
              <NavLink to='/'>
                <IoCallOutline/>
                +94 112 123 456
              </NavLink>
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggleIcon}>
            {toggleIcon && <CgClose size={30}/>}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ml-auto'>
              <Nav.Link className='d-md-flex d-none pr-3'>
                <NavLink to='/'>
                  <IoCallOutline/>
                  +94 112 123 456
                </NavLink>
              </Nav.Link>
              <Nav.Link className='pr-3'>
                <NavLink to='/'>
                  <FaTruck/>
                  Delivery Areas
                </NavLink>
              </Nav.Link>
              <Nav.Link className='pr-3'>
                <NavLink to='/'>
                  <FiUser/>
                  My Account
                </NavLink>
              </Nav.Link>
              <ButtonArea/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
  );
}

export default HeaderArea;
