import { useSuspenseQuery } from "@tanstack/react-query";
import getPurchaseTransactionHistory from "../apis/getPurchaseTransactionHistory";

const usePurchaseTransactionHistory = (tradeId: number | undefined) => {
  return useSuspenseQuery({
    queryKey: ["purchaseTransactionHistory"],
    queryFn: () => getPurchaseTransactionHistory(tradeId)
  });
};

export default usePurchaseTransactionHistory;
