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
}

const ListCard = ({ width, cardType, imageURL }: ListCardProps) => {
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
        <Badges badgeType={badgeType}>승인요청</Badges>
        <S.TopRightWrapper>
          <S.TopRightText>파라스파라 서울 더 그레이트 현대...</S.TopRightText>
        </S.TopRightWrapper>
      </S.TopWrapper>
      <S.PaymentInfoWrapper>
        <S.BuyerInfo>물건구매자닉네임 | 야놀자페이 결제</S.BuyerInfo>
        <S.SaleDate>2024.01.06(토) 00:00</S.SaleDate>
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
                <S.TimerText cardType={cardType}>판매 종료</S.TimerText>
              </>
            )}
          </S.Timer>
          <S.AccomodationInfo>
            <S.RoomName>Forest Tower Deluxe King</S.RoomName>
            <S.PriceInfo>
              <S.DiscountRate>판매가</S.DiscountRate>
              <S.Price>800,000원</S.Price>
            </S.PriceInfo>
          </S.AccomodationInfo>
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
