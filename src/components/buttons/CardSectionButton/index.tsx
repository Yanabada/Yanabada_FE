import * as S from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
import { useNavigate } from "react-router-dom";
import useBalance from "@pages/myPage/hooks/useBalance";
import formatNumberWithCommas from "@pages/myPage/utils/formatNumberWithCommas";
import { useState } from "react";
import Modal from "@components/modal";
import WithDrawIcon from "@assets/icons/withdrawIcon.svg?react";
import ApprovalIcon from "@assets/icons/approvalIcon.svg?react";

interface CardSectionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType:
    | "abledPay"
    | "abledPay_notRegistered"
    | "disabledPay"
    | "abledPoint"
    | "disabledPoint"
    | "management";
  width?: string;
  onClick?: React.MouseEventHandler<any>;
}

const CardSectionButton = ({ buttonType, width, onClick }: CardSectionProps) => {
  const navigate = useNavigate();

  const { data: balanceData, error: balanceError } = useBalance();

  if (balanceError) {
    console.log(balanceError);
  }

  const [isFirstModalVisible, setIsFirstModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const firstModalProps = {
    title: "야놀자 페이 가입 후 이용 가능합니다",
    content:
      "야놀자 페이에 가입하시면 수수료 없이 야나바다 매물을 구매하실 수 있습니다. 지금 야놀자 페이에 가입하시겠어요?",
    leftBtnText: "가입하기",
    rightBtnText: "아니오",
    isVisible: isFirstModalVisible,
    setIsVisible: setIsFirstModalVisible,
    leftAction: () => navigate("/charge/intro"),
    rightAction: () => setIsFirstModalVisible(false)
  };

  const secondModalProps = {
    title: `판매대금 수령을 위해서는\n야놀자페이 가입이\n필요합니다.`,
    content: "정산된 판매대금은 야놀자 페이 가입을 통해 연동된 계좌로 수령하실 수 있습니다.",
    leftBtnText: "가입하기",
    rightBtnText: "아니오",
    isVisible: isSecondModalVisible,
    setIsVisible: setIsSecondModalVisible,
    leftAction: () => navigate("/charge/intro"),
    rightAction: () => setIsSecondModalVisible(false)
  };

  switch (buttonType) {
    case "abledPay":
      return (
        <S.CardSectionWrapper buttonType={buttonType} width={width}>
          <S.ListButtonWrapper>
            <S.ListButton onClick={() => navigate("/charge/lists")}>
              <S.ListButtonTextWrapper>
                <YanoljaIcon />
                <S.ListButtonText>야놀자 페이</S.ListButtonText>
              </S.ListButtonTextWrapper>
              <S.RightSectionWrapper>
                <S.RightSectionText>
                  {formatNumberWithCommas(balanceData?.balance)}원
                </S.RightSectionText>
                <IoIosArrowForward size="18px" color="#616161" />
              </S.RightSectionWrapper>
            </S.ListButton>
          </S.ListButtonWrapper>
          <S.BottomSectionWrapper>
            <S.BottomLeftButton
              buttonType={buttonType}
              onClick={() => navigate("/charge?type=withdrawal")}
            >
              <WithDrawIcon />
              <S.BottomLeftButtonText buttonType={buttonType}>잔액인출</S.BottomLeftButtonText>
            </S.BottomLeftButton>
            <S.BottomRightButton
              buttonType={buttonType}
              onClick={() => navigate("/charge?type=charging")}
            >
              <IoIosSearch size="18px" color="#FFFFFF" />
              <S.BottomRightButtonText>충전</S.BottomRightButtonText>
            </S.BottomRightButton>
          </S.BottomSectionWrapper>
        </S.CardSectionWrapper>
      );
    case "abledPay_notRegistered":
      return (
        <>
          <S.CardSectionWrapper buttonType={buttonType} width={width}>
            <S.ListButtonWrapper>
              <S.ListButton
                onClick={() => {
                  if (balanceData?.balance === 0) {
                    setIsFirstModalVisible(true);
                  } else {
                    setIsSecondModalVisible(true);
                  }
                }}
              >
                <S.ListButtonTextWrapper>
                  <YanoljaIcon />
                  <S.ListButtonText>야놀자 페이</S.ListButtonText>
                </S.ListButtonTextWrapper>
                <S.RightSectionWrapper>
                  <S.RightSectionText>
                    {formatNumberWithCommas(balanceData?.balance)}원
                  </S.RightSectionText>
                  <IoIosArrowForward size="18px" color="#616161" />
                </S.RightSectionWrapper>
              </S.ListButton>
            </S.ListButtonWrapper>
            <S.BottomSectionWrapper>
              <S.BottomLeftButton buttonType={buttonType} onClick={() => navigate("/charge/intro")}>
                <S.BottomLeftButtonText buttonType={buttonType}>
                  야놀자 페이 가입
                </S.BottomLeftButtonText>
              </S.BottomLeftButton>
            </S.BottomSectionWrapper>
          </S.CardSectionWrapper>
          <Modal {...firstModalProps} />
          <Modal {...secondModalProps} />
        </>
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
                <S.ListButtonText>야놀자 포인트</S.ListButtonText>
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
                <ApprovalIcon />
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
