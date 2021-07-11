import React from 'react';
import {BiTrashAlt} from "react-icons/all";
import {useDispatch} from "react-redux";
import {deleteFromCart} from "../../store/actions/CartActions";

type DeleteIconProps = {
  index: number
}

const DeleteIcon: React.FC<DeleteIconProps> = (props) => {
  const {index} = props;
  const dispatch = useDispatch();

  /**
   * when click delete that item in redux store cartItems[]
   * @author Ovindu
   */
  const handleOnDeleteClick = () => {
    dispatch(deleteFromCart(index));
  }

  return (
      <BiTrashAlt onClick={handleOnDeleteClick}/>
  )
}

export default DeleteIcon;
