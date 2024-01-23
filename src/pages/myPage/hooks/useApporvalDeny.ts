import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import postApprovalDeny from "../apis/postApprovalDeny";

export const useApporvalDeny = () => {
  return useMutation({
    mutationFn: (tradeId: number | undefined) => postApprovalDeny(tradeId),
    onSuccess: () => {
      toast.success("승인이 거절되었습니다.");
    },
    onError: (err) => {
      toast.error("승인이 거절되지 않았습니다.");
      console.log(err);
    }
  });
};

export default useApporvalDeny;
