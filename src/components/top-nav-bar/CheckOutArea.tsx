import React from "react";
import {Col, Container, Dropdown, Row} from "react-bootstrap";
import CartIcon from "./CartIcon";
import CheckOutButton from "./CheckOutButton";
import CartPreview from "../cart-preview/CartPreview";

const CheckOutArea: React.FC = () => {
    return (
        <Col className='my-auto' xs={8}>
            <Row className='align-items-center justify-content-end'>
                <Dropdown>
                    <Dropdown.Toggle><CartIcon/></Dropdown.Toggle>
                    <Dropdown.Menu align="right" >
                        <Container className="cart-preview-container">
                            <CartPreview/>
                        </Container>
                    </Dropdown.Menu>
                </Dropdown>
                <CheckOutButton/>
            </Row>
        </Col>
    );
}

export default CheckOutArea;
