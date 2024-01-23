import { useQuery } from "@tanstack/react-query";
import { getPaymentHistory } from "../apis/charge";

const usePaymentHistory = (historyId: number) => {
  return useQuery({
    queryKey: ["paymentHistory", historyId],
    queryFn: () => getPaymentHistory(historyId)
  });
};

export default usePaymentHistory;
