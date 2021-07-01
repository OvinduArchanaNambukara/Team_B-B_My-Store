import React from "react";
import {Col, Dropdown, Row} from "react-bootstrap";
import CartIcon from "./CartIcon";
import CheckOutButton from "./CheckOutButton";
import CartPreview from "../cart-preview/CartPreview";

const CheckOutArea: React.FC = () => {
    return (
        <Col className='my-auto' xs={8}>
            <Row className='align-items-center justify-content-end'>
                <Dropdown>
                    <Dropdown.Toggle><CartIcon/></Dropdown.Toggle>
                    <Dropdown.Menu align="right">
                        <Dropdown.Item>
                            <CartPreview/>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <CheckOutButton/>
            </Row>
        </Col>
    );
}

export default CheckOutArea;
