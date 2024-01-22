import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import getPurchaseHistory from "../apis/getPurchaseHistory";

const usePurchaseHistory = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ["purchaseHistory"],
    queryFn: ({ pageParam }) => getPurchaseHistory({ page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = allPages.length === lastPage.totalPages;
      if (isLastPage) return undefined;
      return allPages.length + 1;
    },
    select: (data) => data?.pages.flatMap((page) => page.products)
  });
};

export default usePurchaseHistory;
