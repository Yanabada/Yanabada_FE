import CheckNickname from "@components/checkNickname";
import { useSearchParams } from "react-router-dom";

const SignInThird = () => {
  const [searchParams] = useSearchParams();
  const providerParams = searchParams.get("provider");

  if (providerParams === "KAKAO") {
    return <CheckNickname title="회원가입(1/2)" to="/signin/3?provider=KAKAO" />;
  }

  return <CheckNickname title="회원가입(3/4)" to="/signin/3" />;
};

export default SignInThird;
