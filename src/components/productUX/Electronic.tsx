import React, {useEffect} from "react";
import {GetElectronicProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_ELECTRONICS} from "../../graphql/query";
import {addElectronic} from "../../store/actions/ProductAction";

const Electronic: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.electronic);
  const {data, loading, error} = useQuery<GetElectronicProducts>(GET_ELECTRONICS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    dispatch(addElectronic(data));
  }, [data]);

  return (
      <Products productList={productList}/>
  );
}

export default Electronic;
