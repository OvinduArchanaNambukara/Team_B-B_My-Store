import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import CarrotImg from '../../assets/images/carrot.jpg';

const Product: React.FC = () => {
    return (
        <Col md={4} lg={3} xs={6} className='product px-2'>
            <div className='border'>
                <Row className='justify-content-center mx-0'>
                    <Col xs="auto">
                        <Image src={CarrotImg} placeholder="carrot"/>
                    </Col>
                </Row>
                <Row className='justify-content-center mx-0'>
                    <Col xs="auto">
                        <h3>Carrot</h3>
                    </Col>
                </Row>
                <Row className='justify-content-center mx-0'>
                    <Col xs={6} className='currentPrice text-center'>
                        <p>Rs.110.00</p>
                    </Col>
                    <Col xs={6} className='oldPrice text-center'>
                        <p>Rs.150.00</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>

                    </Col>
                    <Col xs={6}>

                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default Product;