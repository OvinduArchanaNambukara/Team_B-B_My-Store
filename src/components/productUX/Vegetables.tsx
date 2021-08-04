import React, {useEffect} from "react";
import {GetVegetableProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_VEGETABLES} from "../../graphql/query";
import {addVegetables} from "../../store/actions/ProductAction";

const Vegetables: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.vegetables);
  const {data, loading, error} = useQuery<GetVegetableProducts>(GET_VEGETABLES);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    dispatch(addVegetables(data));
  }, [data]);

  return (
      <Products productList={productList}/>
  );
}

export default Vegetables;
