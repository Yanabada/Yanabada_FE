import * as S from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
import { useNavigate } from "react-router-dom";

interface CardSectionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "abledPay" | "disabledPay" | "abledPoint" | "disabledPoint" | "management";
  width?: string;
}

const CardSectionButton = ({ buttonType, width, onClick }: CardSectionProps) => {
  const navigate = useNavigate();

  switch (buttonType) {
    case "abledPay":
      return (
        <S.CardSectionWrapper buttonType={buttonType} width={width}>
          <S.ListButtonWrapper>
            <S.ListButton onClick={() => navigate("/charge/list")}>
              <S.ListButtonTextWrapper>
                <YanoljaIcon />
                <S.ListButtonText>야놀자 페이</S.ListButtonText>
              </S.ListButtonTextWrapper>
              <S.RightSectionWrapper>
                {/* FIXME: 추후 변수값으로 대체 예정 */}
                <S.RightSectionText>350,000원</S.RightSectionText>
                <IoIosArrowForward size="18px" color="#616161" />
              </S.RightSectionWrapper>
            </S.ListButton>
          </S.ListButtonWrapper>
          <S.BottomSectionWrapper>
            <S.BottomLeftButton buttonType={buttonType}>
              <IoIosSearch size="18px" color="#DE2E5F" />
              <S.BottomLeftButtonText buttonType={buttonType}>잔액인출</S.BottomLeftButtonText>
            </S.BottomLeftButton>
            <S.BottomRightButton buttonType={buttonType} onClick={() => navigate("/charge")}>
              <IoIosSearch size="18px" color="#FFFFFF" />
              <S.BottomRightButtonText>충전</S.BottomRightButtonText>
            </S.BottomRightButton>
          </S.BottomSectionWrapper>
        </S.CardSectionWrapper>
      );
    case "disabledPay":
      return (
        <S.CardSectionWrapper buttonType={buttonType} width={width} onClick={onClick}>
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
              <S.BottomLeftButtonText buttonType={buttonType}>
                야놀자 페이 가입
              </S.BottomLeftButtonText>
            </S.BottomLeftButton>
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
        <S.CardSectionWrapper buttonType={buttonType} width={width} onClick={onClick}>
          <S.ListButtonWrapper>
            <S.ListButton>
              <S.ListButtonTextWrapper>
                <YanoljaIcon />
                <S.ListButtonText>야놀자 포인트</S.ListButtonText>
              </S.ListButtonTextWrapper>
              <S.RightSectionWrapper>
                <S.RightSectionText>0 포인트</S.RightSectionText>
                <IoIosArrowForward size="18px" color="#616161" />
              </S.RightSectionWrapper>
            </S.ListButton>
          </S.ListButtonWrapper>
        </S.CardSectionWrapper>
      );
    case "management":
      return (
        <S.CardSectionWrapper buttonType={buttonType} width={width}>
          <S.ListButtonWrapper>
            <S.ListButton>
              <S.ListButtonTextWrapper>
                {/* FIXME: 아이콘 변경 필요 */}
                <YanoljaIcon />
                <S.ListButtonText>승인요청관리</S.ListButtonText>
              </S.ListButtonTextWrapper>
              <S.RightSectionWrapper>
                {/* FIXME: 추후 변수값으로 대체 예정 */}
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
