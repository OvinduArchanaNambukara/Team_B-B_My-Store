import React from "react";
import {Col, Row} from "react-bootstrap";
import fruit from "../../assets/images/pharmacy.webp";
import furniture from "../../assets/images/electronic.webp";
import vegetables from "../../assets/images/all.webp";
import meat from "../../assets/images/food.webp";
import grocery from "../../assets/images/grocery.webp";
import Category from "./Category";
import {categoryTypes} from "../../types/types";

const temp: categoryTypes[] = [
  {image: fruit, name: 'Fruits'},
  {image: furniture, name: 'Furniture'},
  {image: vegetables, name: 'Vegetables'},
  {image: meat, name: 'Meat'},
  {image: grocery, name: 'Grocery'}
];

const Categories: React.FC = () => {

    return (
        <Col className='px-1 px-sm-0 text-center' xs={12}>
            <Row className='justify-content-center'>
                {
                    temp.map((category: categoryTypes, index: number) => {
                        return (
                            <Category key={index} name={category.name} image={category.image}/>
                        );
                    })
                }
            </Row>
        </Col>
    );
}

export default Categories;
