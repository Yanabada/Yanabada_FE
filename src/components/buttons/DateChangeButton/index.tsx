import dateFormat from "@utils/dateFormat";
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
  const isValidDate = endDate && !isNaN(new Date(endDate).getDate());

  return (
    <S.DateChangeButton width={width} onClick={onClick}>
      <S.LeftSection>
        <FaRegCalendarAlt size="18px" />
        {endDate != null && isValidDate ? (
          <>
            <S.Label disabled={disabled}>
              {dateFormat(endDate)}({week})
            </S.Label>
            <S.DescriptionLabel disabled={disabled}>23시 59분 종료</S.DescriptionLabel>
          </>
        ) : (
          <S.Label disabled={disabled}>날짜 선택</S.Label>
        )}
      </S.LeftSection>
      {!disabled && <S.RightButton>변경</S.RightButton>}
    </S.DateChangeButton>
  );
};

export default DateChangeButton;
