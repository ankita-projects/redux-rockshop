
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REDUCE_QUANTITY = "REDUCE_QUANTITY";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const INIT_CART = "INIT_CART";

export const addProduct = (product) => {
  return (dispatch) => {
    product.quantity = 1
    dispatch({
      type: ADD_PRODUCT,
      data: product
    });
  };
};

export const removeProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT,
      data: product,
    });
  };
};

