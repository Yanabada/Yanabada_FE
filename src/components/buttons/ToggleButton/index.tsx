import * as S from "./styles";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";

interface ToggleButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type: "icon" | "default";
}

const index = ({ type, children, ...props }: ToggleButtonProps) => {
  switch (type) {
    case "icon":
      return (
        <S.ToggleButton {...props}>
          <YanoljaIcon />
          <S.TextWrapper>
            <S.ToggleButtonText>{children}</S.ToggleButtonText>
            {/* FIXME: 나중에 할인 가격 받아와서 렌더링 예정 */}
            <S.ToggleButtonSubText>*40,000원 할인</S.ToggleButtonSubText>
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

export default index;
