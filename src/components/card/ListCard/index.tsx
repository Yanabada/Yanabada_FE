import * as S from "./styles";
import Badges from "@components/badges";
// FIXME: SVG TimerIcon 색상 지정 문제때문에 react-icons로 대체
// import TimerIcon from "@assets/icons/timerIcon.svg?react";
import BaseButton from "@components/buttons/BaseButton";
import { MdOutlineTimer } from "react-icons/md";
import YanoljaIcon from "@assets/icons/YanoljaIcon.svg?react";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import Modal from "@components/modal";
import { useState } from "react";

interface ListCardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  imageURL?: string;
  cardType?:
    | "approval_sale" // 판매대기
    | "approval_wait" // 승인요청
    | "saleEnd" // 판매완료
    | "sale" // 판매중
    | "saleCanceled" // 판매취소
    | "purchased" // 승인완료
    | "purchasedCanceled"; // 승인취소(판매자 거절, 구매자 거절)
  accommodationName: string;
  buyerInfo?: string;
  saleDate?: string;
  timerText?: string;
  statusText?: string;
  roomName: string;
  price: string;
  badgeText: string;
}

const ListCard = ({
  width,
  imageURL,
  cardType,
  accommodationName,
  buyerInfo,
  saleDate,
  timerText,
  statusText,
  roomName,
  price,
  badgeText
}: ListCardProps) => {
  const getTimerIconColor = (cardType: ListCardProps["cardType"]) => {
    switch (cardType) {
      case "approval_sale":
      case "approval_wait":
        return "#FF7456";
      case "sale":
        return "#38A3EB";
    }
  };

  const getBadgeType = (cardType: ListCardProps["cardType"]) => {
    switch (cardType) {
      case "approval_sale":
      case "approval_wait":
        return "approval";
      case "saleEnd":
      case "purchased":
        return "completed";
      case "sale":
        return "sale";
      case "saleCanceled":
      case "purchasedCanceled":
        return "canceled";
      default:
        return "reserved";
    }
  };

  const badgeType = getBadgeType(cardType);

  const [isVisible, setIsVisible] = useState(false);

  const ModalProps = {
    title: "선택한 상품을 승인하시겠습니까?",
    content:
      "승인 즉시 숙소의 명의가 구매자에게로 이전되며 숙소에 대한 권리를 주장하실 수 없습니다.",
    leftBtnText: "판매 승인",
    rightBtnText: "취소",
    isVisible: isVisible,
    setIsVisible: setIsVisible,
    leftAction: () => setIsVisible(false),
    rightAction: () => {}
  };

  return (
    <S.ListCardContainer width={width}>
      <S.TopWrapper>
        <Badges badgeType={badgeType}>{badgeText}</Badges>
        <S.TopRightWrapper>
          <S.TopRightText>{accommodationName}</S.TopRightText>
        </S.TopRightWrapper>
      </S.TopWrapper>
      <S.PaymentInfoWrapper>
        <S.BuyerInfo>{buyerInfo}</S.BuyerInfo>
        <S.SaleDate>{saleDate}</S.SaleDate>
      </S.PaymentInfoWrapper>

      <S.AccomodationCard>
        <S.ImageWrapper imageURL={imageURL} />
        <S.TextArea>
          <S.Timer>
            {(cardType === "approval_sale" ||
              cardType === "approval_wait" ||
              cardType === "sale") && (
              <>
                <MdOutlineTimer style={{ fill: getTimerIconColor(cardType) }} />
                <S.TimerText cardType={cardType}>{timerText}</S.TimerText>
              </>
            )}
            {(cardType === "purchasedCanceled" ||
              cardType === "saleEnd" ||
              cardType === "saleCanceled" ||
              cardType === "purchased") && <S.StatusText>{statusText}</S.StatusText>}
          </S.Timer>
          <S.AccommodationInfo>
            <S.RoomName>{roomName}</S.RoomName>
            <S.PriceInfo>
              <S.DiscountRate>판매가</S.DiscountRate>
              <S.Price>{price}</S.Price>
            </S.PriceInfo>
          </S.AccommodationInfo>
        </S.TextArea>
      </S.AccomodationCard>
      <S.ButtonWrapper>
        {cardType === "approval_sale" && (
          <>
            <AuthenticationButton buttonType="disabled" width={width}>
              승인요청 페이지로 이동
            </AuthenticationButton>
          </>
        )}
        {cardType === "approval_wait" && (
          <>
            <BaseButton buttonType="gray" width="48%">
              승인 거절
            </BaseButton>
            <BaseButton buttonType="default" width="48%" onClick={() => setIsVisible(true)}>
              판매 승인
            </BaseButton>
            <Modal {...ModalProps} />
          </>
        )}
        {cardType === "sale" && (
          <>
            <BaseButton buttonType="gray" width="48%">
              게시글 삭제
            </BaseButton>
            <BaseButton buttonType="default" width="48%">
              게시글 수정
            </BaseButton>
          </>
        )}
        {(cardType === "purchasedCanceled" ||
          cardType === "saleEnd" ||
          cardType === "purchased") && (
          <>
            <BaseButton buttonType="gray" width={width}>
              거래내역서 확인
            </BaseButton>
          </>
        )}
        {cardType === "saleCanceled" && (
          <>
            <BaseButton buttonType="gray" width={width}>
              <YanoljaIcon />
              야놀자에서 예약내역 확인
            </BaseButton>
          </>
        )}
      </S.ButtonWrapper>
    </S.ListCardContainer>
  );
};

export default ListCard;
