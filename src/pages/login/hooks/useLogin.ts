import { useMutation } from "@tanstack/react-query";
import loginApi from "../apis/loginApi";
import { LoginApiProps } from "../types/login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (requestBody: LoginApiProps) => loginApi(requestBody),
    onSuccess: (res) => {
      localStorage.setItem("member", JSON.stringify(res.data.data.member));
      // TODO - 성공시 애니메이션 추가
      // toast.success("로그인 성공");
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("로그인 실패");
    }
  });
};

export default useLogin;
