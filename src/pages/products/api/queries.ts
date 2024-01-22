import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import getProducts, { GetProductsRequestParams } from "./products";

const useProducts = (params: Partial<GetProductsRequestParams> = { size: 3 }) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts({ ...params, page: pageParam }),
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
