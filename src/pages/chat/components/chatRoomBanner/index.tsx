import BaseButton from "@components/buttons/BaseButton";
import * as S from "./styles";
import TimerIcon from "@assets/icons/timerIcon.svg?react";
import Badges from "@components/badges";
// import BottomSheet from "@components/bottomSheet";
// import { useState } from "react";
// import PriceArea from "@components/priceArea";

interface ChatRoomBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  status: "ON_SALE" | "SOLD_OUT" | "BOOKING" | "CANCELED";
  roomName: string;
  salesPercentage: number;
  sellingPrice: number;
  price: number;
  saleEndDate: string;
  sellerId: number;
  purchasePrice: number;
  // TODO - api 확정 후 연결할 때 type 수정
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productData: any;
}
interface CommonContent {
  badgeText: string;
  bottomText?: React.ReactNode;
  type: "sale" | "approval" | "completed" | "canceled";
}

const ChatRoomBanner = ({
  title,
  status,
  roomName,
  salesPercentage,
  sellingPrice,
  price,
  saleEndDate,
  sellerId
  // purchasePrice,
  // productData
}: ChatRoomBannerProps) => {
  // const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const commonContent: Record<string, CommonContent> = {
    ON_SALE: {
      badgeText: "판매중",
      bottomText: (
        <>
          <S.PriceContainer>
            <S.DiscountText>{salesPercentage}%</S.DiscountText>
            <S.PriceText>{sellingPrice}원</S.PriceText>
            <S.OriginalPriceText>{price}원</S.OriginalPriceText>
          </S.PriceContainer>
          <S.TimeContainer>
            <TimerIcon />
            {saleEndDate}
          </S.TimeContainer>
        </>
      ),
      type: "sale"
    },
    SOLD_OUT: { badgeText: "판매완료", type: "completed" },
    BOOKING: { badgeText: "예약중", type: "approval" },
    CANCELED: { badgeText: "취소", type: "canceled" }
  };

  const sellerContent = new Map([
    ["ON_SALE", { ...commonContent.ON_SALE }],
    [
      "SOLD_OUT",
      {
        ...commonContent.SOLD_OUT,
        bottomText: <S.NotOnSaLeText>판매가 종료되었거나 취소된 상품입니다.</S.NotOnSaLeText>
      }
    ],
    [
      "BOOKING",
      {
        ...commonContent.BOOKING,
        bottomText: <S.NotOnSaLeText>상대방이 결제를 완료하여 승인 대기중입니다!</S.NotOnSaLeText>
      }
    ],
    [
      "CANCELED",
      {
        ...commonContent.CANCELED,
        bottomText: <S.NotOnSaLeText>판매가 완료된 상품입니다.</S.NotOnSaLeText>
      }
    ]
  ]);

  const buyerContent = new Map([
    ["ON_SALE", { ...commonContent.ON_SALE }],
    [
      "SOLD_OUT",
      {
        ...commonContent.SOLD_OUT,
        bottomText: <S.NotOnSaLeText>판매가 종료되어 구매할 수 없습니다.</S.NotOnSaLeText>
      }
    ],
    [
      "BOOKING",
      {
        ...commonContent.BOOKING,
        bottomText: <S.NotOnSaLeText>구매를 완료하여 구매 승인 대기중입니다.</S.NotOnSaLeText>
      }
    ],
    [
      "CANCELED",
      {
        ...commonContent.CANCELED,
        bottomText: <S.NotOnSaLeText>구매가 완료된 상품입니다. </S.NotOnSaLeText>
      }
    ]
  ]);

  return (
    <S.Container>
      <S.TextContainer>
        <S.BottomContainer>
          <S.TitleText>{title} </S.TitleText>
          <Badges badgeType={sellerContent.get(status)?.type}>
            {sellerContent.get(status)?.badgeText}
          </Badges>
        </S.BottomContainer>
        <S.RoomText>{roomName}</S.RoomText>
        <S.BottomContainer>
          {/* TODO - sellerID === 로그인id로 변경 */}
          {sellerId === sellerId
            ? sellerContent.get(status)?.bottomText
            : buyerContent.get(status)?.bottomText}
        </S.BottomContainer>
      </S.TextContainer>
      {status === "ON_SALE" && (
        <BaseButton
          buttonType="icon"
          onClick={() => {
            // setIsBottomSheetVisible(true);
          }}
          width="100%"
          style={{ borderRadius: "0px" }}
        >
          {/* TODO - sellerID === 로그인id로 변경 */}
          {sellerId === sellerId ? "가격 변경" : "결제하기"}
        </BaseButton>
      )}
      {/* TODO - price area 컴포넌트 수정되면 반영 */}
      {/* <BottomSheet isVisible={isBottomSheetVisible} setIsVisible={setIsBottomSheetVisible}>
        <PriceArea
          originalPrice={price}
          purchasePrice={purchasePrice}
          productData={productData}
        />
      </BottomSheet> */}
    </S.Container>
  );
};

export default ChatRoomBanner;
