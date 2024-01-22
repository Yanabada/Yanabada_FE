import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../apis/api";
import { MessageRequestParam } from "../types/chatRoom";

const useMessages = (params: MessageRequestParam) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["messages", params.code],
    queryFn: () => getMessages({ code: params.code })
  });

  return { data, isLoading, error };
};

export default useMessages;
