import * as S from "./styles";

interface ColoredButtonFormProps {
  children: React.ReactNode;
  isTextExist?: boolean;
  width?: string;
  isBottom?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}

const ColoredButtonForm = ({
  isTextExist = false,
  width,
  children,
  isBottom,
  onClick,
  isActive
}: ColoredButtonFormProps) => {
  return (
    <S.ColoredButtonWrapper width={width} className={isBottom ? "isBottom" : ""}>
      {isTextExist && (
        <>
          <S.NormalText>
            <S.ColoredText>이용규칙</S.ColoredText>에 동의하실 경우 상품 등록하기를 클릭해주세요
          </S.NormalText>
        </>
      )}
      <S.ColoredButton isActive={isActive} onClick={onClick}>
        {children}
      </S.ColoredButton>
    </S.ColoredButtonWrapper>
  );
};

export default ColoredButtonForm;
