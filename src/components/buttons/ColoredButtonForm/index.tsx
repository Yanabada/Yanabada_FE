import * as S from "./styles";

interface ColoredButtonFormProps {
  children: React.ReactNode;
  isTextExist?: boolean;
  width?: string;
}

const ColoredButtonForm = ({ isTextExist = false, width, children }: ColoredButtonFormProps) => {
  return (
    <S.ColoredButtonWrapper width={width}>
      {isTextExist && (
        <>
          <S.NormalText>
            <S.ColoredText>이용규칙</S.ColoredText>에 동의하실 경우 상품 등록하기를 클릭해주세요
          </S.NormalText>
        </>
      )}
      <S.ColoredButton>{children}</S.ColoredButton>
    </S.ColoredButtonWrapper>
  );
};

export default ColoredButtonForm;
