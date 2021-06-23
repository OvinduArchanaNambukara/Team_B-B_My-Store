import React from "react";
import {Col, Row} from "react-bootstrap";
import FooterLinks from "./footer/FooterLinks";
import FooterIcons from "./footer/FooterIcons";
import FooterCopyrights from "./footer/FooterCopyrights";

const Footer: React.FC = () => {
  return (
      <Row className="footer">
        <Col xs={{span: 6, offset: 3}}>
          <FooterLinks />
          <FooterIcons />
          <FooterCopyrights />
        </Col>
      </Row>
  );
}

export default Footer;