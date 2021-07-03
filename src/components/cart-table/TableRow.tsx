import React from "react";
import {Col, Row} from "react-bootstrap";
import {MinusCircle, PlusCircle, Trash} from "react-feather";

type TableRowProps = {
    rowNumber:number,
    image:string,
    name:string,
    price:number,
    quantity:number
}

const TableRow:React.FC<TableRowProps> = (props) => {

    const {rowNumber, image, name, price, quantity} = props;

    return(
        <tr>
            <td className='pt-5'>{rowNumber + 1}</td>
            <td className='tr-image'>
                <img src={image}/>
            </td>
            <td className='pt-5'>{name}</td>
            <td className='pt-5'>
                <Row>
                    <Col className='quantity-editor' xs={12}>
                        <MinusCircle size={18}/>
                        <label className='px-2'>10</label>
                        <PlusCircle size={18}/>
                    </Col>
                </Row>
            </td>
            <td className='pt-5'>{`Rs.${price}.00`}</td>
            <td className='pt-5'>{`Rs.${price * quantity}.00`}</td>
            <td className='pt-5'>
                <Trash size={18}/>
            </td>
        </tr>
    )
}

export default TableRow;