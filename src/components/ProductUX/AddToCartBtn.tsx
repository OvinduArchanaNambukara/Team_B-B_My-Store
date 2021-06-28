import React from 'react';
import {Button, Col} from "react-bootstrap";

const AddToCartBtn: React.FC = () => {
    return (
        <Col xs={12} md={6} className='pl-md-2 pl-3  text-center'>
            <Button variant="success" className='float-md-right px-md-1 px-3 addToCartBtn'>Add To Cart</Button>
        </Col>
    )
}

export default AddToCartBtn;