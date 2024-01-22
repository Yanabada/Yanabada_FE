import { useMutation } from "@tanstack/react-query";
import postLogout from "../apis/postLogout";
import { toast } from "react-hot-toast";

export const usePutPhoneNumber = () => {
  return useMutation({
    mutationFn: () => postLogout(),
    onSuccess: () => {
      toast.success("로그아웃 되었습니다.");
    },
    onError: (err) => {
      toast.error("로그아웃할 수 없습니다.");
      console.log(err);
    }
  });
};

export default usePutPhoneNumber;
