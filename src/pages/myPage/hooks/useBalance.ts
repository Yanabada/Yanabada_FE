import { useQuery } from "@tanstack/react-query";
import getBalance from "../apis/getBalance";

const useBalance = () => {
  return useQuery({
    queryKey: ["balance"],
    queryFn: () => getBalance(),
    enabled: false
  });
};

export default useBalance;
