import * as S from "./styles/password";

import UpperNavBar from "@components/navBar/upperNavBar";
import LockIcon from "assets/icons/lockIcon.svg?react";

const ChargeConfirm = () => {
  const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <>
      <UpperNavBar title="비밀번호 입력" type="back" />
      <S.ConfirmWrapper>
        <LockIcon />
        <S.ConfirmTit>간편결제 비밀번호 6자리를 입력해주세요</S.ConfirmTit>
        <S.KeyWrapper>
          <S.KeyInput className="active">*</S.KeyInput>
          <S.KeyInput>*</S.KeyInput>
          <S.KeyInput>*</S.KeyInput>
          <S.KeyInput>*</S.KeyInput>
          <S.KeyInput>*</S.KeyInput>
          <S.KeyInput>*</S.KeyInput>
        </S.KeyWrapper>
      </S.ConfirmWrapper>
      <S.KeyPadWrapper>
        {numbers.map((number) => (
          <S.KeyPad key={number}>{number}</S.KeyPad>
        ))}
      </S.KeyPadWrapper>
    </>
  );
};

export default ChargeConfirm;
