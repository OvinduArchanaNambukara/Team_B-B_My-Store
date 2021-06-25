import React from 'react';
import {Button, Nav, Navbar, Row} from "react-bootstrap";

const HeaderNavBar:React.FC = () => {
    return(
        <div className="top-header-bg">
            <Navbar expand="lg">
                <i className="feather icon-phone mt-0 mr-0"/><Nav.Link>+94713381609</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Row>
                            <i className="fas fa-truck"/><Nav.Link href="#delivery">Delivery
                            Areas</Nav.Link>
                        </Row>
                        <Row>
                            <i className="feather icon-user"> </i> <Nav.Link href="#myaccount">My Account</Nav.Link>
                        </Row>
                        <div className="header-register-btn">
                                <Button>Register</Button>
                        </div>
                        <div className="header-login-btn">Login
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="divider"/>
        </div>
    )
}

export default HeaderNavBar;