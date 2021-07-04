import React from "react";
import {FiMinusCircle, FiPlusCircle} from "react-icons/all";

type QuantityToggleProps = {
    quantity: number
}

const QuantityToggle: React.FC<QuantityToggleProps> = (props) => {
    return (
        <React.Fragment>
            <FiMinusCircle className="quantity-toggle text-danger"/>
            {props.quantity}
            <FiPlusCircle className="quantity-toggle text-primary"/>
        </React.Fragment>
    );
}

export default QuantityToggle;