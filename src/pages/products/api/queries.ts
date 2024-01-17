import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import getProducts from "./products";
import { ProductType } from "../types/productsType";
import { AxiosError } from "axios";

// FIXME: Response 데이터에 totalPage, totalElements 추가 필요
const useProducts = () => {
  return useSuspenseInfiniteQuery<ProductType[], AxiosError, ProductType[], Array<string>, number>({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: () => {
      return undefined;
    }
  });
};

export default useProducts;
