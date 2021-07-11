import {ADD_TO_CART, DELETE_FROM_CART, DISPLAY_CART_PREVIEW} from "../../store/constants/CartConstants";
import {ICheckoutProduct} from "../types";


export interface AddToCart {
  type: typeof ADD_TO_CART,
  payload: ICheckoutProduct
}

export interface DeleteFromCart {
  type: typeof DELETE_FROM_CART,
  payload: number
}

export interface DisplayCartPreview {
  type: typeof DISPLAY_CART_PREVIEW
  payload: boolean
}

export type CartActionTypes = AddToCart | DeleteFromCart | DisplayCartPreview
