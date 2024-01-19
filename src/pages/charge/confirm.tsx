import * as S from "./styles/confirm";
import * as CS from "./styles/password";

import BaseButton from "@components/buttons/BaseButton";
import UpperNavBar from "@components/navBar/upperNavBar";

const ChargeConfirm = () => {
  return (
    <>
      <UpperNavBar title="충전완료" type="close" />
      <CS.ConfirmWrapper>
        <img src="/src/assets/check-ico.png" alt="체크아이콘" />
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
            <p className="name">
              <span className="text-black">충전 후 잔액</span>
            </p>
            <p className="price">
              <span className="text-red">10,000원</span>
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

export default ChargeConfirm;
