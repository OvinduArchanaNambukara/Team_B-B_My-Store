import {ADD_TO_CART} from "../../store/constants/CartConstants";
import {ICheckoutProduct} from "../types";


export interface AddToCart {
  type: typeof ADD_TO_CART,
  payload: ICheckoutProduct
}

export type CartActionTypes = AddToCart
