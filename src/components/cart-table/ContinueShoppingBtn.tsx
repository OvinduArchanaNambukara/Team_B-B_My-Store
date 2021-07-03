import React from "react";
import {Button, Col} from "react-bootstrap";
import {ChevronLeft} from "react-feather";

const ContinueShoppingBtn:React.FC = () => {
    return(
        <Col md={3} xl={2} lg={3} sm={6} className='px-0'>
            <Button variant='outline-secondary' className='continueShoppingBtn'>
                <ChevronLeft className='pb-1'/>Continue Shopping
            </Button>
        </Col>
    )
}

export default ContinueShoppingBtn;