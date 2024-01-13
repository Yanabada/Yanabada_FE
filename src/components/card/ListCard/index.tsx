import * as S from "./styles";
import Badges from "@components/badges";
import TimerIcon from "@assets/icons/timerIcon.svg?react";
import BaseButton from "@components/buttons/BaseButton";

interface ListCardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  imageURL?: string;
}

const ListCard = ({ width, imageURL }: ListCardProps) => {
  return (
    <S.ListCardContainer width={width}>
      <S.TopWrapper>
        <Badges badgeType="approval">승인요청</Badges>
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
            <TimerIcon />
            <S.AccomodationName>판매 종료</S.AccomodationName>
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
        <BaseButton buttonType="gray" width="48%">
          승인 거절
        </BaseButton>
        <BaseButton buttonType="default" width="48%">
          판매 승인
        </BaseButton>
      </S.ButtonWrapper>
    </S.ListCardContainer>
  );
};

export default ListCard;
