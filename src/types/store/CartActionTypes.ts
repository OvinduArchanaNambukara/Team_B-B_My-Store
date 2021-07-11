import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  DELETE_FROM_CART,
  DISPLAY_CART_PREVIEW
} from "../../store/constants/CartConstants";
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

export interface ChangeQuantity {
  type: typeof CHANGE_QUANTITY,
  payload: {
    index: number
    quantity: number
  }
}

export type CartActionTypes = AddToCart | DeleteFromCart | DisplayCartPreview | ChangeQuantity
