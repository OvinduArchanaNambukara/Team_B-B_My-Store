import React from 'react';
import {Button, Col} from "react-bootstrap";

type AddToCartButtonProps = {
  onClick: () => void
  inCart: boolean
}

const AddToCartBtn: React.FC<AddToCartButtonProps> = (props) => {
  const {onClick, inCart} = props;

  const handleClick = () => {
    onClick();
  }

  return (
      <Col xs={12} md={6} className='pl-md-2 pl-3  text-center'>
        <Button onClick={() => handleClick()} variant={inCart ? "outline-secondary" : "success"}
                className='float-md-right px-md-1 px-3 addToCartBtn'>{inCart ? "Update" : "Add To Cart"}</Button>
      </Col>
  )
}

export default AddToCartBtn;
