import React from "react";
import {Col, Row} from "react-bootstrap";

const FooterLinks: React.FC = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md="auto">ABOUT US</Col>
      <Col xs={12} md="auto">FAQ</Col>
      <Col xs={12} md="auto">DELIVERY INFO</Col>
      <Col xs={12} md="auto">CONTACT US</Col>
    </Row>
  );
}

export default FooterLinks;