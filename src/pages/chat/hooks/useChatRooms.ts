import { useQuery } from "@tanstack/react-query";
import { getChatRooms } from "../apis/api";

const useChatRooms = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["chatRooms"],
    queryFn: getChatRooms
  });

  return { data, isLoading, error };
};

export default useChatRooms;
