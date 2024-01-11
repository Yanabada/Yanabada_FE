import * as S from "./styles";

interface ColoredButtonFormProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  isTextExist?: boolean;
}

const ColoredButtonForm = ({ isTextExist = false, children }: ColoredButtonFormProps) => {
  return (
    <S.ColoredButtonWrapper>
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
