import React from 'react';
import {Col, FormControl, InputGroup} from "react-bootstrap";

const Quantity: React.FC = () => {
    return (
        <Col xs={12} md={6} className='pr-md-0 pl-md-3 px-4'>
            <InputGroup className="mb-3">
                <FormControl
                    type="number"
                />
                <InputGroup.Text id="basic-addon1">Kg</InputGroup.Text>
            </InputGroup>
        </Col>
    )
}

export default Quantity;