import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import FooterLinks from "./FooterLinks";
import FooterIcons from "./FooterIcons";
import FooterCopyrights from "./FooterCopyrights";

const Footer: React.FC = () => {
  return (
      <Container fluid={true}>
        <Row className="footer py-4">
          <Col xs={12}>
            <FooterLinks/>
            <FooterIcons/>
            <FooterCopyrights/>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;
