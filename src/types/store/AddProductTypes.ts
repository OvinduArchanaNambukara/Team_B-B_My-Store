import {ADD_TO_CART} from "../../store/constants/ProductConstants";

export interface AddProduct {
  type: typeof ADD_TO_CART,
  payload: string
}

export type AddProductsTypes = AddProduct
