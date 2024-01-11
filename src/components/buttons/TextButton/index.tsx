import * as S from "./styles";

interface TextButtonProps {
  children?: React.ReactNode;
}

const TextButton = ({ children }: TextButtonProps) => {
  return <S.TextButton>{children}</S.TextButton>;
};

export default TextButton;
