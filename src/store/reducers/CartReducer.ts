import {ICheckoutProduct} from "../../types/types";
import {CartActionTypes} from "../../types/store/CartActionTypes";
import {ADD_TO_CART, DELETE_FROM_CART} from "../constants/CartConstants";

const initialState: cartStateType = {
  cartList: []
};

interface cartStateType {
  cartList: ICheckoutProduct[]
}

export const CartReducer = (state: cartStateType = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartList: [...state.cartList, action.payload]
      }
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        cartList: state.cartList.filter(
            (item: ICheckoutProduct, index: number) =>
                index !== action.payload
        )
      }
    }
    default:
      return state;
  }
}
