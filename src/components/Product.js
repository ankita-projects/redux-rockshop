import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Product = () => {
  //const [product, setProduct] = useState(() => null);
  const products = useSelector((state) => state.products);
  if (products.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
        <main className="products">
          <ul>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </main>
    );
  }
};

export default Product;
