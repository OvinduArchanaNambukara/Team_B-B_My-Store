import React, {useState} from 'react';
import {Button, Col} from "react-bootstrap";

type AddToCartButtonProps = {
  onClick: () => void
}

const AddToCartBtn: React.FC<AddToCartButtonProps> = (props) => {

  const [isUpdateBtn, setIsUpdateBtn] = useState<boolean>(false);

  const handleClick = () => {
    setIsUpdateBtn(true);
    props.onClick();
  }


  return (
      <Col xs={12} md={6} className='pl-md-2 pl-3  text-center'>
        <Button onClick={() => handleClick()} variant={isUpdateBtn ? "outline-secondary" : "success"}
                className='float-md-right px-md-1 px-3 addToCartBtn'>{isUpdateBtn ? "Update" : "Add To Cart"}</Button>
      </Col>
  )
}

export default AddToCartBtn;
