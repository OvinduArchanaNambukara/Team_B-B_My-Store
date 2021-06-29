import React from "react";
import {GiShoppingCart} from "react-icons/all"
import {Button, Col, Row} from "react-bootstrap";

const CheckOutArea: React.FC = () => {
    return (
            <React.Fragment>
                <GiShoppingCart/>
                <Button className='mr-5 ml-4'>Check Out</Button>
            </React.Fragment>
    );
}

export default CheckOutArea;
