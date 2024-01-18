import { InfiniteData, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import getProducts, { GetProductsRequestParams } from "./products";
import { GetProductResponseData } from "../types/productsType";
import { AxiosError } from "axios";

// FIXME: Response 데이터에 totalPage, totalElements 추가 필요
const useProducts = (params: Partial<GetProductsRequestParams>) => {
  return useSuspenseInfiniteQuery<
    GetProductResponseData,
    AxiosError,
    InfiniteData<GetProductResponseData>,
    Array<string>,
    number
  >({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = allPages.length === lastPage.totalPages;
      if (isLastPage) return undefined;
      return allPages.length + 1;
    }
  });
};

export default useProducts;
