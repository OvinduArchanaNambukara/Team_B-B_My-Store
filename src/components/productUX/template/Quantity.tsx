import React, {useEffect, useState} from 'react';
import {Col, FormControl, InputGroup} from "react-bootstrap";
import {ICheckoutProduct} from "../../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers/RootReducer";

type QuantityProps = {
  quantity: (quantity: number) => void
  inCart: boolean
  id: string
  qty: string
}

const Quantity: React.FC<QuantityProps> = (props) => {
  const [unit, setUnit] = useState<boolean>(true);
  const [value, setValue] = useState<number | null>(null);
  const [min, setMin] = useState<number | null>(null);
  const {inCart, quantity, id, qty} = props;
  const cartItemQuantity: ICheckoutProduct[] = useSelector((state: RootState) => state.cartReducer.cartList);

  const handleChangeUnit = () => {
    setUnit(!unit);
  }

  /**
   * match product id and cart item id
   * when cart item quantity increase or decrease , it updates the value of product quantity input value
   * @author Ovindu
   */
  useEffect(() => {
    cartItemQuantity.map((cartItem: ICheckoutProduct) => {
      if (cartItem.product.id === id) {
        setValue(cartItem.quantity);
      }
    })
  }, [cartItemQuantity]);

  /**
   * when value change pass that value to props quantity()
   * @author Ovindu
   */
  useEffect(() => {
    if (!value) {
      return
    }
    quantity(value);
  }, [value]);

  /**
   * when delete the item in cart set product default value to 1
   * @author Ovindu
   */
  useEffect(() => {
    if (!inCart) {
      setValue(1);
    }
  }, [inCart]);

  /**
   * when quantity type is weight set min value to 250 else num set to 1
   * @author Ovindu
   */
  useEffect(() => {
    if (qty === "Kg") {
      setValue(250);
    } else {
      setValue(1);
    }
  }, []);

  /**
   * When changing quantity, change the value string to number and update the value
   * @param e
   * @author Ovindu
   */
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  }

  return (
      <Col xs={12} md={6} className='pr-md-0 pl-md-3 px-4'>
        <InputGroup className="mb-3">
          <FormControl
              type="number"
              min={(qty === "Kg") ? 250 : 1}
              onChange={handleOnChange}
              value={value ? value : ""}
          />
          {(qty === 'Kg') &&
          <InputGroup.Text id="basic-addon1" onClick={() => handleChangeUnit()}>{unit ? "Kg" : "g"}</InputGroup.Text>}
        </InputGroup>
      </Col>
  )
}

export default Quantity;
