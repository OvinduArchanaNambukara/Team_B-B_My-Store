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
import {IProduct, IProducts, QueryItem, QueryItems} from "../../types/types";
import {Dispatch} from "redux";
import {store} from "../reducers/RootReducer";

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

/**
 * check product in cart or not
 * @author Ovindu
 * @param product
 */
const checkInTheCart = (product: QueryItem): boolean => {
  const cartItemList = store.getState().cartReducer.cartList;
  if (!cartItemList || cartItemList.length === 0) {
    return false;
  }
  for (const iCheckoutProduct of cartItemList) {
    if (iCheckoutProduct.product.id === product._id) {
      return true;
    }
  }
  return false;
}

/**
 * create a array from query data for that category and according to that category dispatch the function
 * @author Ovindu
 * @param data
 */
export const processQueryData = (data: QueryItems) => async (dispatch: Dispatch) => {
  const items: IProduct[] = [];
  for (const product of data.products) {
    items.push({
      inCart: checkInTheCart(product),
      product: {
        name: product.name,
        oldPrice: product.old_price,
        currentPrice: product.current_price,
        id: product._id,
        qty: product.qty,
        image: product.key
      }
    });
  }
  const productData: IProducts[] = [
    {
      category: data.category_name,
      productDetails: items
    }
  ];
  switch (data.category_name) {
    case "Fruits": {
      dispatch(addFruits(productData));
      break;
    }
    case "Electronics": {
      dispatch(addElectronic(productData));
      break;
    }
    case "Pharmacy": {
      dispatch(addPharmacy(productData));
      break;
    }
    case "Vegetables": {
      dispatch(addVegetables(productData));
      break;
    }
    case "Food": {
      dispatch(addFood(productData));
      break;
    }
    case "Meat": {
      dispatch(addMeat(productData));
      break;
    }
    default:
      break;
  }
}



