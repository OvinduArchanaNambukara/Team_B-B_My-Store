import React from "react";
import {Row} from "react-bootstrap";
import EmptyCartPreview from "./EmptyCartPreview";

const CartPreview: React.FC = () => {
    return (
        <Row className="cart-preview">
            <EmptyCartPreview/>
        </Row>
    );
}

export default CartPreview;