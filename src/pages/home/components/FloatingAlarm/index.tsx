import * as S from "./style";
import Lottie from "lottie-react";
import approveLottie from "@assets/lotties/approve.json";
import { Link } from "react-router-dom";

const FloatingAlarm = () => {
  return (
    <Link to="/mypage/management">
      <S.Container>
        <S.LottieContainer>
          <Lottie animationData={approveLottie} />
        </S.LottieContainer>
        <S.TextContainer>
          <S.LinkContainer>
            <S.LinkText>판매승인하러 가기</S.LinkText>
            <S.ArrowIcon />
          </S.LinkContainer>
          <S.Text>등록하신 매물이 승인 대기중입니다.</S.Text>
        </S.TextContainer>
      </S.Container>
    </Link>
  );
};

export default FloatingAlarm;
