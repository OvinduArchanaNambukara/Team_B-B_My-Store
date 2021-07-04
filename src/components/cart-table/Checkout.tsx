import React from 'react';
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import CarrotImg from '../../assets/images/groceryImages/carrot.jpg';
import CheckoutHeader from "./CheckoutHeader";
import ContinueShoppingBtn from "./ContinueShoppingBtn";
import CartHeader from "./CartHeader";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {MinusCircle, PlusCircle, Trash} from "react-feather";

const Checkout: React.FC = () => {

    const products = [
        {
            id: 1, item: <img className='tr-image' src={CarrotImg}/>, name: "Carrot", qty: <Row>
                <Col className='quantity-editor' xs={12}>
                    <MinusCircle size={18}/>
                    <label className='px-2'>10</label>
                    <PlusCircle size={18}/>
                </Col>
            </Row>, unitPrice: "Rs.270.00", amount: "Rs.2700.00", deleteIcon: <Trash size={18}/>
        },
        {
            id: 1, item: <img className='tr-image' src={CarrotImg}/>, name: "Carrot", qty: <Row>
                <Col className='quantity-editor' xs={12}>
                    <MinusCircle size={18}/>
                    <label className='px-2'>10</label>
                    <PlusCircle size={18}/>
                </Col>
            </Row>, unitPrice: "Rs.270.00", amount: "Rs.2700.00", deleteIcon: <Trash size={18}/>
        },
        {
            id: 1, item: <img className='tr-image' src={CarrotImg}/>, name: "Carrot", qty: <Row>
                <Col className='quantity-editor' xs={12}>
                    <MinusCircle size={18}/>
                    <label className='px-2'>10</label>
                    <PlusCircle size={18}/>
                </Col>
            </Row>, unitPrice: "Rs.270.00", amount: "Rs.2700.00", deleteIcon: <Trash size={18}/>
        },
        {
            id: 1, item: <img className='tr-image' src={CarrotImg}/>, name: "Carrot", qty: <Row>
                <Col className='quantity-editor' xs={12}>
                    <MinusCircle size={18}/>
                    <label className='px-2'>10</label>
                    <PlusCircle size={18}/>
                </Col>
            </Row>, unitPrice: "Rs.270.00", amount: "Rs.2700.00", deleteIcon: <Trash size={18}/>
        }
    ];

    const columns = [
        {dataField: 'id', text: '#'},
        {dataField: 'item', text: 'Item'},
        {dataField: 'name', text: 'Name'},
        {dataField: 'qty', text: 'Qty'},
        {dataField: 'unitPrice', text: 'UnitPrice'},
        {dataField: 'amount', text: 'Amount'},
        {dataField: 'deleteIcon', text: ''}
    ];

    const rowStyle = () => {
        return {borderLeft:"none",borderRight:"none", borderBottom:"1px"}
    }

    return (
        <Container fluid className='mt-5 checkOut'>
            <Row>
                <Col xs={12}>
                    <Row className='pl-0 pl-md-4 mx-0 '>
                        <CheckoutHeader/>
                        <ContinueShoppingBtn/>
                    </Row>
                </Col>
            </Row>
            <Card className='ml-md-4 ml-0 px-3 py-3 my-3'>
                <CartHeader/>
                <Card.Body>
                    <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns}
                                    rowStyle={rowStyle}/>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Checkout;