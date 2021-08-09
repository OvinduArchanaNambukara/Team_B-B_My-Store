import React from 'react';
import {BiEdit, BiTrashAlt} from "react-icons/all";

const ProductAction: React.FC = () => {
    return (
        <div className='actionBtns'>
            <BiEdit className='mr-2' size={20}/>
            <BiTrashAlt size={20}/>
        </div>
    )
}

export default ProductAction;