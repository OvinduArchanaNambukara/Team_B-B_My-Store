import React from "react";
import {Col, Row} from "react-bootstrap";

const LogInTitle: React.FC = () => {
  return (
      <Row className='login-title mb-4'>
        <Col xs={12}>
          <label>Log In</label>
        </Col>
      </Row>
  );
}

export default LogInTitle;
