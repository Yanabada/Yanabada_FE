import * as S from "./styles/password";

import UpperNavBar from "@components/navBar/upperNavBar";

import LockIcon from "assets/icons/lockIcon.svg?react";

const PasswordConfirm = () => {
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["전체삭제", 0, "⌫"]
  ];

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
          <S.AlertMessage>
            비밀번호가 일치하지 않습니다.
            <br /> 다시 한 번 입력해주세요
          </S.AlertMessage>
        </S.KeyWrapper>
      </S.ConfirmWrapper>
      <S.KeyPadWrapper>
        {numbers.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((button, columnIndex) => (
              <S.KeyPad key={columnIndex}>{button}</S.KeyPad>
            ))}
          </div>
        ))}
      </S.KeyPadWrapper>
    </>
  );
};

export default PasswordConfirm;
