import * as S from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
interface CardSectionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "abledPay" | "disabledPay" | "abledPoint" | "disabledPoint";
  width?: string;
}
const CardSectionButton = ({ buttonType, width }: CardSectionProps) => {
  switch (buttonType) {
    case "abledPay":
      return (
        <S.CardSectionWrapper buttonType={buttonType} width={width}>
          <S.ListButtonWrapper>
            <S.ListButton>
              <S.ListButtonTextWrapper>
                <YanoljaIcon />
                <S.ListButtonText>야놀자 페이</S.ListButtonText>
              </S.ListButtonTextWrapper>
              <S.RightSectionWrapper>
                {/* FIXME: 추후 변수값으로 대체 예정 */}
                <S.RightSectionText>0원</S.RightSectionText>
                <IoIosArrowForward size="18px" color="#616161" />
              </S.RightSectionWrapper>
            </S.ListButton>
          </S.ListButtonWrapper>
          <S.BottomSectionWrapper>
            <S.BottomLeftButton buttonType={buttonType}>
              <IoIosSearch size="18px" color="#DE2E5F" />
              <S.BottomLeftButtonText buttonType={buttonType}>출금하기</S.BottomLeftButtonText>
            </S.BottomLeftButton>
            <S.BottomRightButton buttonType={buttonType}>
              <IoIosSearch size="18px" color="#FFFFFF" />
              <S.BottomRightButtonText>충전하기</S.BottomRightButtonText>
            </S.BottomRightButton>
          </S.BottomSectionWrapper>
        </S.CardSectionWrapper>
      );
    case "disabledPay":
      return (
        <S.CardSectionWrapper buttonType={buttonType} width={width}>
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
            <S.BottomLeftButton buttonType={buttonType}>
              <IoIosSearch size="18px" color="#9C9C9C" />
              <S.BottomLeftButtonText buttonType={buttonType}>출금하기</S.BottomLeftButtonText>
            </S.BottomLeftButton>
            <S.BottomRightButton buttonType={buttonType}>
              <IoIosSearch size="18px" color="#FFFFFF" />
              <S.BottomRightButtonText>충전하기</S.BottomRightButtonText>
            </S.BottomRightButton>
          </S.BottomSectionWrapper>
        </S.CardSectionWrapper>
      );
    case "abledPoint":
      return (
        <S.CardSectionWrapper buttonType={buttonType} width={width}>
          <S.ListButtonWrapper>
            <S.ListButton>
              <S.ListButtonTextWrapper>
                <YanoljaIcon />
                <S.ListButtonText>야놀자 페이</S.ListButtonText>
              </S.ListButtonTextWrapper>
              <S.RightSectionWrapper>
                {/* FIXME: 추후 변수값으로 대체 예정 */}
                <S.RightSectionText>0포인트</S.RightSectionText>
                <IoIosArrowForward size="18px" color="#616161" />
              </S.RightSectionWrapper>
            </S.ListButton>
          </S.ListButtonWrapper>
        </S.CardSectionWrapper>
      );
    case "disabledPoint":
      return (
        <S.CardSectionWrapper buttonType={buttonType} width={width}>
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
    default:
      return null;
  }
};

export default CardSectionButton;
