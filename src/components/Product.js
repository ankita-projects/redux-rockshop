import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { addProduct } from "../store/actions/cartActions";

const Product = () => {
  const dispatch = useDispatch();
  //const [product, setProduct] = useState(() => null);
  const products = useSelector((state) => state.products);
  const handleClick = (product) => {
    console.log("ddddddddddddddddddddddddddddddddddddddddddd")
    dispatch(addProduct(product));
  };
  console.log(products);
  if (products.length == 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="box">
        <main className="products">
          <ul>
            {products.map((product) => (
              <ProductCard product={product} clickHandler={handleClick} />
            ))}
          </ul>
        </main>
      </div>
    );
  }
};

export default Product;
