import {IProduct, IProducts, QueryItem} from "../../types/types";
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
import axios, {AxiosResponse} from "axios";

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

const genenerateUrl = (key: string): string => {
  let keyPath: string = '';
  axios.post('/getImage',
      {
        name: key
      }
  ).then((response: AxiosResponse) => {
    console.log(response.data.name);
    keyPath = key;
  }).catch((error) => {
    console.log(error);
  });
  return key;
}

const addToList = (arr: QueryItem) => {
  let products = arr.products.map((value): IProduct => {
    return {
      inCart: false,
      product: {
        name: value.name,
        id: value._id,
        currentPrice: value.current_price,
        oldPrice: value.old_price,
        image: genenerateUrl(value.key)
      }
    }
  });
  let productList: IProducts[] = [
    {
      category: arr.category_name,
      productDetails: products
    }
  ];
  return productList;
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
      const list = addToList(action.payload.getVegetableProducts);
      return {
        ...state,
        vegetables: list
      }
    }
    case ADD_ELECTRONICS: {
      const list = addToList(action.payload.getElectronicProducts);
      return {
        ...state,
        electronic: list
      }
    }
    case ADD_FOOD: {
      const list = addToList(action.payload.getFoodProducts);
      return {
        ...state,
        food: list
      }
    }
    case ADD_MEAT: {
      const list = addToList(action.payload.getMeatProducts);
      return {
        ...state,
        meat: list
      }
    }
    case ADD_FRUITS: {
      const list = addToList(action.payload.getFruitProducts);
      return {
        ...state,
        fruits: list
      }
    }
    case ADD_PHARMACY: {
      const list = addToList(action.payload.getPharmacyProducts);
      return {
        ...state,
        pharmacy: list
      }
    }

    default:
      return state;
  }
}


