import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import DeleteIcon from "../DeleteIcon";
import {IProduct} from "../../types/types";

type CartItemProps = {
    product: IProduct
    quantity: number
}

const CartItem: React.FC<CartItemProps> = (props) => {
    const {product, quantity} = props;

    return (
        <Row className="cart-item border-bottom mt-3 pb-2 mx-0">
            <Col xs={4} className="p-0 text-center">
                <Image src={product.image} fluid={true} className="cart-item-image"/>
            </Col>
            <Col xs={4} className="pl-4">
                <label className="cart-item-name mb-3">{product.name}</label><br/>
                <label className="cart-item-qty">Qty: {quantity}</label>
            </Col>
            <Col xs={4} className="text-right">
                <label className="mb-3"><DeleteIcon size={15}/></label><br/>
                <label className="cart-item-subtotal">
                    {`Rs. ${product.currentPrice * quantity}`}<small className="subtotal-cents">.00</small>
                </label>
            </Col>
        </Row>
    );
}

export default CartItem;