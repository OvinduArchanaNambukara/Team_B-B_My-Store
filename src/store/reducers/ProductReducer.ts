import {IProducts} from "../../types/types";
import {ShopProducts} from "../../constants/constants";
import {AddProductsTypes} from "../../types/store/AddProductTypes";
import {ADD_TO_CART} from "../constants/ProductConstants";

const initialState: storeTypes = {
  vegetables: ShopProducts
}

export interface storeTypes {
  vegetables: IProducts[];
}

export const ProductReducer = (state: storeTypes = initialState, action: AddProductsTypes) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        vegetable: [...state.vegetables, action.payload]
      }
    default:
      return state;
  }
}

