import * as S from "./styles/detail";

import { IoPersonOutline } from "react-icons/io5";

import UpperNavBar from "@components/navBar/upperNavBar";

const Sell = () => {
  return (
    <>
      <UpperNavBar title="예약내역 상세" type="back" />
      <S.DetailInfoWrap>
        <S.DetailBox>
          <p className="title">2023.12.10(일)</p>
        </S.DetailBox>
        <S.DetailBlank />
        <S.DetailBox>
          <p className="title">상품 및 이용 정보</p>
          <div className="info-box__detail">
            <div className="img-bx">
              <img src="https://via.placeholder.com/300x300" alt="썸네일" />
            </div>
            <div className="txt-bx">
              <p className="number">숙소 예약 번호 20231219186542325</p>
              <p className="tit">파라스파라 서울 더 그레이트 현대 런던 </p>
              <p className="room">Forest Tower Deluxe King</p>
              <p className="date">2023.12.25 (월) - 2023.12.16 (화)</p>
              <p className="time">체크인 14:00 | 체크아웃 11:00</p>
            </div>
          </div>
          <div className="info-box__right">
            <p className="option">
              <IoPersonOutline /> 기준 2명 / 최대 2명
            </p>
            <p className="price">
              <span>구매가</span>&nbsp; 264,000원
            </p>
            <p className="fee">
              취소수수료 20%
              <br />
              (2024.01.03 (목) 23:00 전까지)
            </p>
          </div>
        </S.DetailBox>
        <S.DetailBlank />
        <S.DetailBox>
          <p className="title">예약자 정보</p>
          <div className="info-box__personal">
            <div className="inner">
              <p className="name">이름</p>
              <p className="value">김개똥</p>
            </div>
            <div className="inner">
              <p className="name">휴대폰 번호</p>
              <p className="value">010-1234-5678</p>
            </div>
          </div>
          <p className="title">이용자 정보</p>
          <div className="info-box__personal">
            <div className="inner">
              <p className="name">이름</p>
              <p className="value">김개똥</p>
            </div>
            <div className="inner">
              <p className="name">휴대폰 번호</p>
              <p className="value">010-1234-5678</p>
            </div>
          </div>
          <p className="title">결제 금액</p>
          <div className="info-box__personal">
            <div className="inner">
              <p className="name">상품금액</p>
              <p className="value">1,200,000원</p>
            </div>
            <div className="inner">
              <p className="name">총 결제금액</p>
              <p className="value">
                <span>1,200,000원</span>
              </p>
            </div>
            <div className="inner">
              <p className="name">결제 수단</p>
              <p className="value">카카오페이</p>
            </div>
          </div>
        </S.DetailBox>
      </S.DetailInfoWrap>
    </>
  );
};

export default Sell;
