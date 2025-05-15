import { useState, useEffect } from "react";
import ProductCard from "./product-card";

const ProductsList = () => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  // fetch data from fake store api
  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setList(data);
  }

  useEffect(() => {
    fetchData();
  }, [count]);
  //  when component mounted => setup fn invoke
  //  when
  const productCardList = list.map((product, index) => {
    return <ProductCard productData={product} key={index} />;
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <button onClick={() => setCount(count + 1)}> counter++</button>
      <br />
      {count}
      {productCardList}
    </div>
  );
};

export default ProductsList;
