import React, {useState} from 'react';
import {Col, FormControl, InputGroup} from "react-bootstrap";

const Quantity: React.FC = () => {

    const [unit, setUnit] = useState<boolean>(true);

    const handleChangeUnit = () => {
        setUnit(!unit);
    }

    return (
        <Col xs={12} md={6} className='pr-md-0 pl-md-3 px-4'>
            <InputGroup className="mb-3">
                <FormControl
                    type="number"
                    min="1"
                />
                <InputGroup.Text id="basic-addon1" onClick={() => handleChangeUnit()} >{unit ? "kg": "g"}</InputGroup.Text>
            </InputGroup>
        </Col>
    )
}

export default Quantity;