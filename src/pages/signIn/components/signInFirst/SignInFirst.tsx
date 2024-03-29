import CheckEmail from "@components/checkEmail";
import { useSearchParams } from "react-router-dom";

const SignInFirst = () => {
  const [searchParams] = useSearchParams();
  const fromParams = searchParams.get("from");
  const redirectParams = searchParams.get("redirect");

  if (fromParams === "changePassword") {
    return (
      <CheckEmail
        type="backClose"
        title="비밀번호 재설정"
        to={`/signin/1?from=changePassword&redirect=${redirectParams}`}
        noticeTitle="회원가입 시 등록한 이메일을 입력해 주세요."
      />
    );
  }
  return <CheckEmail type="back" title="회원가입(1/4)" to="/signin/1" />;
};

export default SignInFirst;
