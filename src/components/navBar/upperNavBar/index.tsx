import * as S from "./styles";
import { IoChevronBackSharp, IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { ReactNode } from "react";

interface UpperNavProp {
  hasBorder?: boolean;
  text: string;
  type: "back" | "close";
  rightElement?: ReactNode;
}

const UpperNavBar = ({
  hasBorder = true,
  text,
  type = "back",
  rightElement = null
}: UpperNavProp) => {
  const navigate = useNavigate();

  let icon;
  switch (type) {
    case "back":
      icon = <IoChevronBackSharp size="25px" />;
      break;
    case "close":
      icon = <IoCloseSharp size="25px" />;
      break;
    default:
      break;
  }

  const handleClick = () => {
    switch (type) {
      case "back":
        navigate(-1);
        break;
      case "close":
        // FIXME - 닫기 동작 넣기
        break;
      default:
        break;
    }
  };

  return (
    <S.UpperNavWrapper className={hasBorder ? "hasBorder" : ""}>
      <S.LeftIconWrapper onClick={handleClick}>{icon}</S.LeftIconWrapper>
      <S.TextWrapper>{text}</S.TextWrapper>
      <S.RightIconWrapper>{rightElement}</S.RightIconWrapper>
    </S.UpperNavWrapper>
  );
};

export default UpperNavBar;
