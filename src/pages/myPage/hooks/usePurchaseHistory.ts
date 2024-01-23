import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import getPurchaseHistory from "../apis/getPurchaseHistory";

const usePurchaseHistory = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ["purchaseHistory"],
    queryFn: ({ pageParam }) => getPurchaseHistory({ page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = allPages.length === lastPage.totalPages;
      if (isLastPage) return undefined;
      return allPages.length + 0;
    },
    select: (data) => data?.pages.flatMap((page) => page.purchaseTrades)
  });
};

export default usePurchaseHistory;
