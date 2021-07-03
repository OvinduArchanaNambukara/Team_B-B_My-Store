import React from 'react';
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import CabbageImg from '../../assets/images/groceryImages/cabbage.jpg';
import CarrotImg from '../../assets/images/groceryImages/carrot.jpg';
import {ICheckoutProduct} from "../../types/types";
import CheckoutHeader from "./CheckoutHeader";
import ContinueShoppingBtn from "./ContinueShoppingBtn";
import CartHeader from "./CartHeader";
import TableRow from "./TableRow";


const demoProducts: ICheckoutProduct[] = [
    {
        quantity: 5, product: {
            name: "Carrot", image: CarrotImg, currentPrice: 650, oldPrice: 670
        }
    },
    {
        quantity: 7, product: {
            name: "Cabbage", image: CabbageImg, currentPrice: 340, oldPrice: 400
        }
    }
]

const Checkout: React.FC = () => {

    const renderCheckedProducts =
        demoProducts.map((checkedProduct: ICheckoutProduct, index) => {
            return (
                <TableRow
                    key={index}
                    rowNumber={index}
                    image={checkedProduct.product.image}
                    name={checkedProduct.product.name}
                    price={checkedProduct.product.currentPrice}
                    quantity={checkedProduct.quantity}/>
            )
        })

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
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Amount</th>
                            <th className='d-none'>delete icon</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderCheckedProducts}
                        </tbody>
                    </Table>

                </Card.Body>
            </Card>
        </Container>
    )
}

export default Checkout;