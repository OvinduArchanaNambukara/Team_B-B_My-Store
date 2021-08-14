import React from "react";
import {FiTrash2} from "react-icons/all";
import {deleteIconColor} from "../../custom-styles/deleteIconStyle";


type DeleteIconProps = {
  size: number
  onDeleteClick: () => void
}

const DeleteIcon: React.FC<DeleteIconProps> = (props) => {
  const {size, onDeleteClick} = props;

  return (
    <React.Fragment>
      <FiTrash2 className="delete-icon" size={size} color={deleteIconColor} onClick={onDeleteClick}/>
    </React.Fragment>
  );
}

export default DeleteIcon;

