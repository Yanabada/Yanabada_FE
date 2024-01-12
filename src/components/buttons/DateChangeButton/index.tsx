import * as S from "./styles";
import { FaRegCalendarAlt } from "react-icons/fa";

interface DateChangeButtonProps {
  endDate: string;
  width?: string;
  onClick?: () => void;
}

const DateChangeButton = ({ width, endDate, onClick }: DateChangeButtonProps) => {
  return (
    <S.DateChangeButton width={width} onClick={onClick}>
      <S.LeftSection>
        <FaRegCalendarAlt size="18px" />
        <S.Label>{endDate} (월)</S.Label>
        <S.DescriptionLabel>00시00분 종료</S.DescriptionLabel>
      </S.LeftSection>
      <S.RightButton>변경</S.RightButton>
    </S.DateChangeButton>
  );
};

export default DateChangeButton;
