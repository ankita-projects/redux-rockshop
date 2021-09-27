import { getProducts } from "../../Services/ProductServices";

export const INIT_PRODUCTS = "INIT_PRODUCTS";

export const initializeProducts = () => {
  return async (dispatch) => {
    const products = await getProducts();
    dispatch({
      type: INIT_PRODUCTS,
      data: products,
    });
  };
};
