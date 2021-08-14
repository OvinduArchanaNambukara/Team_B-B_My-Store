import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import ProductTable from "./ProductTable";

const AdminProducts: React.FC = () => {
    const history = useHistory();

    return (
        <Container fluid={true}>
            <Row className='mt-4 productsTable mx-0 justify-content-center'>
                <Col xs={12} xl={10} className='px-0'>
                    <Row>
                        <Col xs={12}>
                            <Row className='pl-0 pl-md-4 ml-0 mr-2 '>
                                <Col md={8} xl={10} lg={9} sm={6}
                                     className='px-0 pt-2 checkOut-label text-md-left text-center'>
                                    <h4 className='mb-0'>Products</h4>
                                </Col>
                                <Col md={4} xl={2} lg={3} sm={6} className='createProductBtn text-center'>
                                    <Button variant="success" className='float-md-right mt-md-0 mt-2'
                                            onClick={() => history.push(`/admin/add-product`)}>Create
                                        Product</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Card className='mx-md-4 ml-0 px-3 py-3 my-3 mr-0'>
                        <Card.Body className='px-0 px-xl-5 px-md-0'>
                            <ProductTable/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminProducts;