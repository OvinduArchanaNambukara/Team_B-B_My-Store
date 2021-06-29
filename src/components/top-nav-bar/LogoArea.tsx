import React from "react";
import {Row, Col} from "react-bootstrap";
import Logo from "./Logo";
import CheckOutArea from "./CheckOutArea";

const LogoArea: React.FC = () => {
    return (
        <Col xs={12} className='logo-area'>
            <Row className='shadow'>
                <Col xs={2} className='align-items-center d-flex'>
                    <Logo/>
                </Col>
                <Col className='align-items-center d-flex justify-content-end' xs={10}>
                    <CheckOutArea/>
                </Col>
            </Row>
        </Col>

    );
}

export default LogoArea;
