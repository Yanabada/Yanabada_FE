import BaseButton from "@components/buttons/BaseButton";
import * as S from "./styles";
import TimerIcon from "@assets/icons/timerIcon.svg?react";
import Badges from "@components/badges";
import BottomSheet from "@components/bottomSheet";
import { useState } from "react";
import PriceArea from "@components/priceArea";
import PriceTable from "@components/priceTable";
import UpperNavBar from "@components/navBar/upperNavBar";
import formatNumberWithCommas from "@pages/myPage/utils/formatNumberWithCommas";
import Cookies from "js-cookie";

interface ChatRoomBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  status: "ON_SALE" | "SOLD_OUT" | "BOOKING" | "CANCELED";
  roomName: string;
  salesPercentage: number;
  sellingPrice: number;
  originalPrice: number;
  saleEndDate: string;
  sellerId: number;
  purchasePrice: number;
  code: string;
  image: string;
  accommodationName: string;
  checkInDate: string;
  checkOutDate: string;
  policyNumber: string;
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
  originalPrice,
  saleEndDate,
  sellerId,
  purchasePrice,
  code,
  image,
  accommodationName,
  checkInDate,
  checkOutDate,
  policyNumber
}: ChatRoomBannerProps) => {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [price, setPrice] = useState(0);
  const myId = Number(Cookies.get("id"));

  const commonContent: Record<string, CommonContent> = {
    ON_SALE: {
      badgeText: "판매중",
      bottomText: (
        <>
          <S.PriceContainer>
            <S.DiscountText>{salesPercentage}%</S.DiscountText>
            <S.PriceText>{formatNumberWithCommas(sellingPrice)}원</S.PriceText>
            <S.OriginalPriceText>{price ? formatNumberWithCommas(price) : 0}원</S.OriginalPriceText>
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
    CANCELED: { badgeText: "취소", type: "canceled" },
    TIMEOUT: { badgeText: "취소", type: "canceled" }
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
    ],
    [
      "TIMEOUT",
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
    ],
    [
      "TIMEOUT",
      {
        ...commonContent.CANCELED,
        bottomText: <S.NotOnSaLeText>구매가 완료된 상품입니다. </S.NotOnSaLeText>
      }
    ]
  ]);

  const handleSubmit = () => {
    // TODO - 가격 변경 API 연동
    setIsBottomSheetVisible(false);
  };

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
          {sellerId === myId
            ? sellerContent.get(status)?.bottomText
            : buyerContent.get(status)?.bottomText}
        </S.BottomContainer>
      </S.TextContainer>
      {status === "ON_SALE" && (
        <BaseButton
          buttonType="icon"
          onClick={() => {
            setIsBottomSheetVisible(true);
          }}
          width="100%"
          style={{ borderRadius: "0px" }}
        >
          {sellerId === myId ? "가격 변경" : "결제하기"}
        </BaseButton>
      )}
      <BottomSheet isVisible={isBottomSheetVisible} setIsVisible={setIsBottomSheetVisible}>
        <UpperNavBar
          title="가격 변경하기"
          type="close"
          setIsVisible={setIsBottomSheetVisible}
          shape=""
        />
        <S.PriceInfoBox>
          <PriceTable
            originalPrice={originalPrice}
            purchasePrice={purchasePrice}
            policyNumber={policyNumber}
            code={code}
            image={image}
            accommodationName={accommodationName}
            roomName={roomName}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
          />
          <PriceArea
            title="판매 가격"
            placeholder="￦ 판매 가격을 입력해주세요"
            originalPrice={originalPrice}
            purchasePrice={purchasePrice}
            policyNumber={policyNumber}
            resetPrice={purchasePrice}
            checkInDate={checkInDate}
            isAlert
            charge={false}
            price={price}
            setPrice={setPrice}
          />
          <BaseButton buttonType="default" onClick={handleSubmit}>
            확인
          </BaseButton>
        </S.PriceInfoBox>
      </BottomSheet>
    </S.Container>
  );
};

export default ChatRoomBanner;
