import React, {useEffect} from "react";
import {GetPharmacyProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_PHARMACY} from "../../graphql/query";
import {addPharmacy} from "../../store/actions/ProductAction";

const Pharmacy: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.pharmacy);
  const {data, loading, error} = useQuery<GetPharmacyProducts>(GET_PHARMACY);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    dispatch(addPharmacy(data));
  }, [data]);

  return (
      <Products productList={productList}/>
  );
}

export default Pharmacy;
