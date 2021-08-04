import {
  ADD_ELECTRONICS,
  ADD_FOOD,
  ADD_FRUITS,
  ADD_MEAT,
  ADD_PHARMACY,
  ADD_VEGETABLES,
  MARK_ADD_TO_CART,
  MARK_REMOVE_FROM_CART
} from "../constants/ProductConstants";
import {
  GetElectronicProducts,
  GetFoodProducts,
  GetFruitProducts,
  GetMeatProducts,
  GetPharmacyProducts,
  GetVegetableProducts
} from "../../types/types";

export interface MarkAddToCart {
  type: typeof MARK_ADD_TO_CART,
  payload: {
    id: string
  }
}

export interface MarkRemoveFromCart {
  type: typeof MARK_REMOVE_FROM_CART,
  payload: {
    id: string
  }
}

export interface AddVegetable {
  type: typeof ADD_VEGETABLES,
  payload: GetVegetableProducts
}

export interface AddFruits {
  type: typeof ADD_FRUITS,
  payload: GetFruitProducts
}

export interface AddMeat {
  type: typeof ADD_MEAT,
  payload: GetMeatProducts
}

export interface AddPharmacy {
  type: typeof ADD_PHARMACY,
  payload: GetPharmacyProducts
}

export interface AddFood {
  type: typeof ADD_FOOD,
  payload: GetFoodProducts
}

export interface AddElectronics {
  type: typeof ADD_ELECTRONICS,
  payload: GetElectronicProducts
}

export type ProductActionTypes =
    MarkAddToCart
    | MarkRemoveFromCart
    | AddElectronics
    | AddMeat
    | AddFood
    | AddFruits
    | AddVegetable
    | AddPharmacy
