import * as S from "./styles";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
import TossIcon from "@assets/icons/tossIcon.svg?react";

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: "yanolja" | "toss" | "default";
  width?: string;
  subText?: string;
}

const ToggleButton = ({ buttonType, subText, children, ...props }: ToggleButtonProps) => {
  switch (buttonType) {
    case "yanolja":
      return (
        <S.ToggleButton {...props}>
          <YanoljaIcon />
          <S.TextWrapper>
            <S.ToggleButtonText>{children}</S.ToggleButtonText>
            {subText && <S.ToggleButtonSubText>{subText}</S.ToggleButtonSubText>}
          </S.TextWrapper>
        </S.ToggleButton>
      );
    case "toss":
      return (
        <S.ToggleButton {...props}>
          <TossIcon />
          <S.TextWrapper>
            <S.ToggleButtonText>{children}</S.ToggleButtonText>
            {subText && <S.ToggleButtonSubText>{subText}</S.ToggleButtonSubText>}
          </S.TextWrapper>
        </S.ToggleButton>
      );
    case "default":
      return (
        <S.ToggleButton {...props}>
          <S.TextWrapper>
            <S.ToggleButtonText>{children}</S.ToggleButtonText>
          </S.TextWrapper>
        </S.ToggleButton>
      );
  }
};

export default ToggleButton;
