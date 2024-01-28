import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import postCode from "../apis/postCode";
import SignInDataStore from "../stores/SignInDataStore";
import { useNavigate } from "react-router";

export const useCodeCheck = (email: string, to: string, setValue: any) => {
  const navigate = useNavigate();
  const { setEmail } = SignInDataStore();
  return useMutation({
    mutationFn: (code: number) => postCode(email, code),
    onSuccess: () => {
      toast.success("인증 성공!");
      setEmail(email);
      navigate(to);
    },
    onError: (err) => {
      toast.error("코드가 틀렸습니다.");
      setValue("code", "");

      console.log(err);
    }
  });
};

export default useCodeCheck;
