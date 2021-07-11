import {combineReducers, createStore} from "redux";
import {ProductReducer} from "./ProductReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {CartReducer} from "./CartReducer";


export const rootReducer = combineReducers({
  productReducer: ProductReducer,
  cartReducer: CartReducer

});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools())
