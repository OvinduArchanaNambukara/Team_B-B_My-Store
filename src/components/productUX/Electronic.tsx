import React, {useEffect} from "react";
import {GetElectronicProducts, IProducts} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import Products from "./template/Products";
import {useQuery} from "@apollo/client";
import {GET_ELECTRONICS} from "../../graphql/query";
import {addElectronic} from "../../store/actions/ProductAction";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import {processData} from "../../Func/Functions";

const Electronic: React.FC = () => {
  const productList: IProducts[] = useSelector((state: RootState) => state.productReducer.electronic);
  const {data, loading, error} = useQuery<GetElectronicProducts>(GET_ELECTRONICS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      return
    }
    processData(data.getElectronicProducts).then(value => dispatch(addElectronic(value)));
  }, [data]);


  return (
      <React.Fragment>
        {error && <Error/>}
        {loading && <Loading/>}
        {!loading && <Products productList={productList}/>}
      </React.Fragment>
  );
}

export default Electronic;
