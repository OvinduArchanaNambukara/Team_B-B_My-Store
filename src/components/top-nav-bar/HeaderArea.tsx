import React from "react";
import {Button, Nav, Navbar} from "react-bootstrap";

const HeaderArea: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
            <Nav className=''>
                <Nav.Link href="#">+94 112 123 456</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link href="#">+94 112 123 456</Nav.Link>
                    <Nav.Link href="#">Delivery Areas</Nav.Link>
                    <Nav.Link href="#">My Account</Nav.Link>
                    <Button>Register</Button>
                    <Button>Log in</Button>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default HeaderArea;
