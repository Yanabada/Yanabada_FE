import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import postEmailDuplicateCheck from "../apis/postEmailDuplicateCheck";

export const useEmailDuplicateCheck = () => {
  return useMutation({
    mutationFn: (email: string) => postEmailDuplicateCheck(email),
    onSuccess: () => {
      toast.success("이메일이 인증되었습니다.");
    },
    onError: (err) => {
      toast.error("회원정보를 찾을 수 없습니다.");
      console.log(err);
    }
  });
};

export default useEmailDuplicateCheck;
