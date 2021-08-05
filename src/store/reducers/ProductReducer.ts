import {IProduct, IProducts} from "../../types/types";
import {ProductActionTypes} from "../types/ProductActionTypes";
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

const initialState: storeTypes = {
  grocery: [],
  food: [],
  electronic: [],
  pharmacy: [],
  vegetables: [],
  meat: [],
  fruits: []
}

export interface storeTypes {
  grocery: IProducts[]
  food: IProducts[]
  electronic: IProducts[]
  pharmacy: IProducts[]
  vegetables: IProducts[]
  fruits: IProducts[]
  meat: IProducts[]
}

export const ProductReducer = (state: storeTypes = initialState, action: ProductActionTypes) => {
  switch (action.type) {
    case MARK_ADD_TO_CART: {
      const grocery = state.grocery.slice();
      const food = state.food.slice();
      const electronic = state.electronic.slice();
      const pharmacy = state.pharmacy.slice();
      const all: IProducts[] = [...grocery, ...food, ...electronic, ...pharmacy];

      all.map((value) => {
        value.productDetails.map((product: IProduct) => {
          if (product.product.id === action.payload.id) {
            product.inCart = true;
            return;
          }
          return;
        });
      });
      return {
        ...state,
        grocery: grocery, pharmacy: pharmacy, electronic: electronic, food: food
      }
    }
    case MARK_REMOVE_FROM_CART: {
      const grocery = state.grocery.slice();
      const food = state.food.slice();
      const electronic = state.electronic.slice();
      const pharmacy = state.pharmacy.slice();
      const all: IProducts[] = [...grocery, ...food, ...electronic, ...pharmacy];

      all.map((value) => {
        value.productDetails.map((product: IProduct) => {
          if (product.product.id === action.payload.id) {
            product.inCart = false;
            return;
          }
          return;
        });
      })

      return {
        ...state,
        grocery: grocery, food: food, electronic: electronic, pharmacy: pharmacy
      }
    }
    case ADD_VEGETABLES: {
      return {
        ...state,
        vegetables: action.payload
      }
    }
    case ADD_ELECTRONICS: {
      return {
        ...state,
        electronic: action.payload
      }
    }
    case ADD_FOOD: {
      return {
        ...state,
        food: action.payload
      }
    }
    case ADD_MEAT: {
      return {
        ...state,
        meat: action.payload
      }
    }
    case ADD_FRUITS: {
      return {
        ...state,
        fruits: action.payload
      }
    }
    case ADD_PHARMACY: {
      return {
        ...state,
        pharmacy: action.payload
      }
    }
    default:
      return state;
  }
}


