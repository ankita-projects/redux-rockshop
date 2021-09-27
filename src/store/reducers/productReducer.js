import { INIT_PRODUCTS } from "../actions/productActions";

const productreducer = (state = [], action) => {
  switch (action.type) {
    case INIT_PRODUCTS:
      return action.data;
    default:
      return state;
  }
};

export default productreducer;