import { useMutation } from "@tanstack/react-query";
import { AddProduct } from "../services/product-api";

export const useProductListQuery = () => {
  useQuery({
    queryKey: ["product-list"],
    queryFn: getProductList,
    retryDelay: 1300,
    staleTime: 0.5 * 60 * 1000,
  });
};

export const useAddProductQuery = () => {
  return useMutation({
    mutationFn: (payload) => AddProduct(payload),
    mutationKey: ["add-product"],
  });
};
