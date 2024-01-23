import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import postPurchaseCancel from "./../apis/postPurchaseCancel";

export const usePurchaseCancel = () => {
  return useMutation({
    mutationFn: (tradeId: number | undefined) => postPurchaseCancel(tradeId),
    onSuccess: () => {
      toast.success("구매가 취소되었습니다.");
    },
    onError: (err) => {
      toast.error("구매가 취소되지 않았습니다.");
      console.log(err);
    }
  });
};

export default usePurchaseCancel;
