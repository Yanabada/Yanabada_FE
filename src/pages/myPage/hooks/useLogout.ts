import { useMutation } from "@tanstack/react-query";
import postLogout from "../apis/postLogout";
import { toast } from "react-hot-toast";

export const usePutPhoneNumber = () => {
  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      toast.success("로그아웃되었습니다.");
    },
    onError: (err) => {
      console.log(err);
    }
  });
};

export default usePutPhoneNumber;
