import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import postEmailAuth from "../apis/postEmailAuth";

export const useEmailAuth = () => {
  return useMutation({
    mutationFn: (email: string) => postEmailAuth(email),
    onSuccess: () => {
      toast.success("이메일이 인증되었습니다.");
    },
    onError: (err) => {
      toast.error("이메일이 중복됩니다.");
      console.log(err);
    }
  });
};

export default useEmailAuth;
