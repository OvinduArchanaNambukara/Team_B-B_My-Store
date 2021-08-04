import React from "react";
import {IProducts} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";

const Fruits: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.fruits);

  return (
      <Products productList={productList}/>
  );
}

export default Fruits;
