import * as S from "./styles";
import { FaRegCalendarAlt } from "react-icons/fa";

interface DateChangeButtonProps {
  width?: string;
}

const DateChangeButton = ({ width }: DateChangeButtonProps) => {
  return (
    <S.DateChangeButton width={width}>
      <S.LeftSection>
        <FaRegCalendarAlt size="18px" />
        {/* FIXME: 나중에 date 변수로 받아와서 넣어주기 */}
        <S.Label>2023.12.25(월)</S.Label>
        <S.DescriptionLabel>(설명 레이블)</S.DescriptionLabel>
      </S.LeftSection>
      <S.RightButton>변경</S.RightButton>
    </S.DateChangeButton>
  );
};

export default DateChangeButton;
