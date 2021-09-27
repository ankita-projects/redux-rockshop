import React from "react";
import { AddShoppingCart } from "@material-ui/icons";

const ProductCard = (input, clickHandler) => {
  let product = input.product;

  return (
    <div className="box">
      <li key={product.id}>
        <div className="card">
          <img src={`${product.image}`} alt={product.title} />
          <div className="card-title">
            <h3>{product.title}</h3>
          </div>
          <div className="card-content">
            <p>{product.description}</p>
          </div>
          <h2>€{product.price}</h2>
        </div>
        <div>
          <div
            className="rock__buttoncontainer__cart"
            onClick={() => clickHandler(product)}>
            <AddShoppingCart style={{ fontSize: 30 }} />
          </div>
          <button
            onClick={() => {
              console.log("sdfgsdgsdgsdgsdgsdgsdggsdg");
           
            }}
          >
            Add to cart
          </button>
        </div>
      </li>
    </div>
  );
};

export default ProductCard;
