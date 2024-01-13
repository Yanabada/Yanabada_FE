import UpperNavBar from "@components/navBar/upperNavBar";
import YanabanaIcon from "@assets/icons/logo_yanabada_gradient.svg?react";
import YanoljaIcon from "@assets/icons/logo_yanolja_gray.svg?react";
import { GrClose } from "react-icons/gr";
import { IoChevronForwardSharp } from "react-icons/io5";
import BaseButton from "@components/buttons/BaseButton";
import * as S from "./styles/login.styles";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  return (
    <S.LoginContainer>
      <UpperNavBar title="로그인" type="back" shape="fill" />
      <S.LogoWrapper>
        <YanabanaIcon />
        <GrClose style={{ color: "#E6E6E6" }} />
        <YanoljaIcon />
      </S.LogoWrapper>
      야나바다는 야놀자 계정으로 이용하실 수 있습니다.
      <S.BtnWrapper>
        <BaseButton type="kakao">카카오로 시작하기</BaseButton>
        <BaseButton type="naver" style={{ color: "#fff" }}>
          네이버로 시작하기
        </BaseButton>
      </S.BtnWrapper>
      <S.BtnFlex onClick={() => navigate("/login/email")}>
        이메일로 시작하기
        <IoChevronForwardSharp style={{ color: "#616161" }} />
      </S.BtnFlex>
    </S.LoginContainer>
  );
};

export default Login;
