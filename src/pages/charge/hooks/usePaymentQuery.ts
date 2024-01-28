import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { fetchPaymentLists } from "./usePaymentList";

const usePaymentQuery = (tab: string) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["paymentHistory", tab],
    queryFn: ({ pageParam }) => fetchPaymentLists({ page: pageParam, tab }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = allPages.length >= lastPage.totalPages;
      if (isLastPage) return undefined;
      return allPages.length + 1;
    },
    select: (data) => data.pages.flatMap((page) => page.histories)
  });
};

export default usePaymentQuery;
