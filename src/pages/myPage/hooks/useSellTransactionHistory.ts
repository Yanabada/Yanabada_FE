import { useQuery } from "@tanstack/react-query";
import getSellTransactionHistory from "../apis/getSellTransactionHistory";

const useSellTransactionHistory = (tradeId: number | undefined) => {
  return useQuery({
    queryKey: ["sellTransactionHistory", tradeId],
    queryFn: () => getSellTransactionHistory(tradeId),
    enabled: false
  });
};

export default useSellTransactionHistory;
