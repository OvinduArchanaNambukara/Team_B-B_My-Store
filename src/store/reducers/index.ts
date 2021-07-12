import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {CartReducer} from "./CartReducer";
import {ProductReducer} from "./ProductReducer";

export const rootReducer = combineReducers({
  productReducer: ProductReducer,
  cartReducer: CartReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools())
