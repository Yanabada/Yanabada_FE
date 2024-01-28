import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/reservationComplete.style";
import PaperIcon from "@assets/icons/payment_confirm.svg?react";
import ProfileIconGray from "@assets/icons/profileIcon_gray.svg?react";
import Notice from "@components/notice";
import { Link } from "react-router-dom";
import formatDate from "@pages/purchase/utils/formatDate";
import { getDayOfWeek } from "@utils/getDayOfWeek";
import usePurchaseHistory2 from "@pages/myPage/hooks/usePurchaseHistory2";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import formatNumberWithCommas from "@pages/myPage/utils/formatNumberWithCommas";
import useBuyProduct from "@pages/purchase/hooks/useBuyProduct";
import { convertStringToKR } from "./utils/convertString";

interface TradeData {
  tradeId: number;
  productId: number;
  accommodationName: string;
  accommodationImage: string;
  sellerNickname: string;
  tradeRegisteredTime: string;
  saleEndDate: string;
  roomName: string;
  price: number;
  status: string;
}

const ReservationComplete = () => {
  const { mutate: buyProductMutate, isSuccess: buyProductSuccess } = useBuyProduct();

  const location = useLocation();

  const purchaseInfo = queryString.parse(location.search);

  const { productId, isMobile } = purchaseInfo;

  const { data, error, refetch, isSuccess } = usePurchaseHistory2();

  const [filteredTrades, setFilteredTrades] = useState<TradeData[]>([]);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log("isMobile", isMobile);

    if (isMobile === "true") {
      buyProductMutate({
        productId: Number(purchaseInfo?.productId),
        reservationPersonName: purchaseInfo?.reservationPersonName as string,
        reservationPersonPhoneNumber: purchaseInfo?.reservationPersonPhoneNumber as string,
        userPersonName: purchaseInfo?.userPersonName as string,
        userPersonPhoneNumber: purchaseInfo?.userPersonPhoneNumber as string,
        point: Number(purchaseInfo.point),
        paymentType: purchaseInfo.paymentType as string
      });
    } else {
      refetch();
    }
  }, []);

  useEffect(() => {
    if (buyProductSuccess) {
      refetch();
    }
  }, [buyProductSuccess]);

  useEffect(() => {
    if (isSuccess) {
      setFilteredTrades(
        data?.purchaseTrades?.filter((trade: TradeData) => trade?.productId === Number(productId))
      );
    }
  }, [isSuccess]);

  return (
    <S.Container>
      <UpperNavBar type="close" title="결제 완료" />
      <S.InfoWrapper>
        <PaperIcon />
        <h2>결제 후 판매 승인 대기중입니다.</h2>
        <p>판매자가 판매를 승인하여야 최종 예약 완료됩니다.</p>
      </S.InfoWrapper>

      <S.Title>상품 및 이용 정보</S.Title>
      <S.CardWrapper>
        <div className="above">
          <S.ImageWarpper>
            <img src={purchaseInfo?.image as string} alt="숙소 이미지" />
          </S.ImageWarpper>
          <div className="info">
            <p className="product">{purchaseInfo?.accommodationName}</p>
            <p className="room">{purchaseInfo?.roomName}</p>
            <p className="date">
              {formatDate(purchaseInfo?.checkInDate as string)} (
              {getDayOfWeek(purchaseInfo?.checkInDate as string)}) -
              {formatDate(purchaseInfo?.checkOutDate as string)} (
              {getDayOfWeek(purchaseInfo?.checkOutDate as string)})
            </p>
            <p className="check">
              체크인 {purchaseInfo?.checkInTime} | 체크아웃 {purchaseInfo?.checkOutTime}
            </p>
          </div>
        </div>
        <div className="bottom">
          <ProfileIconGray />
          <p className="guest">
            기준 {purchaseInfo?.minHeadCount}명 / 최대 {purchaseInfo?.maxHeadCount}명
          </p>
        </div>
      </S.CardWrapper>
      <S.Spacer height="2rem" />

      <S.Title>예약자 정보</S.Title>
      <S.Flex>
        <S.SubTitle>이름</S.SubTitle>
        <S.Text>{purchaseInfo?.reservationPersonName}</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>휴대폰 번호</S.SubTitle>
        <S.Text>{purchaseInfo?.reservationPersonPhoneNumber}</S.Text>
      </S.Flex>

      <S.Spacer className="border-bottom" height="1.5rem" />

      <S.Title>이용자 정보</S.Title>
      <S.Flex>
        <S.SubTitle>이름</S.SubTitle>
        <S.Text>{purchaseInfo?.userPersonName}</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>휴대폰 번호</S.SubTitle>
        <S.Text>{purchaseInfo?.userPersonPhoneNumber}</S.Text>
      </S.Flex>
      <S.Spacer />

      {filteredTrades && (
        <>
          <S.Title>거래 정보</S.Title>
          <S.NoticeWrapper>
            <Notice
              title="구매 취소는 판매자 승인 전까지만 가능합니다."
              type="default"
              color="orange"
              shape="line"
            />
          </S.NoticeWrapper>
          <S.Flex>
            <S.SubTitle>주문번호</S.SubTitle>
            <S.Text>{filteredTrades[0]?.tradeId}</S.Text>
          </S.Flex>
          <S.Flex>
            <S.SubTitle>판매자</S.SubTitle>
            <S.Text>{filteredTrades[0]?.sellerNickname}</S.Text>
          </S.Flex>
          <S.Flex>
            <S.SubTitle>주문일시</S.SubTitle>
            <S.Text>{filteredTrades[0]?.tradeRegisteredTime}</S.Text>
          </S.Flex>
          <S.Spacer />
        </>
      )}

      <S.Title>결제 정보</S.Title>
      <S.Flex>
        <S.SubTitle>상품금액</S.SubTitle>
        <S.Text className="bold">{purchaseInfo?.productPrice}원</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>수수료</S.SubTitle>
        <S.Text className="bold gray-600">
          {formatNumberWithCommas(Number(purchaseInfo?.fee))}원
        </S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>야놀자 포인트</S.SubTitle>
        <S.Text className="bold gray-500">-{purchaseInfo?.point}P</S.Text>
      </S.Flex>
      <S.Flex>
        <S.Title>총 결제 금액</S.Title>
        <S.Text className="blue bold">{purchaseInfo?.totalPrice}원</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>결제 수단</S.SubTitle>
        <S.Text>{convertStringToKR(purchaseInfo?.paymentType as string)}</S.Text>
      </S.Flex>

      <S.Footer>
        야나바다[(주)야놀자]는 통신판매중개업자로서, 통신판매의 당사자가 아니라는 사실을 고지하며
        상품의 결제, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
      </S.Footer>

      <S.BottomActions>
        <S.Text className="gray center">
          승인 진행상황은 MY야나바다 &gt; 구매내역에서 확인하실 수 있습니다.
        </S.Text>
        <div className="bottom">
          <Link to="/mypage/purchaseHistory">구매내역으로 이동</Link>
          <Link to="/" className="blue">
            홈으로 이동
          </Link>
        </div>
      </S.BottomActions>
    </S.Container>
  );
};

export default ReservationComplete;
