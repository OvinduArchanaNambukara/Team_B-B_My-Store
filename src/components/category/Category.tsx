import React from "react";
import {Col, Image} from "react-bootstrap";

type CategoryProps = {
    name: string,
    image: string
}

const Category: React.FC<CategoryProps> = (props) => {
    return (
        <Col className='category text-center p-0 mx-2 mt-2 mx-md-1' xs={3} md={2}>
            <Image src={props.image} alt={props.name} fluid={true}/>
            <p className='m-1'>{props.name}</p>
        </Col>
    );
}

export default Category;
