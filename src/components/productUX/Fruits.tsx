import React, {useEffect} from "react";
import {GetFruitProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_FRUITS} from "../../graphql/query";
import {addFruits} from "../../store/actions/ProductAction";

const Fruits: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.fruits);
  const {data, loading, error} = useQuery<GetFruitProducts>(GET_FRUITS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    dispatch(addFruits(data));
  }, [data]);

  return (
      <Products productList={productList}/>
  );
}

export default Fruits;
