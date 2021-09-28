import * as actionTypes from "../actions/cartActions";
import { reducer } from "../../utils/utils";
const DEFAULT_STATE = { items: [], totalPrice: 0, totalQuantity: 0 };
const cartReducer = (state = DEFAULT_STATE, action) => {
  let existingItem;
  switch (action.type) {
    case actionTypes.INIT_CART:
      return action.data;
    case actionTypes.ADD_PRODUCT:
      existingItem = state.items.filter((item) => item.id === action.data.id);
      console.log(existingItem);
      if (existingItem.length === 0) {
        let newItem = action.data;
        newItem.quantity = 1;
        state.items.push(newItem);
      } else {
        console.log("Existing Item Quanitity "+ existingItem[0].quantity)
        existingItem[0].quantity++;
        console.log( "Updated Item Quanitity "+existingItem[0].quantity)
      }
      state.totalPrice = state.items
        .map((item) => item.price * item.cartQuantity)
        .reduce(reducer);
      state.totalQuantity = state.items
        .map((item) => item.cartQuantity)
        .reduce(reducer);
      console.log(state.items);
      return Object.assign({}, state, {
        items: state.items,
      });

    case actionTypes.REMOVE_PRODUCT:
      const filteredItemList = state.items.filter(
        (item) => item.id != action.data
      );
      if (filteredItemList.length) {
        state.totalPrice = filteredItemList
          .map((item) => item.price * item.cartQuantity)
          .reduce(reducer);
        state.totalQuantity = filteredItemList
          .map((item) => item.cartQuantity)
          .reduce(reducer);
        return Object.assign({}, state, {
          ...state,
        });
      } else {
        return {
          ...state,
          items: [],
          totalPrice: 0,
          totalQuantity: 0,
        };
      }
    default:
      return state;
  } //end of switch
}; //end of cartReducer;

export default cartReducer;
