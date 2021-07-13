import {IProduct, IProducts} from "../../types/types";
import {ShopProducts} from "../../constants/constants";
import {ProductActionTypes} from "../types/ProductActionTypes";
import {MARK_ADD_TO_CART, MARK_REMOVE_FROM_CART} from "../constants/ProductConstants";

const initialState: storeTypes = {
  grocery: ShopProducts
}

export interface storeTypes {
  grocery: IProducts[];
}

export const ProductReducer = (state: storeTypes = initialState, action: ProductActionTypes) => {
  switch (action.type) {
    case MARK_ADD_TO_CART: {
      const tempList: IProducts[] = [...state.grocery];
      tempList[0].productDetails[action.payload.index].inCart = action.payload.value;
      return {
        ...state,
        grocery: tempList
      }
    }
    case MARK_REMOVE_FROM_CART: {
      const tempList: IProducts[] = [...state.grocery];
      tempList[0].productDetails.map<void>((value: IProduct) => {
        if (value.product.id === action.payload.id) {
          value.inCart = action.payload.value;
        }
      })
      return {...state, grocery: tempList}
    }
    default:
      return state;
  }
}

