import * as S from "./styles";
import { IoIosSearch } from "react-icons/io";

interface FloatingButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  children: React.ReactNode;
  type: "abled" | "disabled";
}

const FloatingButton = ({ type, children }: FloatingButtonProps) => {
  switch (type) {
    case "abled":
      return (
        <S.AbledFloatingButton>
          {children} <IoIosSearch size="18px" color="#ffffff" />
        </S.AbledFloatingButton>
      );
    case "disabled":
      return (
        <S.DisabledFloatingButton>
          {children} <IoIosSearch size="18px" color="#ffffff" />
        </S.DisabledFloatingButton>
      );
  }
};

export default FloatingButton;
