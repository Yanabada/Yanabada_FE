import * as S from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

const CardSectionButton = () => {
  return (
    <S.CardSectionWrapper>
      <S.ListButtonWrapper>
        <S.ListButton>
          <S.ListButtonText>야놀자 페이</S.ListButtonText>
          <S.RightSectionWrapper>
            <S.RightSectionText>0원</S.RightSectionText>
            <IoIosArrowForward size="18px" color="#616161" />
          </S.RightSectionWrapper>
        </S.ListButton>
      </S.ListButtonWrapper>
      <S.BottomSectionWrapper>
        <S.BottomLeftButton>
          <IoIosSearch size="18px" color="#0751C3" />
          <S.BottomLeftButtonText>충전</S.BottomLeftButtonText>
        </S.BottomLeftButton>
        <S.BottomRightButton>
          <IoIosSearch size="18px" color="#FFFFFF" />
          <S.BottomRightButtonText>계좌송금</S.BottomRightButtonText>
        </S.BottomRightButton>
      </S.BottomSectionWrapper>
    </S.CardSectionWrapper>
  );
};

export default CardSectionButton;
