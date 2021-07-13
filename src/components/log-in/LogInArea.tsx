import React from "react";
import {Col} from "react-bootstrap";
import LogInTitle from "./LogInTitle";
import LogInForm from "./LogInForm";
import LogInBottom from "./LogInBottom";

const LogInArea: React.FC = () => {
  return (
      <Col xs={6} className='pl-5'>
        <LogInTitle/>
        <LogInForm/>
        <LogInBottom/>
      </Col>
  );
}

export default LogInArea;
