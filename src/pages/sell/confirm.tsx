import * as S from "./styles/confirm";
import * as CS from "./styles/register";

import UpperNavBar from "@components/navBar/upperNavBar";
import { FaCheck } from "react-icons/fa6";
import DateChangeButton from "@components/buttons/DateChangeButton";
import InfoBox from "./components/InfoBox";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
import SellerSay from "@pages/productDetail/components/SellerSay";

const SellConfirm = () => {
  const InfoProps = {
    code: "2401131a77ef50ccd4",
    accommodationImage: "http://via.placeholder.com/300x300",
    accommodationName: "춘천세종호텔",
    roomName: "스탠다드 룸",
    checkInDate: "2024-01-26",
    checkOutDate: "2024-01-30",
    checkInTime: "11:00",
    checkOutTime: "15:00"
  };

  const sellerProp = {
    id: 1,
    nickname: "나나라나",
    imageUrl: "http://via.placeholder.com/300x300"
  };

  return (
    <>
      <UpperNavBar title="상품 등록" type="back" />
      <CS.RegisterWrap>
        <CS.RegisterInner>
          <CS.RegisterTitle>입력한 상품 정보가 정확한지 확인하세요.</CS.RegisterTitle>
          <CS.RegisterSubTitle>숙소 정보</CS.RegisterSubTitle>
          <InfoBox infoProps={InfoProps} />
        </CS.RegisterInner>
        <S.ConfirmBlank />
        <CS.RegisterInner>
          <CS.RegisterTitle>판매 가격</CS.RegisterTitle>
          <S.ConfirmBox>
            <div className="inner">
              <p className="name">판매가</p>
              <p className="value">
                <span className="text-black">800,000원</span>
              </p>
            </div>
            <div className="inner">
              <p className="name">
                결제 수수료 <span>(구매자 부담)</span>
              </p>
              <p className="value">40,000원</p>
            </div>
            <div className="stripe"></div>
            <div className="inner">
              <p className="name">최종 판매가</p>
              <p className="value">
                <span className="text-blue">840,000원</span>
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
              <S.SelectButton className="selected">
                <FaCheck />
                가격제안 가능
              </S.SelectButton>
            </div>
            <div>
              <S.SelectButton className="">가격제안 불가</S.SelectButton>
            </div>
          </S.ConfirmWrapper>
          <S.InnerBlank />
          <CS.RegisterSubTitle>판매 중단 날짜</CS.RegisterSubTitle>
          <DateChangeButton endDate={"2024.01.06"} width="100%" disabled />
          <S.InnerBlank />
          <CS.RegisterSubTitle>야놀자 자동 예약 취소</CS.RegisterSubTitle>
          <S.ConfirmWrapper>
            <div>
              <S.SelectButton className="selected">
                <FaCheck />예
              </S.SelectButton>
            </div>
            <div>
              <S.SelectButton className="">아니오</S.SelectButton>
            </div>
          </S.ConfirmWrapper>
          <CS.RefundText>
            <p className="text">
              <YanoljaIcon />
              야놀자에서 취소 시 환불금
            </p>
            <p className="price">
              <span>700,000</span>원
            </p>
          </CS.RefundText>
        </CS.RegisterInner>
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
                {/* startDate 입력 전 */}
                {/* <p className="tit no-text">
                    판매 가격이
                    <br /> 설정되지 않았어요
                  </p> */}
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
        <CS.RegisterInner className="gray-bg">
          <CS.RegisterTitle>판매자 한마디</CS.RegisterTitle>
          <SellerSay seller={sellerProp} description="갑자기 개인사정이 생겨서 싸게 내놓습니다~" />
        </CS.RegisterInner>
      </CS.RegisterWrap>
    </>
  );
};

export default SellConfirm;
