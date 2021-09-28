import React from "react";
import { AddShoppingCart } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions/cartActions";

const ProductCard = (input) => {
  let product = input.product;
  const dispatch = useDispatch();
  return (
    <li>
      <div className="card">
        <img src={`${product.image}`} alt={product.title} />
        <div className="card-title">
          <h3>{product.title}</h3>
        </div>
        <div className="card-content">
          <p>{product.description}</p>
        </div>
        <h2>€{product.price}</h2>
        <button onClick={() => dispatch(addProduct(product))}>Add to cart</button>
        <div
          className="rock__buttoncontainer__cart"
          onClick={() => {
            console.log("button clicked");
          }}
        >
          <AddShoppingCart style={{ fontSize: 30 }} />
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
