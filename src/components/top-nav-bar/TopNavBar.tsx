import React from "react";
import {Col, Row} from "react-bootstrap";
import HeaderArea from "./HeaderArea";
import LogoArea from "./LogoArea";

const TopNavBar: React.FC = () => {
    return (
        <Row className='top-nav-bar'>
            <HeaderArea/>
            <LogoArea/>
        </Row>
    );
}

export default TopNavBar;
