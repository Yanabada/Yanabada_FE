import * as S from "./styles";
import { FaRegCalendarAlt } from "react-icons/fa";

interface DateChangeButtonProps {
  endDate: string;
  width?: string;
  disabled?: boolean | undefined;
  onClick?: () => void;
}

const DateChangeButton = ({ width, endDate, disabled, onClick }: DateChangeButtonProps) => {
  return (
    <S.DateChangeButton width={width} onClick={onClick}>
      <S.LeftSection>
        <FaRegCalendarAlt size="18px" />
        <S.Label disabled={disabled}>{endDate} (월)</S.Label>
        <S.DescriptionLabel disabled={disabled}>00시00분 종료</S.DescriptionLabel>
      </S.LeftSection>
      {!disabled && <S.RightButton>변경</S.RightButton>}
    </S.DateChangeButton>
  );
};

export default DateChangeButton;
