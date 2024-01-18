import * as S from "./styles/success";

import BaseButton from "@components/buttons/BaseButton";
import UpperNavBar from "@components/navBar/upperNavBar";
import LoadingAnimation from "@components/checkAnimation";
import ContactIcon from "@assets/icons/contactIcon.svg?react";

const ChargeSuccess = () => {
  return (
    <>
      <UpperNavBar title="비밀번호 등록" type="close" />
      <LoadingAnimation />
      <S.SuccessWrap>
        <S.SuccessBox>
          <img src="/src/assets/check-ico.png" alt="체크아이콘" />
          <p className="tit">
            [닉네임]님
            <br />
            야놀자 페이 가입을 완료했어요!
          </p>
          <p className="des">계좌 연결을 시작해볼까요?</p>
        </S.SuccessBox>
        <S.ButtonWrap>
          <BaseButton buttonType="default" width="100%">
            <ContactIcon />
            계좌 연결하기
          </BaseButton>
        </S.ButtonWrap>
      </S.SuccessWrap>
    </>
  );
};

export default ChargeSuccess;
