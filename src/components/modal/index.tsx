import React from "react";
import * as S from "./styles";
import BaseButton from "@components/buttons/BaseButton";
import ModalPortal from "./ModalPortal";
import { AnimatePresence } from "framer-motion";

interface modalProp extends Pick<React.HTMLAttributes<HTMLButtonElement>, "title" | "content"> {
  leftBtnText?: string;
  rightBtnText?: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  leftAction?: () => void;
  rightAction?: () => void;
  opposite?: boolean;
}

const Modal = ({
  title,
  content,
  leftBtnText,
  rightBtnText,
  isVisible,
  setIsVisible,
  leftAction,
  rightAction,
  opposite
}: modalProp) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <ModalPortal>
          <S.ModalBg
            onClick={() => {
              setIsVisible(false);
            }}
          />
          <S.ModalWrapper
            initial={{ y: "-70%", x: "-50%", opacity: 0 }}
            animate={{ y: "-50%", opacity: 1 }}
            exit={{ y: "0%", opacity: 0 }}
          >
            <S.TitleText>{title}</S.TitleText>
            <S.ContentText> {content}</S.ContentText>

            <S.ButtonsWrapper>
              {leftBtnText && (
                <BaseButton
                  buttonType={opposite ? "default" : "gray"}
                  width="100%"
                  onClick={leftAction}
                >
                  {leftBtnText}
                </BaseButton>
              )}
              {rightBtnText && (
                <BaseButton
                  buttonType={opposite ? "gray" : "default"}
                  width="100%"
                  onClick={rightAction}
                >
                  {rightBtnText}
                </BaseButton>
              )}
            </S.ButtonsWrapper>
          </S.ModalWrapper>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
