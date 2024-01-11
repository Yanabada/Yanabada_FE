import * as S from "./styles";

interface ImageButtonProps {
  children: React.ReactNode;
  imageURL: string;
  width?: string;
}

const ImageButton = ({ imageURL, width, children }: ImageButtonProps) => {
  return (
    <S.ImageButtonWrapper imageURL={imageURL} width={width}>
      <S.ImageButtonTextWrapper width={width}>
        <S.ImageButtonText>{children}</S.ImageButtonText>
      </S.ImageButtonTextWrapper>
    </S.ImageButtonWrapper>
  );
};

export default ImageButton;
