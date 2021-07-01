import React from "react";
import {Col, Row} from "react-bootstrap";
import Divider from "./Divider";

const CartPreviewDetails: React.FC = () => {
    return (
        <Row className="cart-details">
            <Col xs={6}><label>Sub Total (4 items)</label></Col>
            <Col xs={6} className="text-danger text-right"><label>Rs. 3000.00</label></Col>

            <Col xs={6}><label>Discount</label></Col>
            <Col xs={6} className="text-right"><label >Rs. 0.00</label></Col>

            <Divider />

            <Col xs={6}><label>Est. Total</label></Col>
            <Col xs={6} className="text-danger text-right"><label >Rs. 3000.00</label></Col>
        </Row>
    );
}

export default CartPreviewDetails;