import * as S from "./styles";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
import TossIcon from "@assets/icons/tossIcon.svg?react";

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: "yanolja" | "toss" | "default" | "default2";
  width?: string;
  subText?: string;
  toggleButtonActive?: number;
}

const ToggleButton = ({
  buttonType,
  subText,
  toggleButtonActive,
  children,
  ...props
}: ToggleButtonProps) => {
  switch (buttonType) {
    case "yanolja":
      return (
        <S.ToggleButton className={toggleButtonActive === 1 ? "active" : ""} {...props}>
          <YanoljaIcon />
          <S.TextWrapper>
            <S.ToggleButtonText>{children}</S.ToggleButtonText>
            {subText && <S.ToggleButtonSubText>{subText}</S.ToggleButtonSubText>}
          </S.TextWrapper>
        </S.ToggleButton>
      );
    case "toss":
      return (
        <S.ToggleButton className={toggleButtonActive === 2 ? "active" : ""} {...props}>
          <TossIcon />
          <S.TextWrapper>
            <S.ToggleButtonText>{children}</S.ToggleButtonText>
            {subText && <S.ToggleButtonSubText>{subText}</S.ToggleButtonSubText>}
          </S.TextWrapper>
        </S.ToggleButton>
      );
    case "default":
      return (
        <S.ToggleButton className={toggleButtonActive === 3 ? "active" : ""} {...props}>
          <S.TextWrapper>
            <S.ToggleButtonText>{children}</S.ToggleButtonText>
          </S.TextWrapper>
        </S.ToggleButton>
      );
    case "default2":
      return (
        <S.ToggleButton className={toggleButtonActive === 4 ? "active" : ""} {...props}>
          <S.TextWrapper>
            <S.ToggleButtonText>{children}</S.ToggleButtonText>
          </S.TextWrapper>
        </S.ToggleButton>
      );
  }
};

export default ToggleButton;
