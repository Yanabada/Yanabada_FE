import React from "react";
import * as S from "./styles";
import BaseButton from "@components/buttons/BaseButton";

interface modalProp {
  title: string;
  content?: string;
  leftBtnText?: string;
  rightBtnText?: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  leftAction?: () => void;
  rightAction?: () => void;
}

const Modal = ({
  title,
  content,
  leftBtnText,
  rightBtnText,
  isVisible,
  setIsVisible,
  leftAction,
  rightAction
}: modalProp) => {
  return (
    <>
      {isVisible && (
        <>
          <S.ModalBg
            onClick={() => {
              setIsVisible(false);
            }}
          />
          <S.ModalWrapper>
            <S.TitleText>{title}</S.TitleText>
            <S.ContentText> {content}</S.ContentText>

            <S.ButtonsWrapper>
              {leftBtnText && (
                <BaseButton type="default" width="100%" onClick={leftAction}>
                  {leftBtnText}
                </BaseButton>
              )}
              {rightBtnText && (
                <BaseButton type="gray" width="100%" onClick={rightAction}>
                  {rightBtnText}
                </BaseButton>
              )}
            </S.ButtonsWrapper>
          </S.ModalWrapper>
        </>
      )}
    </>
  );
};

export default Modal;
