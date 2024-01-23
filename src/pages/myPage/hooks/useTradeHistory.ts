import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import deleteTradeHistory from "../apis/deleteTradeHistory";

export const useTradeHistory = () => {
  return useMutation({
    mutationFn: (tradeId: number | null) => deleteTradeHistory(tradeId),
    onSuccess: () => {
      toast.success("거래내역이 삭제되었습니다.");
    },
    onError: (err) => {
      toast.error("거래내역을 삭제할 수 없습니다.");
      console.log(err);
    }
  });
};

export default useTradeHistory;
