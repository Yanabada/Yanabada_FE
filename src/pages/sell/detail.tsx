import * as S from "./styles/detail";

import { IoPersonOutline } from "react-icons/io5";

import UpperNavBar from "@components/navBar/upperNavBar";
import InfoBox from "./components/InfoBox";
import { getDayOfWeek } from "@utils/getDayOfWeek";
import { numberFormat } from "@utils/numberFormat";
import translatePayment from "@utils/translatePayment";
import { format } from "date-fns";
import { getPercentage } from "./utils/getPercentage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getSellDetail from "./apis/sellDetail";
import { DetailProps } from "./types/sellDetail";

const Sell = () => {
  const { id } = useParams();
  console.log(id);

  const today = new Date();
  const isToday = format(today, "yyyy.MM.dd");
  const [sellDetailData, setSellDetailData] = useState<DetailProps>({
    orderId: 0,
    code: "",
    orderDate: "",
    accommodationName: "",
    accommodationImage: "",
    roomName: "",
    cancelPolicy: "",
    checkInDate: "",
    checkOutDate: "",
    checkInTime: "",
    checkOutTime: "",
    price: 0,
    minHeadCount: 0,
    maxHeadCount: 0,
    reservationPersonName: "",
    reservationPersonPhoneNumber: "",
    userPersonName: "",
    userPersonPhoneNumber: "",
    totalPayment: 0,
    paymentMethod: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          return;
        }
        const sellDetailData = await getSellDetail({ id });
        console.log("성공!", sellDetailData.data);
        setSellDetailData(sellDetailData.data);
      } catch (error) {
        console.error("Error fetching sell list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <UpperNavBar title="예약내역 상세" type="back" />
      <S.DetailInfoWrap>
        <S.DetailBox>
          <p className="title">
            {sellDetailData.orderDate}({getDayOfWeek(sellDetailData.orderDate)})
          </p>
        </S.DetailBox>
        <S.DetailBlank />
        <S.DetailBox>
          <p className="title">상품 및 이용 정보</p>
          <InfoBox infoProps={sellDetailData} />
          <div className="info-box__right">
            <p className="option">
              <IoPersonOutline /> 기준 {sellDetailData.minHeadCount}명 / 최대{" "}
              {sellDetailData.maxHeadCount}명
            </p>
            <p className="price">
              <span>구매가</span>&nbsp; {numberFormat(sellDetailData.totalPayment)}원
            </p>
            <p className="fee">
              취소수수료{" "}
              {getPercentage(today, sellDetailData.cancelPolicy, sellDetailData.checkInDate)}%
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
              <p className="value">{sellDetailData.reservationPersonName}</p>
            </div>
            <div className="inner">
              <p className="name">휴대폰 번호</p>
              <p className="value">{sellDetailData.reservationPersonPhoneNumber}</p>
            </div>
          </div>
          <p className="title">이용자 정보</p>
          <div className="info-box__personal">
            <div className="inner">
              <p className="name">이름</p>
              <p className="value">{sellDetailData.userPersonName}</p>
            </div>
            <div className="inner">
              <p className="name">휴대폰 번호</p>
              <p className="value">{sellDetailData.userPersonPhoneNumber}</p>
            </div>
          </div>
          <p className="title">결제 금액</p>
          <div className="info-box__personal">
            <div className="inner">
              <p className="name">상품금액</p>
              <p className="value">{numberFormat(sellDetailData.price)}원</p>
            </div>
            <div className="inner">
              <p className="name">총 결제금액</p>
              <p className="value">
                <span>{numberFormat(sellDetailData.totalPayment)}원</span>
              </p>
            </div>
            <div className="inner">
              <p className="name">결제 수단</p>
              <p className="value">{translatePayment(sellDetailData.paymentMethod)}</p>
            </div>
          </div>
        </S.DetailBox>
      </S.DetailInfoWrap>
    </>
  );
};

export default Sell;
