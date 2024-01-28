import { useMutation } from "@tanstack/react-query";
import loginApi from "../apis/loginApi";
import { LoginApiProps } from "../types/login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AxiosError } from "axios";

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (requestBody: LoginApiProps) => loginApi(requestBody),
    onSuccess: (res) => {
      console.log(res);
      // TODO - 성공시 애니메이션 추가
      // toast.success("로그인 성공");
      navigate("/");
    },
    onError: (error: AxiosError) => {
      console.log(error);
      if (error.response.status === 400) {
        toast.error("존재하지 않는 아이디입니다.");
        return;
      }
      toast.error("로그인 실패");
    }
  });
};

export default useLogin;
