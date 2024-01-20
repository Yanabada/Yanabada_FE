import Certification from "@components/certification";
import { useNavigate } from "react-router-dom";

const SignInFourth = () => {
  const navigate = useNavigate();
  return (
    <Certification
      width="100%"
      upperNavBarText="회원가입(4/4)"
      buttonText="회원가입 완료"
      handleClick={() => {
        navigate("/");
      }}
    />
  );
};

export default SignInFourth;
