import * as S from "./styles";
import { IoChevronBackSharp, IoCloseSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import NumberBadge from "@components/numberBadge";
import AlertCountStore from "@stores/AlertCountStore";
import { useNavigate } from "react-router";
import { ReactNode } from "react";

interface UpperNavProp {
  hasBorder?: boolean;
  text: string;
  type: "back" | "close" | "alert";
  rightElement?: ReactNode;
}

const UpperNavBar = ({
  hasBorder = true,
  text,
  type = "alert",
  rightElement = null
}: UpperNavProp) => {
  const { myPageCount, setMyPageCount } = AlertCountStore();
  const navigate = useNavigate();

  let icon;
  switch (type) {
    case "back":
      icon = <IoChevronBackSharp size="25px" />;
      break;
    case "close":
      icon = <IoCloseSharp size="25px" />;
      break;
    case "alert":
      icon = (
        <>
          <FaRegBell size="25px"></FaRegBell>
          {myPageCount > 0 && <NumberBadge number={myPageCount} />}
        </>
      );
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
      case "alert":
        // FIXME - alert 버튼 클릭 시 어디로 이동할지 추가
        setMyPageCount(0);
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
