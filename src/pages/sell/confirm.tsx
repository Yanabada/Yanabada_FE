import * as S from "./styles/confirm";
import * as CS from "./styles/register";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

import UpperNavBar from "@components/navBar/upperNavBar";
import DateChangeButton from "@components/buttons/DateChangeButton";
import { numberFormat } from "@utils/numberFormat";
import { getDayOfWeek } from "@utils/getDayOfWeek";
// import calculateFee from "@utils/calcCancelFee";
import SellerSay from "@pages/productDetail/components/SellerSay";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";

import initialConfirmData from "./constants/initialConfirmData";
import InfoBox from "./components/InfoBox";
import getSellResult from "./apis/getSellResult";
import BaseButton from "@components/buttons/BaseButton";
import useCalcFeeStore from "./stores/endDateStore";

const SellConfirm = () => {
  const [confirmData, setConfirmData] = useState(initialConfirmData);
  const { id } = useParams();
  const navigate = useNavigate();

  const { calcFeeNumber }: any = useCalcFeeStore();

  console.log(calcFeeNumber, "확인");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          return;
        }
        const sellDetailData = await getSellResult({ id });
        setConfirmData(sellDetailData.data);
      } catch (error) {
        console.error("Error fetching sell list:", error);
      }
    };
    fetchData();
  }, []);

  const plusPrice = (confirmData.sellingPrice * 5) / 100;

  return (
    <>
      <UpperNavBar title="상품 등록 완료" type="none" />
      <CS.RegisterWrap>
        <CS.RegisterInner>
          <CS.RegisterTitle>상품 등록이 정상적으로 완료되었습니다.</CS.RegisterTitle>
          <CS.RegisterGrayTitle>입력한 상품 정보가 정확한지 확인하세요.</CS.RegisterGrayTitle>
        </CS.RegisterInner>
        <S.ConfirmBlank />
        <CS.RegisterInner>
          <CS.RegisterSubTitle>숙소 정보</CS.RegisterSubTitle>
          <InfoBox
            code={confirmData.orderCode}
            accommodationImage={confirmData.accommodationInfo.image}
            accommodationName={confirmData.accommodationInfo.name}
            roomName={confirmData.roomInfo.name}
            checkInDate={confirmData.checkInDate}
            checkOutDate={confirmData.checkOutDate}
            checkInTime={confirmData.roomInfo.checkInTime}
            checkOutTime={confirmData.roomInfo.checkOutTime}
          />
        </CS.RegisterInner>
        <S.ConfirmBlank />
        <CS.RegisterInner>
          <CS.RegisterTitle>판매 가격</CS.RegisterTitle>
          <S.ConfirmBox>
            <div className="inner">
              <p className="name">판매가</p>
              <p className="value">
                <span className="text-black">{numberFormat(confirmData.sellingPrice)}원</span>
              </p>
            </div>
            <div className="inner">
              <p className="name">
                결제 수수료 <span>(구매자 부담)</span>
              </p>
              <p className="value">{numberFormat(plusPrice)} 원</p>
            </div>
            <div className="stripe"></div>
            <div className="inner">
              <p className="name">최종 판매가</p>
              <p className="value">
                <span className="text-blue">
                  {numberFormat(confirmData.sellingPrice + plusPrice)} 원
                </span>
              </p>
            </div>
          </S.ConfirmBox>
        </CS.RegisterInner>
        <S.ConfirmBlank />
        <CS.RegisterInner>
          <CS.RegisterTitle>판매 옵션</CS.RegisterTitle>
          <S.ConfirmBlank />
          <CS.RegisterSubTitle>가격제안 가능여부</CS.RegisterSubTitle>
          <S.ConfirmWrapper>
            <div>
              <S.SelectButton className={confirmData.canNegotiate ? "selected" : ""}>
                {confirmData.canNegotiate && <FaCheck />}
                가격제안 가능
              </S.SelectButton>
            </div>
            <div>
              <S.SelectButton className={confirmData.canNegotiate ? "" : "selected"}>
                {!confirmData.canNegotiate && <FaCheck />}가격제안 불가
              </S.SelectButton>
            </div>
          </S.ConfirmWrapper>
          <S.InnerBlank />
          <CS.RegisterSubTitle>판매 중단 날짜</CS.RegisterSubTitle>
          <DateChangeButton
            endDate={confirmData.saleEndDate}
            week={getDayOfWeek(confirmData.saleEndDate)}
            width="100%"
            disabled
          />
          {confirmData.roomInfo.cancelPolicy === "YNBD_3" ? null : (
            <>
              <S.InnerBlank />
              <CS.RegisterSubTitle>야놀자 자동 예약 취소</CS.RegisterSubTitle>
              <S.ConfirmWrapper>
                <div>
                  <S.SelectButton className={confirmData.isAutoCancel ? "selected" : ""}>
                    {confirmData.isAutoCancel && <FaCheck />}예
                  </S.SelectButton>
                </div>
                <div>
                  <S.SelectButton className={confirmData.isAutoCancel ? "" : "selected"}>
                    {!confirmData.isAutoCancel && <FaCheck />}아니오
                  </S.SelectButton>
                </div>
              </S.ConfirmWrapper>
              <CS.RefundText>
                <p className="text">
                  <YanoljaIcon />
                  야놀자에서 취소 시 환불금
                </p>
                <p className="price">
                  <>
                    <span>{numberFormat(calcFeeNumber)}</span>원
                  </>
                </p>
              </CS.RefundText>
            </>
          )}
        </CS.RegisterInner>
        {/* ⚠️ 보류 ⚠️ */}
        {/* 
        <S.ConfirmBlank />
        <CS.RegisterInner>
          <CS.RegisterTitle>받을 수 있는 금액을 확인하세요</CS.RegisterTitle>
          <CS.RegisterDes>
            야나바다 양도 성공 시 <span className="text-blue">200,000원</span>을 절약해요
          </CS.RegisterDes>
          <S.ConfirmInner>
            <div className="inner">
              <div className="calc-box">
                <p className="tit">양도 판매 성공 시</p>
                <p className="discount">
                  <span>1,029,000</span>원
                </p>
                <p className="inner">
                  <span className="percentage text-blue">90%</span>
                  <span className="price">926,1000원</span>
                </p>
              </div>
            </div>
            <div className="inner">
              <div className="calc-box">
                <p className="tit">1월 8일 판매 종료시</p>
                <p className="discount">
                  <span>1,029,000</span>원
                </p>
                <p className="inner">
                  <span className="percentage text-orange">7%</span>
                  <span className="price">100,000원</span>
                </p>
              </div>
            </div>
          </S.ConfirmInner>
        </CS.RegisterInner>
         */}
        <CS.RegisterInner className="gray-bg">
          <SellerSay seller={confirmData.seller} description={confirmData.description} />
        </CS.RegisterInner>
        <CS.ConfirmWrap>
          <S.ButtonWrap>
            <div>
              <BaseButton
                type="submit"
                buttonType="disabled-light"
                width="100%"
                onClick={() => navigate(`/sell/correct/${id}?redirect=/sell/confirm/${id}`)}
              >
                수정하기
              </BaseButton>
            </div>
            <div>
              <BaseButton
                type="submit"
                buttonType="default"
                width="100%"
                onClick={() => navigate("/mypage/salesHistory?redirect=/mypage")}
              >
                판매내역으로 이동
              </BaseButton>
            </div>
          </S.ButtonWrap>
        </CS.ConfirmWrap>
      </CS.RegisterWrap>
    </>
  );
};

export default SellConfirm;
