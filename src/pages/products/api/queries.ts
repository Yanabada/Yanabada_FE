import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import getProducts, { GetProductsRequestParams } from "./products";

const useProducts = (params: Partial<GetProductsRequestParams> = { size: 10 }) => {
  return useSuspenseInfiniteQuery({
    queryKey: [
      "products",
      params.category,
      params.options,
      params.order,
      params.smallX,
      params.smallY
    ],
    queryFn: ({ pageParam }) => getProducts({ ...params, page: pageParam }),
    gcTime: 1000 * 10,
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
