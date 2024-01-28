import * as S from "./styles";
import { IoChevronBackSharp, IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { ReactNode } from "react";

interface UpperNavProp
  extends Pick<React.HTMLAttributes<HTMLButtonElement>, "className" | "title"> {
  hasBorder?: boolean;
  type: "back" | "close" | "backClose" | "none";
  rightElement?: ReactNode;
  setIsVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  shape?: "fill" | "";
  color?: string;
  customBack?: () => void;
  isCustom?: boolean;
}

const UpperNavBar = ({
  hasBorder = true,
  title,
  type = "back",
  rightElement = null,
  shape = "fill",
  customBack,
  setIsVisible,
  isCustom,
  ...props
}: UpperNavProp) => {
  const navigate = useNavigate();

  let icon;
  switch (type) {
    case "back":
      icon = <IoChevronBackSharp size="25px" />;
      break;
    case "close":
    case "backClose":
      icon = <IoCloseSharp size="25px" />;
      break;
    case "none":
      icon = null;
      break;
    default:
      break;
  }

  const handleClick = () => {
    if (isCustom) {
      customBack && customBack();
      return;
    }
    switch (type) {
      case "back":
      case "backClose":
        navigate(-1);
        customBack && customBack();
        break;
      case "close":
        setIsVisible && setIsVisible(false);
        break;
      default:
        break;
    }
  };

  return (
    <S.UpperNavWrapper className={hasBorder ? `hasBorder ${shape}` : `${shape}`} {...props}>
      <S.LeftIconWrapper onClick={handleClick}>{icon}</S.LeftIconWrapper>
      <S.TextWrapper {...props}>{title}</S.TextWrapper>
      {rightElement && <S.RightIconWrapper>{rightElement}</S.RightIconWrapper>}
    </S.UpperNavWrapper>
  );
};

export default UpperNavBar;
