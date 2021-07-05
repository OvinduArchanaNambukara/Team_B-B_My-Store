import React from "react";
import {Col, Row} from "react-bootstrap";
import {BiMinusCircle, BiPlusCircle} from "react-icons/all";

type QuantityProps = {
    quantity:number
}

const Quantity:React.FC<QuantityProps> = (props) => {

    const {quantity} = props;

    return(
        <Row>
            <Col className='quantity-editor' xs={12}>
                <BiMinusCircle size={18}/>
                <label className='px-2 mb-0'>{quantity}</label>
                <BiPlusCircle size={18}/>
            </Col>
        </Row>
    )
}

export default Quantity;