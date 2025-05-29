import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./product-card";
import useProducts from "../../store/products";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { actions, productList } = useProducts();
  const fetchData = async () => {
    setIsLoading(true);

    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    actions.setList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    productList.length < 1 && fetchData();
  }, []);

  return (
    <div>
      {isLoading
        ? "loading data ..."
        : productList.map((product) => {
            return <ProductCard data={product} key={product.id} />;
          })}
    </div>
  );
};

export default ProductList;
