import * as S from "./styles";

interface ImageButtonProps {
  children: React.ReactNode;
  imageURL: string;
}

const ImageButton = ({ imageURL, children }: ImageButtonProps) => {
  return (
    <S.ImageButtonWrapper imageURL={imageURL}>
      <S.ImageButtonTextWrapper>
        <S.ImageButtonText>{children}</S.ImageButtonText>
      </S.ImageButtonTextWrapper>
    </S.ImageButtonWrapper>
  );
};

export default ImageButton;
