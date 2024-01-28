import * as S from "./styles";
import { IoIosSearch } from "react-icons/io";

interface FloatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: "abled" | "disabled";
  width?: string;
}

const FloatingButton = ({ buttonType, children, ...props }: FloatingButtonProps) => {
  switch (buttonType) {
    case "abled":
      return (
        <S.AbledFloatingButton {...props}>
          {children} <IoIosSearch size="18px" color="#ffffff" />
        </S.AbledFloatingButton>
      );
    case "disabled":
      return (
        <S.DisabledFloatingButton {...props}>
          {children} <IoIosSearch size="18px" color="#ffffff" />
        </S.DisabledFloatingButton>
      );
    default:
      return null;
  }
};

export default FloatingButton;
