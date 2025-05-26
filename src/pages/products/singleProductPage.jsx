import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleProductPage = () => {
  const params = useParams();
  const [productData, setProductData] = useState({});
  async function fetchData() {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    const data = await response.json();
    setProductData(data);
  }

  useEffect(() => {
    fetchData();
  }, [params]);
  console.log(productData);

  return <div>{productData.title}</div>;
};

export default SingleProductPage;
