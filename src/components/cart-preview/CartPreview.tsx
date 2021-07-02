import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CartPreviewDetails from "./CartPreviewDetails";
import CartItem from "./CartItem";
import {CartItems} from "../../constants/constants";
import EmptyCartPreview from "./EmptyCartPreview";

const CartPreview: React.FC = () => {
    return (
        <Container className="cart-preview-container px-2">
            <Row className="cart-preview m-0 p-0">
                {!CartItems && <EmptyCartPreview/>}
                <Col xs={12} className="item-table">
                    {CartItems.map((item, index) => {
                        return (
                            <CartItem
                                key={index}
                                product={item.product}
                                quantity={item.quantity}/>
                        );
                    })
                    }
                </Col>
                <Col className="pr-4">
                    <CartPreviewDetails/>
                </Col>
            </Row>
        </Container>

    );
}

export default CartPreview;