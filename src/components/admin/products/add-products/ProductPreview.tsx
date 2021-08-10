import React from "react";
import {Button, Col, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import Name from "../../../productUX/template/Name";
import CurrentPrice from "../../../productUX/template/CurrentPrice";
import OldPrice from "../../../productUX/template/OldPrice";
import Quantity from "../../../productUX/template/Quantity";
import AddToCartBtn from "../../../productUX/template/AddToCartBtn";

type ProductPreviewProps = {
  name: string
  price: number
  unit: string
  disPrice: number
}

const ProductPreview: React.FC<ProductPreviewProps> = (props) => {
  let {name, price, unit, disPrice} = props;

    if (isNaN(disPrice)) {
      disPrice = 0;
    } else {
      let newPrice = disPrice;
      disPrice = price;
      price = newPrice;
    }


  return (
    <React.Fragment>
      <Row className='preview justify-content-center m-0 px-4'>
        <Col xs={12} className='product'>
          <Row>
            <Col xs={12}>
              <Image src={''} placeholder={name} loading='lazy' fluid={true}/>
            </Col>
          </Row>
          <Name name={name ? name : 'Product Name'}/>
          <Row className='justify-content-center'>
            <CurrentPrice currentPrice={price ? price : 0}/>
            {disPrice && <OldPrice oldPrice={disPrice}/>}
          </Row>
          <Row>
            <Col xs={12} md={6} className='pr-md-0 pl-md-3 px-4'>
              <InputGroup className="mb-3">
                <FormControl
                  type="number"
                  min="1"
                  value={1}
                />
                <InputGroup.Text id="basic-addon1">{unit}</InputGroup.Text>
              </InputGroup>
            </Col>
            <Col xs={12} md={6} className='pl-md-2 pl-3  text-center'>
              <Button variant="success"
                      className='float-md-right px-md-1 px-3 addToCartBtn'>Add To Cart</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default ProductPreview;