import * as S from "./styles";
import { FaRegCalendarAlt } from "react-icons/fa";

const DateChangeButton = () => {
  return (
    <S.DateChangeButton>
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
