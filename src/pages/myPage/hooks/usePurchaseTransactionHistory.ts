import { useQuery } from "@tanstack/react-query";
import getPurchaseTransactionHistory from "../apis/getPurchaseTransactionHistory";

const usePurchaseTransactionHistory = (tradeId: number | undefined) => {
  return useQuery({
    queryKey: ["purchaseTransactionHistory", tradeId],
    queryFn: () => getPurchaseTransactionHistory(tradeId),
    enabled: false
  });
};

export default usePurchaseTransactionHistory;
