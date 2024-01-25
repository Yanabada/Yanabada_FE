import { useQuery } from "@tanstack/react-query";
import { getChatRooms } from "../apis/api";

const useChatRooms = (isLoggedIn?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["chatRooms"],
    queryFn: getChatRooms,
    enabled: !!isLoggedIn
  });

  return { data, isLoading, error };
};

export default useChatRooms;
