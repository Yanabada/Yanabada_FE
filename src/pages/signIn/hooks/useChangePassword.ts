import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import putChangePassword from "../apis/putChangePassword";

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (password: string) => putChangePassword(password),
    onSuccess: () => {
      toast.success("비밀변호가 변경되었습니다.");
    },
    onError: (err) => {
      toast.error("비밀번호를 변경할 수 없습니다.");
      console.log(err);
    }
  });
};

export default useChangePassword;
