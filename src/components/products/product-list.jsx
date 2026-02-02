import { useQuery } from "@tanstack/react-query";
import ProductCard from "./product-card";
import { getProductList } from "../../services/product-api";

const ProductList = () => {
  const {
    data: productList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product-list"],
    queryFn: getProductList,
    retryDelay: 1300,
    staleTime: 0.5 * 60 * 1000,
  });
  return (
    <div>
      {isLoading
        ? "loading data ..."
        : isError
        ? "error"
        : productList.map((product) => {
            return <ProductCard data={product} key={product.id} />;
          })}
    </div>
  );
};

export default ProductList;
