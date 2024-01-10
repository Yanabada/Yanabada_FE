import * as S from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import YanoljaIcon from "@assets/icons/yanoljaIcon.svg?react";
interface CardSectionProps {
  // FIXME: `type` 이라고 naming시 에러 발생
  types: "abledPay" | "disabledPay" | "abledPoint" | "disabledPoint";
  width?: string;
}

const CardSectionButton = ({ types, width }: CardSectionProps) => {
  switch (types) {
    case "abledPay":
      return (
        <S.CardSectionWrapper types={types} width={width}>
          <S.ListButtonWrapper>
            <S.ListButton>
              <S.ListButtonTextWrapper>
                <YanoljaIcon />
                <S.ListButtonText>야놀자 페이</S.ListButtonText>
              </S.ListButtonTextWrapper>
              <S.RightSectionWrapper>
                {/* FIXME: 추후 잔액 변수로 설정할 예정 */}
                <S.RightSectionText>0원</S.RightSectionText>
                <IoIosArrowForward size="18px" color="#616161" />
              </S.RightSectionWrapper>
            </S.ListButton>
          </S.ListButtonWrapper>
          <S.BottomSectionWrapper>
            <S.BottomLeftButton types={types}>
              <IoIosSearch size="18px" color="#DE2E5F" />
              <S.BottomLeftButtonText types={types}>출금하기</S.BottomLeftButtonText>
            </S.BottomLeftButton>
            <S.BottomRightButton types={types}>
              <IoIosSearch size="18px" color="#FFFFFF" />
              <S.BottomRightButtonText>충전하기</S.BottomRightButtonText>
            </S.BottomRightButton>
          </S.BottomSectionWrapper>
        </S.CardSectionWrapper>
      );
    case "disabledPay":
      return (
        <S.CardSectionWrapper types={types} width={width}>
          <S.ListButtonWrapper>
            <S.ListButton>
              <S.ListButtonText>야놀자 페이</S.ListButtonText>

              <S.RightSectionWrapper>
                <S.RightSectionText>로그인 후 이용가능</S.RightSectionText>
                <IoIosArrowForward size="18px" color="#616161" />
              </S.RightSectionWrapper>
            </S.ListButton>
          </S.ListButtonWrapper>
          <S.BottomSectionWrapper>
            <S.BottomLeftButton types={types}>
              <IoIosSearch size="18px" color="#9C9C9C" />
              <S.BottomLeftButtonText types={types}>출금하기</S.BottomLeftButtonText>
            </S.BottomLeftButton>
            <S.BottomRightButton types={types}>
              <IoIosSearch size="18px" color="#FFFFFF" />
              <S.BottomRightButtonText>충전하기</S.BottomRightButtonText>
            </S.BottomRightButton>
          </S.BottomSectionWrapper>
        </S.CardSectionWrapper>
      );
    case "abledPoint":
      return (
        <S.CardSectionWrapper types={types} width={width}>
          <S.ListButtonWrapper>
            <S.ListButton>
              <S.ListButtonTextWrapper>
                <YanoljaIcon />
                <S.ListButtonText>야놀자 페이</S.ListButtonText>
              </S.ListButtonTextWrapper>
              <S.RightSectionWrapper>
                {/* FIXME: 추후 잔액 변수로 설정할 예정 */}
                <S.RightSectionText>0포인트</S.RightSectionText>
                <IoIosArrowForward size="18px" color="#616161" />
              </S.RightSectionWrapper>
            </S.ListButton>
          </S.ListButtonWrapper>
        </S.CardSectionWrapper>
      );
    case "disabledPoint":
      return (
        <S.CardSectionWrapper types={types} width={width}>
          <S.ListButtonWrapper>
            <S.ListButton>
              <S.ListButtonText>야놀자 포인트</S.ListButtonText>
              <S.RightSectionWrapper>
                <S.RightSectionText>로그인 후 이용가능</S.RightSectionText>
                <IoIosArrowForward size="18px" color="#616161" />
              </S.RightSectionWrapper>
            </S.ListButton>
          </S.ListButtonWrapper>
        </S.CardSectionWrapper>
      );
  }
};

export default CardSectionButton;
