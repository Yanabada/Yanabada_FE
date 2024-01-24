import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import getSalesHistory from "../apis/getSalesHistory";

const useSalesHistory = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ["salesHistory"],
    queryFn: ({ pageParam }) => getSalesHistory({ page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = allPages.length === lastPage.totalPages;
      if (isLastPage) return undefined;
      return allPages.length;
    },
    select: (data) => data?.pages.flatMap((page) => page.products)
  });
};

export default useSalesHistory;
