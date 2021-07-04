import React from "react";
import {Button} from "react-bootstrap";

type CheckOutButtonProps = {
    classname: string
}

const CheckOutButton: React.FC<CheckOutButtonProps> = (props) => {
    const {classname} = props;

    return (
        <Button className={classname}>Check Out</Button>
    );
}

export default CheckOutButton;
