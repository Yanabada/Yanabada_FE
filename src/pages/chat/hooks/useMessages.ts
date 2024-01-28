import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getMessages } from "../apis/api";
import { MessageRequestParam } from "../types/chatRoom";

const useMessages = (params: MessageRequestParam) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["messages", params.code],
    queryFn: ({ pageParam }) => getMessages({ code: params.code, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.isLast) return undefined;
      return allPages.length;
    },
    select: (data) => data.pages.flatMap((page) => page.data.messages)
  });
};

export default useMessages;
