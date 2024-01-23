import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import postSaleApprove from "../apis/postSaleApprove";

export const useSaleApprove = () => {
  return useMutation({
    mutationFn: (tradeId: number | undefined) => postSaleApprove(tradeId),
    onSuccess: () => {
      toast.success("판매가 승인되었습니다.");
    },
    onError: (err) => {
      toast.error("판매가 승인되지 않았습니다.");
      console.log(err);
    }
  });
};

export default useSaleApprove;
