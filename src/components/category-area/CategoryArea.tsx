import React from "react";
import {Col, Row} from "react-bootstrap";
import Header from "./Header";
import Categories from "./Categories";

const CategoryArea: React.FC = () => {

    return (
        <Row className='categories mt-4 justify-content-center'>
            <Col xs={12} xl={10} className='header'>
                <Header/>
            </Col>
            <Col xs={12} xl={10}>
                <Categories/>
            </Col>
        </Row>
    );
}

export default CategoryArea;
