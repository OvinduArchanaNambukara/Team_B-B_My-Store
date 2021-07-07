import React from "react";
import {Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Logo: React.FC = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push('/');
  }

  return (
      <Col className='my-auto' xs={4}>
        <p className='my-0 p-0 pl-md-4'>
          <span onClick={handleOnClick}>LOGO</span>
        </p>
      </Col>
  );
}

export default Logo;
