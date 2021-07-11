import {ICheckoutProduct} from "../../types/types";
import {AddToCart, DeleteFromCart, DisplayCartPreview} from "../../types/store/CartActionTypes";
import {ADD_TO_CART, DELETE_FROM_CART, DISPLAY_CART_PREVIEW} from "../constants/CartConstants";

export const addToCart = (item: ICheckoutProduct): AddToCart => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

export const deleteFromCart = (index: number): DeleteFromCart => {
  return {
    type: DELETE_FROM_CART,
    payload: index
  }
}

export const displayCartPreview = (value: boolean): DisplayCartPreview => {
  return {
    type: DISPLAY_CART_PREVIEW,
    payload: value
  }
}
