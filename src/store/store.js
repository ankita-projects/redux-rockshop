import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import productreducer from "./reducers/productReducer";

const reducer = combineReducers({
  products: productreducer,
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;