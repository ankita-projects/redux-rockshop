import React from "react";
import { AddShoppingCart } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions/cartActions";

const ProductCard = (input) => {
  let product = input.product;
  const dispatch = useDispatch();
  return (

      <section className="card-container">
        <div className="card">
           <div className="my-1/2 px-1/2 w-auto md:w-9/12 lg:my-4 lg:px-4 lg:w-102">
              <article className="overflow-hidden rounded-lg shadow-lg">
          <img src={`${product.image}`} alt={product.title} />
          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h3>{product.title}</h3>
         
            <p className=" text-opacity-100 text-black">
            {product.description}
            </p>
          <h2>€{product.price}</h2>
          <button onClick={() => dispatch(addProduct(product))}>
            Add to cart
          </button>
          <div
            className="rock__buttoncontainer__cart"
            onClick={() => {
              console.log("button clicked");
            }}
          >
            <AddShoppingCart style={{ fontSize: 30 }} />
          </div>
      </header>
        </article>
      
        </div>
        </div>
      </section>
   
  );
};

export default ProductCard;
