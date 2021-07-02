import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import CartPreviewDetails from "./CartPreviewDetails";
import CarrotImg from "../../assets/images/groceryImages/carrot.jpg";
import NumberFormat from "react-number-format";

const CartPreview: React.FC = () => {
    return (
        <Row className="cart-preview m-0 p-0">
            {/*<EmptyCartPreview/>*/}
            <Col xs={12} className="item-table">
                <Row>
                    <Col xs={4} className="p-0">
                        <Image src={CarrotImg} fluid={true}/>
                    </Col>
                    <Col xs={4} className="">
                        <label>Carrot</label><br/>
                        <label>Qty: 1 Kg</label>
                    </Col>
                    <Col xs={4} className="text-right">

                        <label className="cart-item-subtotal">
                            <NumberFormat value={250} thousandSeparator={true} displayType='text'
                                          prefix={'Rs. '}
                                          decimalScale={2} fixedDecimalScale={true}
                            />
                        </label>
                    </Col>
                </Row>
            </Col>

            <CartPreviewDetails/>
        </Row>
    );
}

export default CartPreview;