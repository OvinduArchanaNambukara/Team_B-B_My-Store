import React from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import {IProduct} from "../../types/types";

type ProductProps = {
    productDetails: IProduct
}

const Product: React.FC<ProductProps> = (props) => {

    const {name, image, oldPrice, currentPrice} = props.productDetails;

    return (
            <Col md={4} lg={3} xs={6} className='px-3 mb-3'>
                <div className='product px-3 py-4'>
                    <Row className='justify-content-center'>
                        <Col xs="auto">
                            <Image src={image} placeholder="carrot"/>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs="auto">
                            <h3>{name}</h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col xs={6} className='currentPrice'>
                            <p>{`Rs.${currentPrice}.00`}</p>
                        </Col>
                        <Col xs={6} className='oldPrice pt-2'>
                            <p className='float-right'>{`Rs.${oldPrice}.00`}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4} className='pr-0'>
                            <Form.Control type="number"/>
                        </Col>
                        <Col xs={12} md={8}>
                            <Button variant="success" className='float-right addToCartBtn'>Add To Cart</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
    )
}

export default Product;