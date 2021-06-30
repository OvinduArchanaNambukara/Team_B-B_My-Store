import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import {IProduct} from "../../types/types";
import Name from "./Name";
import CurrentPrice from "./CurrentPrice";
import OldPrice from "./OldPrice";
import Quantity from "./Quantity";
import AddToCartBtn from "./AddToCartBtn";

type ProductProps = {
    productDetails: IProduct
}

const Product: React.FC<ProductProps> = (props) => {
    const {name, image, oldPrice, currentPrice} = props.productDetails;

    return (
        <Col md={4} lg={3} xs={6} className='px-md-2 mb-3 px-1'>
            <div className='product px-3 py-4'>
                <Row className='justify-content-center'>
                    <Col xs="auto">
                        <Image src={image} placeholder="carrot" fluid={true}/>
                    </Col>
                </Row>
                <Name name={name}/>
                <Row className='justify-content-center'>
                    <CurrentPrice currentPrice={currentPrice}/>
                    {oldPrice && <OldPrice oldPrice={oldPrice}/>}
                </Row>
                <Row>
                    <Quantity/>
                    <AddToCartBtn/>
                </Row>
            </div>
        </Col>
    )
}

export default Product;
