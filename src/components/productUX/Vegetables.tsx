import React, {useEffect} from "react";
import {GetVegetableProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_VEGETABLES} from "../../graphql/query";
import {addVegetables} from "../../store/actions/ProductAction";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import {processData} from "../../Func/Functions";

const Vegetables: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.vegetables);
  const {data, loading, error} = useQuery<GetVegetableProducts>(GET_VEGETABLES);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    processData(data.getVegetableProducts).then(value => dispatch(addVegetables(value)));
  }, [data]);

  return (
      <React.Fragment>
        {error && <Error/>}
        {loading && <Loading/>}
        {!loading && <Products productList={productList}/>}
      </React.Fragment>
  );
}

export default Vegetables;
