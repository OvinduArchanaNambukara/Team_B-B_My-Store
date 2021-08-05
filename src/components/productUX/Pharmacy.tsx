import React, {useEffect} from "react";
import {GetPharmacyProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_PHARMACY} from "../../graphql/query";
import {addPharmacy} from "../../store/actions/ProductAction";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import {processData} from "../../Func/Functions";

const Pharmacy: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.pharmacy);
  const {data, loading, error} = useQuery<GetPharmacyProducts>(GET_PHARMACY);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    processData(data.getPharmacyProducts).then(value => dispatch(addPharmacy(value)));
  }, [data]);


  return (
      <React.Fragment>
        {error && <Error/>}
        {loading && <Loading/>}
        {!loading && <Products productList={productList}/>}
      </React.Fragment>
  );
}

export default Pharmacy;
