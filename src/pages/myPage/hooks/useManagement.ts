import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import getManagement from "../apis/getManagement";

const useManagement = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ["management"],
    queryFn: ({ pageParam }) => getManagement({ page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = allPages.length === lastPage.totalPages;
      if (isLastPage) return undefined;
      return allPages.length + 0;
    },
    select: (data) => data?.pages.flatMap((page) => page.approvalTrades)
  });
};

export default useManagement;
