import React from "react";
import {Row} from "react-bootstrap";

const FooterCopyrights: React.FC = () => {
  return (
    <Row className="justify-content-center text-center copyrights px-1">
      Copyright &copy; 2021.&nbsp;<span>All Rights Reserved.</span>&nbsp;<span className="powered">Powered by SoftVessel</span>
    </Row>
  );
}

export default FooterCopyrights;