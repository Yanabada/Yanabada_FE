import BaseButton from "@components/buttons/BaseButton";
import * as S from "./styles/confirm";
import * as CS from "./styles/password";

import UpperNavBar from "@components/navBar/upperNavBar";

const PasswordConfirm = () => {
  return (
    <>
      <UpperNavBar title="비밀번호 입력" type="back" />
      <CS.ConfirmWrapper>
        <p>로티 들어갈 자리</p>
        <CS.ConfirmTit>야놀자페이 충전이 완료되었습니다!</CS.ConfirmTit>
        <S.ChargeBox>
          <p className="tit">결제 정보</p>
          <div className="inner">
            <p className="name">충전 금액</p>
            <p className="price">10,000원</p>
          </div>
          <div className="inner">
            <p className="name">충전 계좌</p>
            <p className="bank">국민은행</p>
          </div>
          <p className="bank-number">000000-00-000000</p>
          <div className="stripe"></div>
          <div className="inner">
            <p className="name">충전 후 잔액</p>
            <p className="price">
              <span className="red-text">10,000원</span>
            </p>
          </div>
        </S.ChargeBox>
        <S.ButtonWrap>
          <BaseButton buttonType="default" width="100%">
            확인
          </BaseButton>
        </S.ButtonWrap>
      </CS.ConfirmWrapper>
    </>
  );
};

export default PasswordConfirm;
