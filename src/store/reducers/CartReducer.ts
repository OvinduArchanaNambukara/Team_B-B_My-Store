import {ICheckoutProduct} from "../../types/types";
import {CartActionTypes} from "../../types/store/CartActionTypes";
import {ADD_TO_CART, CHANGE_QUANTITY, DELETE_FROM_CART, DISPLAY_CART_PREVIEW} from "../constants/CartConstants";

const initialState: cartStateType = {
  cartList: [],
  displayCartPreview: false
};

interface cartStateType {
  cartList: ICheckoutProduct[],
  displayCartPreview: boolean
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
    case DISPLAY_CART_PREVIEW: {
      return {
        ...state,
        displayCartPreview: action.payload
      }
    }
    case CHANGE_QUANTITY: {
      const cartList: ICheckoutProduct[] = [...state.cartList];
      cartList[action.payload.index].quantity += action.payload.quantity;
      return {
        ...state,
        cartList: cartList
      }
    }
    default:
      return state;
  }
}
