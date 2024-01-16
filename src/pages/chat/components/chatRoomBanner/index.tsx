import BaseButton from "@components/buttons/BaseButton";
import * as S from "./styles";
import TimerIcon from "@assets/icons/timerIcon.svg?react";
import Badges from "@components/badges";

interface ChatRoomBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  type: "sale" | "approval" | "completed" | "canceled";
}
const ChatRoomBanner = ({ title, type }: ChatRoomBannerProps) => {
  const typeMapping = {
    sale: "판매중",
    approval: "승인요청",
    completed: "판매완료",
    canceled: "취소"
  };

  return (
    <S.Container>
      <S.TextContainer>
        <S.BottomContainer>
          <S.TitleText>{title} </S.TitleText>
          <Badges badgeType={type}>{typeMapping[type]}</Badges>
        </S.BottomContainer>
        <S.RoomText>Forest Tower Deluxe King</S.RoomText>
        <S.BottomContainer>
          <S.PriceContainer>
            <S.DiscountText>50%</S.DiscountText>
            <S.PriceText>600,000원</S.PriceText>
            <S.OriginalPriceText>1,200,000원</S.OriginalPriceText>
          </S.PriceContainer>
          <S.TimeContainer>
            <TimerIcon />
            3일 15시간 23분
          </S.TimeContainer>
        </S.BottomContainer>
      </S.TextContainer>
      <BaseButton buttonType="icon" width="100%" style={{ borderRadius: "0px" }}>
        가격 변경
      </BaseButton>
    </S.Container>
  );
};

export default ChatRoomBanner;
