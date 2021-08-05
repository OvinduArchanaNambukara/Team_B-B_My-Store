import {
  AddElectronics,
  AddFood,
  AddFruits,
  AddMeat,
  AddPharmacy,
  MarkAddToCart,
  MarkRemoveFromCart
} from "../types/ProductActionTypes";
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
import {IProducts} from "../../types/types";

export const markAddToCart = (id: string): MarkAddToCart => {
  return {
    type: MARK_ADD_TO_CART,
    payload: {
      id: id
    }
  }
}

export const markRemoveFromCart = (id: string, value: boolean): MarkRemoveFromCart => {
  return {
    type: MARK_REMOVE_FROM_CART,
    payload: {
      id: id
    }
  }
}
export const addVegetables = (inventory: IProducts[]) => {
  return {
    type: ADD_VEGETABLES,
    payload: inventory
  }
}
export const addFruits = (inventory: IProducts[]): AddFruits => {
  return {
    type: ADD_FRUITS,
    payload: inventory
  }
}
export const addPharmacy = (inventory: IProducts[]): AddPharmacy => {
  return {
    type: ADD_PHARMACY,
    payload: inventory
  }
}
export const addMeat = (inventory: IProducts[]): AddMeat => {
  return {
    type: ADD_MEAT,
    payload: inventory
  }
}

export const addFood = (inventory: IProducts[]): AddFood => {
  return {
    type: ADD_FOOD,
    payload: inventory
  }
}

export const addElectronic = (inventory: IProducts[]): AddElectronics => {
  return {
    type: ADD_ELECTRONICS,
    payload: inventory
  }
}



