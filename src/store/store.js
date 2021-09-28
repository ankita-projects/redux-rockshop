import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import productreducer from "./reducers/productReducer";
import cartreducer from "./reducers/cartReducer";

const reducer = combineReducers({
  products: productreducer,
  cart: cartreducer
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;