import { useMutation } from "@tanstack/react-query";
import loginApi from "../apis/loginApi";
import { LoginApiProps } from "../types/login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (requestBody: LoginApiProps) => loginApi(requestBody),
    onSuccess: (res) => {
      localStorage.setItem("member", JSON.stringify(res.data.data.member));
      const accessTokenCookie = res.data.data.tokenIssue.accessToken;
      const refreshTokenCookie = res.data.data.tokenIssue.refreshToken;

      Cookies.set("accessToken", accessTokenCookie);
      Cookies.set("refreshToken", refreshTokenCookie);
      // TODO - 성공시 애니메이션 추가
      // toast.success("로그인 성공");
      navigate("/");
    },
    onError: () => {
      toast.error("로그인 실패");
    }
  });
};

export default useLogin;
