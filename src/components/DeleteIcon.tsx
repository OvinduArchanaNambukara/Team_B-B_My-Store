import React from "react";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DeleteIcon: React.FC = () => {
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faTrashAlt} className="delete-icon"/>
        </React.Fragment>
    );
}

export default DeleteIcon;