import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import {IoCallSharp, FaTruck, FaUserCircle} from "react-icons/all";

const HeaderArea: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="md">
            <Nav className='ml-auto d-md-none'>
                <Nav.Link href="#lookok" className='mr-4'>
                    <IoCallSharp/>
                    +94 112 123 456
                </Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link href="#call" className='d-none d-md-block'>
                        <IoCallSharp/>
                        +94 112 123 456
                    </Nav.Link>
                    <Nav.Link href="#delivery">
                        <FaTruck/>
                        Delivery Areas
                    </Nav.Link>
                    <Nav.Link href="#user">
                        <FaUserCircle/>
                        My Account
                    </Nav.Link>
                    <Button className='my-md-2 py-md-0'>Register</Button>
                    <Button className='border-0 my-md-2 py-md-0 ml-md-1 mt-1'>Log in</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderArea;
