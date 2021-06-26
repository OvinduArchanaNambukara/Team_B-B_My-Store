import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import WelcomeImg from '../assets/images/welcome.png';
import Products from "./ProductUX/Products";

const MainPage:React.FC = () => {
    return(
        <Container fluid className='welcome'>
            <Row>
                <Col xs={12} className='mx-0 px-0'>
                    <Image src={WelcomeImg} placeholder="Welcome" />
                </Col>
            </Row>
            <Container className='products flex-fill justify-content-around mt-2 mb-5'>
                <Row>
                    <Col xs={12} className='px-0'>
                        <Products />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default MainPage;