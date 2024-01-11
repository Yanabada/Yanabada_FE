import * as S from "./styles";
import { IoIosSearch } from "react-icons/io";

interface FloatingButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  children: React.ReactNode;
  type: "abled" | "disabled";
  width?: string;
}

const FloatingButton = ({ type, children, ...props }: FloatingButtonProps) => {
  switch (type) {
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
