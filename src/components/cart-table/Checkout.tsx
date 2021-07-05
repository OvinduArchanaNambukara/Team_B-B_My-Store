import React, {useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import CheckoutHeader from "./CheckoutHeader";
import ContinueShoppingBtn from "./ContinueShoppingBtn";
import CartHeader from "./CartHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import CartTotal from "./CartTotal";
import CartTable from "./CartTable";

const Checkout: React.FC = () => {

    const [total, setTotal] = useState<number>(0);

    const handleOnGetTotal = (total: number) => {
        setTotal(total)
    }

    return (
        <Container fluid className='mt-5 checkOut'>
            <Row>
                <Col xs={12}>
                    <Row className='pl-0 pl-md-4 ml-0 mr-2 '>
                        <CheckoutHeader/>
                        <ContinueShoppingBtn/>
                    </Row>
                </Col>
            </Row>
            <Card className='ml-md-4 ml-0 px-3 py-3 my-3 mr-2'>
                <CartHeader/>
                <Card.Body className='px-0 px-xl-5 px-md-0'>
                    <CartTable onGetTotal={handleOnGetTotal}/>
                    <CartTotal total={total}/>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Checkout;