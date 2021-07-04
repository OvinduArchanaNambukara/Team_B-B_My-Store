import React from "react";
import {FiShoppingCart} from "react-icons/all";
import {Badge} from "react-bootstrap";

type CartIconProps = {
    handleClick: (event: any) => void
    itemCount: number
}

const CartIcon: React.FC<CartIconProps> = (props) => {
    const {handleClick, itemCount} = props;

    return (
        <React.Fragment>
            <span>
                <Badge pill className="count-badge">{itemCount}</Badge>
                <FiShoppingCart size={30} onClick={handleClick} className="cart-icon mr-3"/>
            </span>

        </React.Fragment>
    );
}

export default CartIcon;