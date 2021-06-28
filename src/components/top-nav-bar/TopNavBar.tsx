import React from "react";
import {Col, Row} from "react-bootstrap";
import HeaderArea from "./HeaderArea";

const TopNavBar: React.FC = () => {
    return (
        <Row>
            <Col xs={12} className='px-0'>
                <HeaderArea/>
            </Col>
        </Row>
    );
}

export default TopNavBar;
