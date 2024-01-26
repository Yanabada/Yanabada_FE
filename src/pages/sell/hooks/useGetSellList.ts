import { useQuery } from "@tanstack/react-query";
import getSellList from "../apis/getSellList";

const useGetSellList = () => {
  return useQuery({
    queryKey: ["sellList"],
    queryFn: getSellList
  });
};

export default useGetSellList;
