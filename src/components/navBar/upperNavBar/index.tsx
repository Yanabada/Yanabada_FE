import * as S from "./styles";
import { IoChevronBackSharp, IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { ReactNode } from "react";

interface UpperNavProp
  extends Pick<React.HTMLAttributes<HTMLButtonElement>, "className" | "title"> {
  hasBorder?: boolean;
  type: "back" | "close";
  rightElement?: ReactNode;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  shape?: "fill" | "";
  color?: string;
}

const UpperNavBar = ({
  hasBorder = true,
  title,
  type = "back",
  rightElement = null,
  setIsVisible,
  shape = "",
  ...props
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
        setIsVisible && setIsVisible(false);
        break;
      default:
        break;
    }
  };

  return (
    <S.UpperNavWrapper className={hasBorder ? `${hasBorder} ${shape}` : `${shape}`} {...props}>
      <S.LeftIconWrapper onClick={handleClick}>{icon}</S.LeftIconWrapper>
      <S.TextWrapper {...props}>{title}</S.TextWrapper>
      {rightElement && <S.RightIconWrapper>{rightElement}</S.RightIconWrapper>}
    </S.UpperNavWrapper>
  );
};

export default UpperNavBar;
