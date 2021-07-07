import React, {useState} from "react";
import {Button} from "react-bootstrap";

const ButtonArea: React.FC = () => {
  const [isLogIn, setIsLogIn] = useState<boolean>(false);

  const handleOnclick = () => {
    setIsLogIn(!isLogIn);
  }

  return (
      <React.Fragment>
        {
          !isLogIn &&
          <Button className='my-md-2 py-md-0'>Register</Button>
        }
        {
          !isLogIn &&
          <Button className='border-0 my-md-2 py-md-0 ml-md-1 mt-1 mb-1' onClick={handleOnclick}>Log in</Button>
        }
        {
          isLogIn &&
          <Button className='border-0 my-md-2 py-md-0 ml-md-1 mt-1 mb-1' onClick={handleOnclick}>Log out</Button>
        }
      </React.Fragment>
  );
}

export default ButtonArea;
