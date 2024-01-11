import * as S from "./styles";
import ExitIcon from "@assets/icons/exitIcon.svg?react";

const ExitButton = () => {
  return (
    <S.ExitButtonWrapper>
      <S.DetailText>거래가 완료된 대화방은 대화가 불가능합니다.</S.DetailText>
      <S.ExitButton>
        <ExitIcon />
        <S.ExitButtonText>채팅방 나가기</S.ExitButtonText>
      </S.ExitButton>
    </S.ExitButtonWrapper>
  );
};

export default ExitButton;
