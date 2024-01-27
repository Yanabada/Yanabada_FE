import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import getProducts, { GetProductsRequestParams } from "./products";

const useProducts = (params: Partial<GetProductsRequestParams> = { size: 10 }) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["products", params.category, params.options, params.order],
    queryFn: ({ pageParam }) => getProducts({ ...params, page: pageParam }),
    staleTime: 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = allPages.length === lastPage.data.totalPages;
      if (isLastPage) return undefined;
      return allPages.length + 1;
    },
    select: (data) => data.pages.flatMap((page) => page.data.products)
  });
};

export default useProducts;
