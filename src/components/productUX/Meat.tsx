import React from "react";
import {IProducts} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";

const Meat: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.meat);

  return (
      <Products productList={productList}/>
  );
}

export default Meat;
