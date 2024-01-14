import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/register";
import { DetailBlank } from "./styles/detail";
import PriceArea from "@components/priceArea";
import Notice from "@components/notice";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import YanoljaIcon from "assets/icons/yanolja_Icon.svg?react";
import DateChangeButton from "@components/buttons/DateChangeButton";
import Checkbox from "@components/input/Checkbox";
import { Link } from "react-router-dom";
import BaseButton from "@components/buttons/BaseButton";
import BottomSheet from "@components/bottomSheet";
import { useState } from "react";
import Calendar from "@components/calendar";
import { eachDayOfInterval, endOfMonth, startOfMonth } from "date-fns";

const SellRegister = () => {
  const originalPrice = 1200000;
  const purchasePrice = 1200000;
  const cancelFee = 600000;
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const productData = {
    code: "240107f84892a35ed5",
    image: "http://via.placeholder.com/300x300",
    accommodationName: "춘천세종호텔",
    roomName: "스탠다드 룸",
    checkInDate: "2024-01-15",
    checkOutDate: "2024-01-18",
    policyNumber: 2
  };

  const bottomSheetProps = {
    title: "판매기한 선택",
    isVisible: bottomSheetVisible,
    setIsVisible: setBottomSheetVisible
  };

  // calendar 영역
  const currentMonth = new Date(2024, 0);
  const nextYear = new Date(currentMonth);
  nextYear.setFullYear(currentMonth.getFullYear() + 1);
  const today = new Date();

  const seletedDates = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const excludeDates = seletedDates
    .filter((date) => date.getDate() < 16 || date.getDate() > 19)
    .concat(
      eachDayOfInterval({
        start: startOfMonth(new Date(currentMonth.getFullYear(), 1)),
        end: endOfMonth(nextYear)
      })
    );

  const renderDayContents = (dayOfMonth: number, date?: Date | null | undefined) => {
    const isExcluded =
      date instanceof Date &&
      excludeDates.some((excludedDate) => excludedDate.getTime() === date.getTime());

    const isBeforeToday = date instanceof Date && date < today;

    return (
      <div>
        {dayOfMonth}
        {!(isBeforeToday || isExcluded) && <span className="include-text">90,000</span>}
        {(isBeforeToday || isExcluded) && <span className="exclude-text">0</span>}
      </div>
    );
  };

  return (
    <>
      <UpperNavBar title="상품 등록" type="back" />
      <S.RegisterWrap>
        <S.RegisterInner>
          <S.RegisterTitle>판매 정보를 입력하세요</S.RegisterTitle>
          <Notice
            type="yanolja"
            content="야나바다에서는 야놀자에서 인증된 숙소 매물만을 거래할 수 있습니다."
            shape="lineFill"
          />
          <S.SmallSpace />
          <S.SmallSpace />
          <PriceArea
            originalPrice={originalPrice}
            purchasePrice={purchasePrice}
            cancelFee={cancelFee}
            productData={productData}
          />
        </S.RegisterInner>
        <DetailBlank />
        <S.RegisterInner>
          <S.RegisterTitle>판매 옵션</S.RegisterTitle>
          <S.RegisterSubTitle>
            네고 여부 선택 <span>*</span>
          </S.RegisterSubTitle>
          <S.RegisterDes>네고 불가능 선택 시 구매자는 채팅을 신청할 수 없습니다.</S.RegisterDes>
          <S.SelectWrap>
            <div>
              <AuthenticationButton type="disabled" width="100%">
                예
              </AuthenticationButton>
            </div>
            <div>
              <AuthenticationButton type="default" width="100%">
                아니오
              </AuthenticationButton>
            </div>
          </S.SelectWrap>
        </S.RegisterInner>
        <S.RegisterInner>
          <S.RegisterSubTitle>
            판매 중단 날짜 설정 <span>*</span>
          </S.RegisterSubTitle>
          <S.RegisterDes>
            판매 중단 날짜 내 상품이 판매되지 않을 경우 자동으로 야나바다에서 판매가 중단됩니다.
          </S.RegisterDes>
          <DateChangeButton
            endDate={"2024.01.06"}
            width="100%"
            onClick={() => setBottomSheetVisible(true)}
          />
          <BottomSheet {...bottomSheetProps}>
            <S.CalendarInner>
              <Notice
                type="default"
                title="판매 종료일을 선택해주세요"
                content="날짜별 판매 종료 시 환불받을 수 있는 금액이에요
                오늘(1월 3일)부터 입실일까지 판매할 수 있어요."
                shape="line"
              />
              <S.SmallSpace />
              <Calendar excludeDates={excludeDates} renderDayContents={renderDayContents} />
              <S.SmallSpace />
              <S.RegisterSubTitle>받을 수 있는 금액</S.RegisterSubTitle>
              <S.CalcInner>
                <div className="calc-box calc-box__left">
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
                <div className="calc-box calc-box__right">
                  <p className="tit">1월 8일 판매 종료시</p>
                  <p className="discount">
                    <span>1,029,000</span>원
                  </p>
                  <p className="inner">
                    <span className="percentage text-orange">7%</span>
                    <span className="price">100,000원</span>
                  </p>
                </div>
              </S.CalcInner>
              <S.SmallSpace />
              <BaseButton type="default" width="100%">
                확인
              </BaseButton>
            </S.CalendarInner>
          </BottomSheet>
        </S.RegisterInner>
        <S.RegisterInner>
          <S.RegisterSubTitle>
            판매 중단 후 야놀자에서 자동 예약 취소 할게요 <span>*</span>
          </S.RegisterSubTitle>
          <S.SelectWrap>
            <div>
              <AuthenticationButton type="disabled" width="100%">
                예
              </AuthenticationButton>
            </div>
            <div>
              <AuthenticationButton type="default" width="100%">
                아니오
              </AuthenticationButton>
            </div>
          </S.SelectWrap>
          <S.RefundText>
            <p className="text">
              {" "}
              <YanoljaIcon />
              야놀자에서 취소 시 환불금
            </p>
            <p className="price">
              <span>700,000</span>원
            </p>
          </S.RefundText>
        </S.RegisterInner>
        <DetailBlank />
        <S.RegisterInner>
          <S.RegisterTitle>판매자 한마디</S.RegisterTitle>
          <S.RegisterComment placeholder="안전한 거래를 위해 개인정보를 작성하지 않도록 주의해주세요." />
        </S.RegisterInner>
        <DetailBlank />
        <S.RegisterInner>
          <Checkbox variant="all" content="필수 약관 전체 동의" />
          <Checkbox
            variant="individual"
            title=""
            content="아나바다에 등록한 상품을 다른 곳에서 이중판매 한 경우 발생한 불이익에 대해 자사는 책임지지 않음을 동의합니다. (필수)"
          />
          <Checkbox
            variant="individual"
            title=""
            content="개인정보 수집 및 이용 (필수)"
            hasMoreContent
          />
          <Checkbox
            variant="individual"
            title=""
            content="개인정보 제 3자 제공 (필수)"
            hasMoreContent
          />
        </S.RegisterInner>
        <S.RegisterInner>
          <S.ConfirmWrap>
            <p className="des">
              <Link to="/">이용규칙</Link>에 동의하실 경우 상품 등록하기를 클릭해주세요
            </p>
            <BaseButton type="default" width="100%">
              상품 등록하기
            </BaseButton>
          </S.ConfirmWrap>
        </S.RegisterInner>
      </S.RegisterWrap>
    </>
  );
};

export default SellRegister;
