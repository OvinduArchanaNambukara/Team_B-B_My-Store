import React from "react";
import Products from "./template/Products";
import {IProducts} from "../../types/types";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import Meat from "./Meat";

const Grocery: React.FC = () => {
  return (
      <React.Fragment>
        <Vegetables/>
        <Fruits/>
        <Meat/>
      </React.Fragment>
  );
}

export default Grocery;
