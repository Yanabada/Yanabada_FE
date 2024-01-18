import { useQuery } from "@tanstack/react-query";
import getDetail from "../api/detail";

const useProductDetail = () => {
  const getDetailQuery = useQuery({
    queryKey: ["productDetail"],
    queryFn: getDetail
  });

  return { getDetailQuery };
};

export default useProductDetail;
