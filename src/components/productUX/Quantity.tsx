import React, {useState} from 'react';
import {Col, FormControl, InputGroup} from "react-bootstrap";

type QuantityProps = {
  quantity: (quantity: number) => void
}

const Quantity: React.FC<QuantityProps> = (props) => {
  const [unit, setUnit] = useState<boolean>(true);

  const handleChangeUnit = () => {
    setUnit(!unit);
  }

  /**
   * When changing quantity, change the value string to number add pass tho the props quantity()
   * @param e
   * @author Ovindu
   */
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.quantity(parseInt(e.target.value));
  }

  return (
      <Col xs={12} md={6} className='pr-md-0 pl-md-3 px-4'>
        <InputGroup className="mb-3">
          <FormControl
              type="number"
              min="1"
              onChange={handleOnChange}
          />
          <InputGroup.Text id="basic-addon1" onClick={() => handleChangeUnit()}>{unit ? "kg" : "g"}</InputGroup.Text>
        </InputGroup>
      </Col>
  )
}

export default Quantity;
