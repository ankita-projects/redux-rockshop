import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeProduct} from "../store/actions/cartActions";
import { itemsToArray } from "../utils/utils";

const Cart = () =>{
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return(
    <div>
    <div>
      {cart.items.length > 0 ? (
        <div>
          {cart.items.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>
                {item.quantity} × {item.price}€ = {item.quantity * item.price}€
              </p>
              <button onClick={() => dispatch(removeProduct(item))}>
                Remove From Cart
              </button>
            </li>
          ))}
          <p>
            Total products:
            {cart.items
              .map((item) => item.quantity)
              .reduce((item, quantity) => item + quantity, 0)}
          </p>
          <p>
            Total amount:
            {cart.items
              .map((item) => item.price * item.quantity)
              .reduce((item, price) => item + price, 0)}
          </p>
          <button>Checkout</button>
        </div>
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </div>
  </div>
  );

};




export default Cart;
