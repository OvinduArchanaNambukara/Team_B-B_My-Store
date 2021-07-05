import React from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

type CheckOutButtonProps = {
  classname: string
}

const CheckOutButton: React.FC<CheckOutButtonProps> = (props) => {
  const {classname} = props;
  const history = useHistory();

  const handleOnClick = () => {
    history.push('/checkout');
  }

  return (
      <Button className={classname} onClick={handleOnClick}>Check Out</Button>
  );
}

export default CheckOutButton;
