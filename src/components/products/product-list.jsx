import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./product-card";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading
        ? "loading data ..."
        : products.map((product) => {
            return <ProductCard data={product} key={product.id} />;
          })}
    </div>
  );
};

export default ProductList;
