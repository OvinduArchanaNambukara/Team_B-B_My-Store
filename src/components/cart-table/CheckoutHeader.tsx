import React from "react";
import {Col} from "react-bootstrap";

const CheckoutHeader:React.FC = () => {
    return(
        <Col md={9} xl={10} lg={9} sm={6} className='px-0 checkOut-label text-md-left text-center'>
            <h3>CheckOut</h3>
        </Col>
    )
}

export default CheckoutHeader;