import React from "react";
import {FiTrash} from "react-icons/all";
import {deleteIconColor} from "../constants/constants";

type DeleteIconProps = {
    size: number
}

const DeleteIcon: React.FC<DeleteIconProps>= (props) => {
    const {size} = props;

    return (
        <React.Fragment>
            <FiTrash className="delete-icon" size={size} color={deleteIconColor}/>
        </React.Fragment>
    );
}

export default DeleteIcon;

