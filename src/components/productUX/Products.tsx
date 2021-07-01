import React from 'react';
import {IProducts} from "../../types/types";
import ProductCategoryArea from "./ProductCategoryArea";
import {Col, Row} from "react-bootstrap";
import {ShopProducts} from "../../constants/constants";

const Products: React.FC = () => {
    return (
        <Row className='products justify-content-center'>
            <Col xs={12}>
                {ShopProducts.map((shopProducts: IProducts, index: number) =>
                    <ProductCategoryArea products={shopProducts} key={index}/>
                )}
            </Col>
        </Row>
    )

}

export default Products;
