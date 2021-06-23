import React from "react";
import {Row} from "react-bootstrap";

const FooterCopyrights: React.FC = () => {
  return (
    <Row className="justify-content-center">
      Copyright &copy; 2021. All Rights Reserved.&nbsp;<span className="powered">Powered by SoftVessel</span>
    </Row>
  );
}

export default FooterCopyrights;