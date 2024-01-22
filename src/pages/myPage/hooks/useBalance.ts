import { useSuspenseQuery } from "@tanstack/react-query";
import getBalance from "../apis/getBalance";

const useBalance = () => {
  return useSuspenseQuery({
    queryKey: ["balance"],
    queryFn: () => getBalance()
  });
};

export default useBalance;
