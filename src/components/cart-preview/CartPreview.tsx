import React from "react";
import {Row} from "react-bootstrap";
import CartPreviewDetails from "./CartPreviewDetails";

const CartPreview: React.FC = () => {
    return (
        <Row className="cart-preview m-0 p-0">
            {/*<EmptyCartPreview/>*/}
            <Row className="cart-items">

            </Row>
            <CartPreviewDetails/>
        </Row>
    );
}

export default CartPreview;