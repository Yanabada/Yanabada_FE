import { useSuspenseQuery } from "@tanstack/react-query";
import getSellTransactionHistory from "../apis/getSellTransactionHistory";

const useSellTransactionHistory = (tradeId: number | undefined) => {
  return useSuspenseQuery({
    queryKey: ["sellTransactionHistory"],
    queryFn: () => getSellTransactionHistory(tradeId)
  });
};

export default useSellTransactionHistory;
