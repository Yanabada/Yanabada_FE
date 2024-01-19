import { createPortal } from "react-dom";
import * as S from "./styles";
import MapIcon from "@assets/icons/mapIcon.svg?react";

interface MapButtonProps {
  handleClick: () => void;
}

const variants = {
  initial: {
    opacity: 0,
    x: "-50%",
    y: "20px"
  },
  animate: {
    opacity: 1,
    y: 0
  }
};

const GoToMapButton = ({ handleClick }: MapButtonProps) => {
  return createPortal(
    <S.Button variants={variants} initial="initial" animate="animate" onClick={handleClick}>
      <MapIcon />
      지도로 보기
    </S.Button>,
    document.body
  );
};

export default GoToMapButton;
