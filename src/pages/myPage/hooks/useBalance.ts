import { useQuery } from "@tanstack/react-query";
import getBalance from "../apis/getBalance";

const useBalance = (isLoggedIn?: boolean) => {
  return useQuery({
    queryKey: ["balance"],
    queryFn: () => getBalance(),
    enabled: isLoggedIn
  });
};

export default useBalance;
