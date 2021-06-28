import React from "react";
import {Col, Row} from "react-bootstrap";
import FooterLinks from "./FooterLinks";
import FooterIcons from "./FooterIcons";
import FooterCopyrights from "./FooterCopyrights";

const Footer: React.FC = () => {
    return (
        <Row className="footer py-4">
            <Col xs={12}>
                <FooterLinks/>
                <FooterIcons/>
                <FooterCopyrights/>
            </Col>
        </Row>
  );
}

export default Footer;
