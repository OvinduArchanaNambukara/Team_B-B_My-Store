import React from 'react';
import CarrotImg from '../../assets/images/groceryImages/carrot.jpg';
import CabbageImg from '../../assets/images/groceryImages/cabbage.jpg';
import EggplantImg from '../../assets/images/groceryImages/eggplant.jpg';
import GarlicImg from '../../assets/images/groceryImages/garlic.jpg';
import LeaksImg from '../../assets/images/groceryImages/leaks.jpg';
import OnionImg from '../../assets/images/groceryImages/onion.jpg';
import PotatoImg from '../../assets/images/groceryImages/potato.jpg';
import {IProducts} from "../../types/types";
import ProductCategoryArea from "./ProductCategoryArea";
import {Col, Row} from "react-bootstrap";

const ShopProducts: IProducts[] = [
    {
        category: "Vegetables",
        productDetails: [
            {name: "Carrot", image: CarrotImg, currentPrice: 75, oldPrice: 85},
            {name: "Cabbage", image: CabbageImg, currentPrice: 35, oldPrice: null},
            {name: "EggPlant", image: EggplantImg, currentPrice: 35, oldPrice: 45},
            {name: "Garlic", image: GarlicImg, currentPrice: 35, oldPrice: 45},
            {name: "Leaks", image: LeaksImg, currentPrice: 35, oldPrice: null},
            {name: "Onion", image: OnionImg, currentPrice: 35, oldPrice: 45},
            {name: "Potato", image: PotatoImg, currentPrice: 35, oldPrice: 45}
        ]
    }
]

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
