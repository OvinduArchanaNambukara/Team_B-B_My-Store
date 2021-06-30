import React from "react";
import {Col, Row} from "react-bootstrap";
import CartIcon from "./CartIcon";
import CheckOutButton from "./CheckOutButton";

const CheckOutArea: React.FC = () => {
    return (
        <Col className='my-auto' xs={8}>
            <Row className='align-items-center justify-content-end'>
                <CartIcon/>
                <CheckOutButton/>
            </Row>
        </Col>
    );
}

export default CheckOutArea;
