import { useQuery } from "@tanstack/react-query";
import { getChatRooms } from "../apis/api";

const useChatRooms = (isLoggedIn?: boolean) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["chatRooms"],
    queryFn: getChatRooms,
    enabled: isLoggedIn,
    refetchInterval: 3500
  });

  return { data, isLoading, error };
};

export default useChatRooms;
