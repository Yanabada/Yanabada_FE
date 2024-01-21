import CheckPassword from "@components/checkPassword";
import { useSearchParams } from "react-router-dom";

const SignInSecond = () => {
  const [searchParams] = useSearchParams();
  const fromParams = searchParams.get("from");
  const redirectParams = searchParams.get("redirect");

  if (fromParams === "changePassword") {
    return <CheckPassword title="비밀번호 변경" buttonText="확인" to={redirectParams!} />;
  }
  return <CheckPassword title="회원가입(2/4)" buttonText="다음" to="/signin/2" />;
};

export default SignInSecond;
