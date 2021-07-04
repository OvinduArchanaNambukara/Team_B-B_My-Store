import React, {useRef, useState} from "react";
import {Col, Container, Overlay, Popover, Row} from "react-bootstrap";
import CartPreviewDetails from "./CartPreviewDetails";
import CartItem from "./CartItem";
import {CartItems} from "../../constants/constants";
import EmptyCartPreview from "./EmptyCartPreview";
import CheckOutButton from "../common/CheckOutButton";
import CartIcon from "./CartIcon";

const CartPreview: React.FC = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event: any) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div ref={ref}>
            <CartIcon handleClick={handleClick} itemCount={CartItems.length}/>
            <Overlay
                show={show}
                target={target}
                placement="bottom-end"
                container={ref.current}
                rootClose={true}
            >
                <Popover id="popover-contained" className="mt-3 py-2">
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
                            <Col xs={12} className="pr-4">
                                <CartPreviewDetails/>
                            </Col>
                            <Col xs={12}>
                                <CheckOutButton
                                    classname={"cart-checkout-btn px-5 py-1 mb-2 d-block d-sm-none float-right"}/>
                            </Col>
                        </Row>
                    </Container>
                </Popover>
            </Overlay>
        </div>
    );
}

export default CartPreview;