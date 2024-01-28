import { useQuery } from "@tanstack/react-query";
import getDetail from "../api/detail";

const useProductDetail = (productId: number) => {
  const getDetailQuery = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: () => getDetail(productId)
  });

  return { getDetailQuery };
};

export default useProductDetail;
