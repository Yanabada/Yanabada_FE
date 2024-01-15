import * as S from "./styles";
import Badges from "@components/badges";
// FIXME: SVG TimerIcon 색상 지정 문제때문에 react-icons로 대체
// import TimerIcon from "@assets/icons/timerIcon.svg?react";
import BaseButton from "@components/buttons/BaseButton";
import { MdOutlineTimer } from "react-icons/md";
import YanoljaIcon from "@assets/icons/YanoljaIcon.svg?react";

interface ListCardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  imageURL?: string;
  cardType?:
    | "approval_saleEnd"
    | "approval_sale"
    | "approval_wait"
    | "saleEnd"
    | "sale"
    | "saleCanceled"
    | "purchased"
    | "purchasedCanceled";
  accommodationName: string;
  buyerInfo?: string;
  saleDate?: string;
  timerText?: string;
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
  roomName,
  price,
  badgeText
}: ListCardProps) => {
  const getTimerIconColor = (cardType: ListCardProps["cardType"]) => {
    switch (cardType) {
      case "approval_saleEnd":
        return "#9C9C9C";
      case "approval_sale":
      case "sale":
        return "#38A3EB";
    }
  };

  const getBadgeType = (cardType: ListCardProps["cardType"]) => {
    switch (cardType) {
      case "approval_saleEnd":
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
            {(cardType === "approval_saleEnd" ||
              cardType === "approval_sale" ||
              cardType === "sale") && (
              <>
                <MdOutlineTimer style={{ fill: getTimerIconColor(cardType) }} />
                <S.TimerText cardType={cardType}>{timerText}</S.TimerText>
              </>
            )}
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
        {(cardType === "approval_saleEnd" || cardType === "approval_sale") && (
          <>
            <BaseButton buttonType="gray" width="48%">
              승인 거절
            </BaseButton>
            <BaseButton buttonType="default" width="48%">
              판매 승인
            </BaseButton>
          </>
        )}
        {(cardType === "saleEnd" || cardType === "purchasedCanceled") && (
          <>
            <BaseButton buttonType="gray" width="100%">
              거래내역서 확인
            </BaseButton>
          </>
        )}
        {cardType === "sale" && (
          <>
            <BaseButton buttonType="gray" width="48%">
              판매 취소
            </BaseButton>
            <BaseButton buttonType="default" width="48%">
              게시글 수정
            </BaseButton>
          </>
        )}
        {cardType === "saleCanceled" && (
          <>
            <BaseButton buttonType="gray" width="100%">
              <YanoljaIcon />
              예약내역 확인
            </BaseButton>
          </>
        )}
        {cardType === "approval_wait" && (
          <>
            <BaseButton buttonType="gray" width="100%">
              <YanoljaIcon />
              구매취소
            </BaseButton>
          </>
        )}
        {cardType === "purchased" && (
          <>
            <BaseButton buttonType="gray" width="48%">
              거래내역서 확인
            </BaseButton>
            <BaseButton buttonType="gray" width="48%">
              <YanoljaIcon />
              예약내역 확인
            </BaseButton>
          </>
        )}
      </S.ButtonWrapper>
    </S.ListCardContainer>
  );
};

export default ListCard;
