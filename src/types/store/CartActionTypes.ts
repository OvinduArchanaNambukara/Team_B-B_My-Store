import {ADD_TO_CART, DELETE_FROM_CART} from "../../store/constants/CartConstants";
import {ICheckoutProduct} from "../types";


export interface AddToCart {
  type: typeof ADD_TO_CART,
  payload: ICheckoutProduct
}

export interface DeleteFromCart {
  type: typeof DELETE_FROM_CART,
  payload: number
}

export type CartActionTypes = AddToCart | DeleteFromCart
