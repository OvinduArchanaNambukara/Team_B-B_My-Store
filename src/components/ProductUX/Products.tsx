import React from 'react';
import {Row} from "react-bootstrap";
import Product from "./Product";

const Products: React.FC = () => {
    return (
        <Row>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </Row>
    )
}

export default Products;