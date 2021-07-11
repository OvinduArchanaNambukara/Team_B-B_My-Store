import React, {useEffect, useState} from 'react';
import {Col, FormControl, InputGroup} from "react-bootstrap";

type QuantityProps = {
  quantity: (quantity: number) => void
}

const Quantity: React.FC<QuantityProps> = (props) => {
  const [unit, setUnit] = useState<boolean>(true);
  const [value, setValue] = useState<number>(1);

  const handleChangeUnit = () => {
    setUnit(!unit);
  }

  /**
   * when value change pass that value to props quantity()
   * @author Ovindu
   */
  useEffect(() => {
    props.quantity(value);
  }, [value]);

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
              min="1"
              onChange={handleOnChange}
              value={value}
          />
          <InputGroup.Text id="basic-addon1" onClick={() => handleChangeUnit()}>{unit ? "kg" : "g"}</InputGroup.Text>
        </InputGroup>
      </Col>
  )
}

export default Quantity;
