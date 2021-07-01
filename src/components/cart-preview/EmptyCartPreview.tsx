import React from "react";
import {Col, Image} from "react-bootstrap";
import EmptyCartImage from "../../assets/images/cart/empty_cart.png";

const EmptyCartPreview: React.FC = () => {
    return (
        <React.Fragment>
            <Col className="empty-cart text-center p-1">
                <Image src={EmptyCartImage} alt="empty cart image" className="empty-cart-image" fluid={true}/><br/>
                <span className="text-danger">Your cart is empty</span><br/>
                <span>Add items to your cart :)</span>
            </Col>
        </React.Fragment>
    );
}

export default EmptyCartPreview;