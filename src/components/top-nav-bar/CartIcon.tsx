import React from "react";
import {GiShoppingCart} from "react-icons/all";
import {Col} from "react-bootstrap";

const CartIcon: React.FC = () => {
    return (
        <Col className='text-right px-0 mr-1 mr-sm-4' sm={2} xs={4}>
            <div className='count d-flex justify-content-center align-content-center'>
                <span>0</span>
            </div>
            <GiShoppingCart/>
        </Col>
    );
}

export default CartIcon;
