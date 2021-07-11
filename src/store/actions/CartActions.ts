import {ICheckoutProduct} from "../../types/types";
import {AddToCart} from "../../types/store/CartActionTypes";
import {ADD_TO_CART} from "../constants/CartConstants";

export const addToCart = (item: ICheckoutProduct): AddToCart => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}
