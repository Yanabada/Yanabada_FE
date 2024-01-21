import * as S from "./styles";
import { FaRegCalendarAlt } from "react-icons/fa";

interface DateChangeButtonProps {
  endDate?: string | undefined;
  week?: string | undefined;
  width?: string;
  disabled?: boolean | undefined;
  onClick?: () => void;
}

const DateChangeButton = ({ width, endDate, week, disabled, onClick }: DateChangeButtonProps) => {
  console.log(typeof endDate);

  return (
    <S.DateChangeButton width={width} onClick={onClick}>
      <S.LeftSection>
        <FaRegCalendarAlt size="18px" />
        <S.Label disabled={disabled}>
          {endDate} ({week})
        </S.Label>
        <S.DescriptionLabel disabled={disabled}>23시 59분 종료</S.DescriptionLabel>
      </S.LeftSection>
      {!disabled && <S.RightButton>변경</S.RightButton>}
    </S.DateChangeButton>
  );
};

export default DateChangeButton;
