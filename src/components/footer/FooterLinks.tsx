import React from "react";
import {Col, Row} from "react-bootstrap";

const FooterLinks: React.FC = () => {
  return (
    <Row className="justify-content-center footer-links">
      <Col xs={12} md="auto"><a href="#about">ABOUT US</a></Col>
      <Col xs={12} md="auto"><a href="#faq">FAQ</a></Col>
      <Col xs={12} md="auto"><a href="#delivery">DELIVERY INFO</a></Col>
      <Col xs={12} md="auto"><a href="#contact">CONTACT US</a></Col>
    </Row>
  );
}

export default FooterLinks;