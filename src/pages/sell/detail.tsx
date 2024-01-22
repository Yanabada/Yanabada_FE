import * as S from "./styles/detail";

import { IoPersonOutline } from "react-icons/io5";

import UpperNavBar from "@components/navBar/upperNavBar";
import InfoBox from "./components/InfoBox";
import { getDayOfWeek } from "@utils/getDayOfWeek";
import { numberFormat } from "@utils/numberFormat";
import translatePayment from "@utils/translatePayment";
import { format } from "date-fns";
import { getPercentage } from "./utils/getPercentage";

const Sell = () => {
  // TODO :  URL의 id 값으로 상세데이터 호출

  const today = new Date();
  const isToday = format(today, "yyyy.MM.dd");

  const InfoProps = {
    orderId: 1,
    code: "2401131a77ef50ccd4",
    orderDate: "2024-01-26",
    accommodationName: "춘천세종호텔",
    accommodationImage: "http://via.placeholder.com/300x300",
    roomName: "스탠다드 룸",
    cancelPolicy: "YNBD_3",
    checkInDate: "2024-01-26",
    checkOutDate: "2024-01-30",
    checkInTime: "11:00",
    checkOutTime: "15:00",
    price: 100000,
    minHeadCount: 2,
    maxHeadCount: 4,
    reservationPersonName: "하이이",
    reservationPersonPhoneNumber: "010-2323-1212",
    userPersonName: "바이이",
    userPersonPhoneNumber: "010-5656-5656",
    totalPayment: 100000,
    paymentMethod: "TOSS_PAY"
  };

  return (
    <>
      <UpperNavBar title="예약내역 상세" type="back" />
      <S.DetailInfoWrap>
        <S.DetailBox>
          <p className="title">
            {InfoProps.orderDate}({getDayOfWeek(InfoProps.orderDate)})
          </p>
        </S.DetailBox>
        <S.DetailBlank />
        <S.DetailBox>
          <p className="title">상품 및 이용 정보</p>
          <InfoBox infoProps={InfoProps} />
          <div className="info-box__right">
            <p className="option">
              <IoPersonOutline /> 기준 {InfoProps.minHeadCount}명 / 최대 {InfoProps.maxHeadCount}명
            </p>
            <p className="price">
              <span>구매가</span>&nbsp; {numberFormat(InfoProps.totalPayment)}원
            </p>
            <p className="fee">
              취소수수료 {getPercentage(today, InfoProps.cancelPolicy, InfoProps.checkInDate)}%
              <br />({isToday} ({getDayOfWeek(isToday)}) 23:59 전까지)
            </p>
          </div>
        </S.DetailBox>
        <S.DetailBlank />
        <S.DetailBox>
          <p className="title">예약자 정보</p>
          <div className="info-box__personal">
            <div className="inner">
              <p className="name">이름</p>
              <p className="value">{InfoProps.reservationPersonName}</p>
            </div>
            <div className="inner">
              <p className="name">휴대폰 번호</p>
              <p className="value">{InfoProps.reservationPersonPhoneNumber}</p>
            </div>
          </div>
          <p className="title">이용자 정보</p>
          <div className="info-box__personal">
            <div className="inner">
              <p className="name">이름</p>
              <p className="value">{InfoProps.userPersonName}</p>
            </div>
            <div className="inner">
              <p className="name">휴대폰 번호</p>
              <p className="value">{InfoProps.userPersonPhoneNumber}</p>
            </div>
          </div>
          <p className="title">결제 금액</p>
          <div className="info-box__personal">
            <div className="inner">
              <p className="name">상품금액</p>
              <p className="value">{numberFormat(InfoProps.price)}원</p>
            </div>
            <div className="inner">
              <p className="name">총 결제금액</p>
              <p className="value">
                <span>{numberFormat(InfoProps.totalPayment)}원</span>
              </p>
            </div>
            <div className="inner">
              <p className="name">결제 수단</p>
              <p className="value">{translatePayment(InfoProps.paymentMethod)}</p>
            </div>
          </div>
        </S.DetailBox>
      </S.DetailInfoWrap>
    </>
  );
};

export default Sell;
