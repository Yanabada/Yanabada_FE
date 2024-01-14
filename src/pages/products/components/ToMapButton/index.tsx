import { createPortal } from "react-dom";
import * as S from "./styles";
import MapIcon from "@assets/icons/mapIcon.svg?react";

interface MapButtonProps {
  handleClick: () => void;
}

const GoToMapButton = ({ handleClick }: MapButtonProps) => {
  return createPortal(
    <S.Button onClick={handleClick}>
      <MapIcon />
      지도로 보기
    </S.Button>,
    document.body
  );
};

export default GoToMapButton;
