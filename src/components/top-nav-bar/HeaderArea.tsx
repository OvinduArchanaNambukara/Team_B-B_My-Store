import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";
import {IoCallSharp, FaTruck, FaUserCircle} from "react-icons/all";

const HeaderArea: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="xl">
            <Nav className='ml-auto d-xl-none'>
                <Nav.Link href="#lookok" className='mr-4'>
                    <IoCallSharp/>
                    +94 112 123 456
                </Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link href="#call" className='d-none d-xl-block'>
                        <IoCallSharp/>
                        +94 112 123 456
                    </Nav.Link>
                    <Nav.Link href="#delivery">
                        <FaTruck/>
                        Delivery Areas
                    </Nav.Link>
                    <Nav.Link href="#user   ">
                        <FaUserCircle/>
                        My Account
                    </Nav.Link>
                    <Button>Register</Button>
                    <Button className='border-0'>Log in</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderArea;
