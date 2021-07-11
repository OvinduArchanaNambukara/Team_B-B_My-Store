import React from 'react';
import {IProducts} from "../../types/types";
import ProductCategoryArea from "./ProductCategoryArea";
import {Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

const Products: React.FC = () => {
  const productList = useSelector((state: RootState) => state.productReducer.vegetables);

  return (
      <Row className='products justify-content-center'>
        <Col xs={12}>
          {productList.map((shopProducts: IProducts, index: number) =>
              <ProductCategoryArea products={shopProducts} key={index}/>
          )}
        </Col>
      </Row>
  )

}

export default Products;
