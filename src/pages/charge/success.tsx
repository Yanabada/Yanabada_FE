import * as S from "./styles/success";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import BaseButton from "@components/buttons/BaseButton";
import UpperNavBar from "@components/navBar/upperNavBar";
import LoadingAnimation from "@components/checkAnimation";
import ContactIcon from "@assets/icons/contactIcon.svg?react";
import CheckIcoLogo from "@assets/check-ico.png";

const ChargeSuccess = () => {
  const navigate = useNavigate();
  const nickname = Cookies.get("nickName");

  const goToHome = () => {
    navigate("/mypage");
  };

  return (
    <>
      <UpperNavBar title="비밀번호 등록" type="close" customBack={goToHome} isCustom={true} />
      <LoadingAnimation />
      <S.SuccessWrap>
        <S.SuccessBox>
          <img src={CheckIcoLogo} alt="체크아이콘" />
          <p className="tit">
            {nickname}님
            <br />
            야놀자 페이 가입을 완료했어요!
          </p>
          <p className="des">계좌 연결을 시작해볼까요?</p>
        </S.SuccessBox>
        <S.ButtonWrap>
          <BaseButton
            buttonType="default"
            width="100%"
            onClick={() => navigate("/charge?type=charging")}
          >
            <ContactIcon />
            페이 충전하기
          </BaseButton>
        </S.ButtonWrap>
      </S.SuccessWrap>
    </>
  );
};

export default ChargeSuccess;
