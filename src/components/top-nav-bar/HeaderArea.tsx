import React, {useState} from "react";
import {Button, Col, Nav, Navbar} from "react-bootstrap";
import {CgClose, FaTruck, FiUser, IoCallOutline} from "react-icons/all";

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
            <Nav.Link href="#lookok" className='mr-4'>
              <IoCallOutline/>
              +94 112 123 456
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggleIcon}>
            {toggleIcon && <CgClose size={30}/>}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ml-auto'>
              <Nav.Link href="#call" className='d-md-flex d-none pr-3'>
                <IoCallOutline/>
                +94 112 123 456
              </Nav.Link>
              <Nav.Link href="#delivery" className='pr-3'>
                <FaTruck/>
                Delivery Areas
              </Nav.Link>
              <Nav.Link href="#user" className='pr-3'>
                <FiUser/>
                My Account
              </Nav.Link>
              <Button className='my-md-2 py-md-0'>Register</Button>
              <Button className='border-0 my-md-2 py-md-0 ml-md-1 mt-1 mb-1'>Log in</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
  );
}

export default HeaderArea;
