import * as S from "./styles/register";
import * as CS from "./styles/detail";

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  addDays,
  differenceInDays,
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  subDays,
  subMonths
} from "date-fns";

import UpperNavBar from "@components/navBar/upperNavBar";
import PriceArea from "@components/priceArea";
import PriceTable from "@components/priceTable";
import Notice from "@components/notice";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import DateChangeButton from "@components/buttons/DateChangeButton";
import Checkbox from "@components/input/Checkbox";
import BaseButton from "@components/buttons/BaseButton";
import BottomSheet from "@components/bottomSheet";
import Calendar from "@components/calendar";

import YanoljaIcon from "assets/icons/yanolja_Icon.svg?react";
import { numberFormat } from "@utils/numberFormat";
import todayFormat from "@utils/todayFormat";
import dateFormat from "@utils/dateFormat";
import { feePolicy2 } from "@constants/feePolicys";
import { getDayOfWeek } from "@utils/getDayOfWeek";

const SellRegister = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [allCheck, setAllCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const [price, setPrice] = useState(0);
  const [isNego, setIsNego] = useState(false);
  const [isAutoCancel, setIsAutoCancel] = useState(false);

  const navigate = useNavigate();
  const [endDate, setEndDate] = useState<string | undefined>();
  const [startDate, setStartDate] = useState<string | null>(null);

  // 달력에서 시작일과 종료일 설정
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const startParam = searchParams.get("start");
    const endParam = searchParams.get("end");

    // start와 end 값을 콘솔에 출력
    console.log("Start Date:", startParam);
    console.log("End Date:", endParam);

    setStartDate(String(startParam));
    setEndDate(String(endParam));
  }, [location.search]);

  console.log("종료일", endDate);
  console.log(startDate);

  const originalPrice = 1200000;
  const purchasePrice = 1200000;
  const cancelFee = 600000;

  const productData = {
    code: "240107f84892a35ed5",
    image: "http://via.placeholder.com/300x300",
    accommodationName: "춘천세종호텔",
    roomName: "스탠다드 룸",
    checkInDate: "2024-01-25",
    checkOutDate: "2024-01-26",
    policyNumber: 2
  };

  const bottomSheetProps = {
    title: "판매기한 선택",
    isVisible: bottomSheetVisible,
    setIsVisible: setBottomSheetVisible
  };

  // calendar 영역
  // TODO : checkIn 을 기준으로 바꿔야 할 것
  const currentMonth = new Date(productData.checkInDate); // checkInDate를 시작 월로 사용합니다.
  console.log(currentMonth);
  const nextYear = new Date(currentMonth);
  const prevYear = subMonths(new Date(currentMonth), 12);
  nextYear.setFullYear(currentMonth.getFullYear() + 1);
  const today = new Date();

  const seletedDates = eachDayOfInterval({
    start: startOfMonth(prevYear),
    end: endOfMonth(nextYear)
  });

  const minDay = subDays(new Date(productData.checkInDate), 6);
  const maxDay = addDays(new Date(productData.checkInDate), 0);

  const excludeDates = seletedDates.filter((date) => {
    const dateMonth = date.getMonth();
    const dateDay = date.getDate();
    const minMonth = minDay.getMonth();
    const minDayOfMonth = minDay.getDate();
    const maxMonth = maxDay.getMonth();
    const maxDayOfMonth = maxDay.getDate();

    return (
      dateMonth < minMonth ||
      (dateMonth === minMonth && dateDay < minDayOfMonth) ||
      dateMonth > maxMonth ||
      (dateMonth === maxMonth && dateDay > maxDayOfMonth)
    );
  });

  const renderDayContents = (dayOfMonth: number, date?: Date | null | undefined) => {
    const isExcluded =
      date instanceof Date &&
      excludeDates.some((excludedDate) => excludedDate.getTime() === date.getTime());

    const currentDate = date instanceof Date ? date : new Date();
    const daysBefore = differenceInDays(new Date(productData.checkInDate), currentDate);

    // 맨 앞의 정책을 뺀 새로운 배열 생성
    const feePolicyWithoutFirst = feePolicy2.slice(1);

    const feePercentage =
      feePolicyWithoutFirst.find((policy) => policy.daysBefore === daysBefore)?.percentage || 0;
    const calculatedFee = originalPrice - (originalPrice * feePercentage) / 100;

    return (
      <div>
        {dayOfMonth}
        {!isExcluded && (
          <span className="include-text">
            {daysBefore === 0 ? "입실일" : numberFormat(calculatedFee)}
          </span>
        )}
        {isExcluded && <span className="exclude-text">0</span>}
      </div>
    );
  };

  // 구매가 대비 판매가격 % 계산
  function calculateDiscount(originalPrice: number, price: number) {
    const discountPercentage = ((originalPrice - price) / originalPrice) * 100;
    return Math.floor(discountPercentage);
  }

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
          <PriceTable
            originalPrice={originalPrice}
            purchasePrice={purchasePrice}
            cancelFee={cancelFee}
            productData={productData}
          />
          <PriceArea
            title="판매가격"
            placeholder="￦ 판매 가격을 입력해주세요"
            originalPrice={originalPrice}
            purchasePrice={purchasePrice}
            cancelFee={cancelFee}
            resetPrice={purchasePrice}
            isAlert
            charge={false}
            price={price}
            setPrice={setPrice}
          />
        </S.RegisterInner>
        <CS.DetailBlank />
        <S.RegisterInner>
          <S.RegisterTitle>판매 옵션</S.RegisterTitle>
          <S.RegisterSubTitle>
            네고 여부 선택 <span>*</span>
          </S.RegisterSubTitle>
          <S.RegisterDes>네고 불가능 선택 시 구매자는 채팅을 신청할 수 없습니다.</S.RegisterDes>
          <S.SelectWrap>
            <S.ButtonInner>
              <AuthenticationButton
                buttonType={isNego ? "disabled" : "default"}
                width="100%"
                onClick={() => setIsNego(true)}
              >
                예
              </AuthenticationButton>
            </S.ButtonInner>
            <S.ButtonInner>
              <AuthenticationButton
                buttonType={isNego ? "default" : "disabled"}
                width="100%"
                onClick={() => setIsNego(false)}
              >
                아니오
              </AuthenticationButton>
            </S.ButtonInner>
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
            endDate={dateFormat(endDate)}
            week={getDayOfWeek(String(endDate))}
            width="100%"
            onClick={() => setBottomSheetVisible(true)}
          />
          <BottomSheet {...bottomSheetProps}>
            <S.CalendarInner>
              <Notice
                type="default"
                title="판매 종료일을 선택해주세요"
                content={`날짜별 판매 종료 시 환불받을 수 있는 금액이에요
                오늘(${todayFormat(today)})부터 입실일까지 판매할 수 있어요.`}
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
                    <span>{numberFormat(purchasePrice)}</span>원
                  </p>
                  <p className="inner">
                    <span className="percentage text-blue">
                      {calculateDiscount(purchasePrice, price)}%
                    </span>
                    <span className="price">{numberFormat(price)}원</span>
                  </p>
                  {/* startDate 입력 전 */}
                  {/* <p className="tit no-text">
                    판매 가격이
                    <br /> 설정되지 않았어요
                  </p> */}
                </div>
                <div className="calc-box calc-box__right">
                  <p className="tit">
                    <p className="tit">
                      {isNaN(Date.parse(endDate || "")) ? (
                        <span>판매 종료일을 선택해주세요</span>
                      ) : (
                        <span>{dateFormat(endDate || "")} 판매 종료시</span>
                      )}
                    </p>
                  </p>
                  <p className="discount">
                    <span>{numberFormat(originalPrice)}</span>원
                  </p>
                  <p className="inner">
                    <span className="percentage text-orange">
                      {/* TODO */}
                      테스트%
                    </span>
                    {/* TODO */}
                    <span className="price">테스트원</span>
                  </p>
                </div>
              </S.CalcInner>
              <S.SmallSpace />
              <BaseButton buttonType="default" width="100%">
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
            <S.ButtonInner>
              <AuthenticationButton
                buttonType={isAutoCancel ? "disabled" : "default"}
                width="100%"
                onClick={() => setIsAutoCancel(true)}
              >
                예
              </AuthenticationButton>
            </S.ButtonInner>
            <S.ButtonInner>
              <AuthenticationButton
                buttonType={isAutoCancel ? "default" : "disabled"}
                width="100%"
                onClick={() => setIsAutoCancel(false)}
              >
                아니오
              </AuthenticationButton>
            </S.ButtonInner>
          </S.SelectWrap>
          <S.RefundText>
            <p className="text">
              <YanoljaIcon />
              야놀자에서 취소 시 환불금
            </p>
            <p className="price">
              <span>700,000</span>원
            </p>
          </S.RefundText>
        </S.RegisterInner>
        <CS.DetailBlank />
        <S.RegisterInner>
          <S.RegisterTitle>판매자 한마디</S.RegisterTitle>
          <S.RegisterComment placeholder="안전한 거래를 위해 개인정보를 작성하지 않도록 주의해주세요." />
        </S.RegisterInner>
        <CS.DetailBlank />
        <S.RegisterInner>
          <Checkbox
            variant="all"
            content="필수 약관 전체 동의"
            setChecked={setAllCheck}
            checked={allCheck}
            setList={[setCheck1, setCheck2, setCheck3]}
          />
          <Checkbox
            variant="individual"
            title=""
            content="아나바다에 등록한 상품을 다른 곳에서 이중판매 한 경우 발생한 불이익에 대해 자사는 책임지지 않음을 동의합니다. (필수)"
            setChecked={setCheck1}
            checked={check1}
          />
          <Checkbox
            variant="individual"
            title=""
            content="개인정보 수집 및 이용 (필수)"
            hasMoreContent
            setChecked={setCheck2}
            checked={check2}
          />
          <Checkbox
            variant="individual"
            title=""
            content="개인정보 제 3자 제공 (필수)"
            hasMoreContent
            setChecked={setCheck3}
            checked={check3}
          />
        </S.RegisterInner>
        <S.RegisterInner>
          <S.ConfirmWrap>
            <p className="des">
              <Link to="/">이용규칙</Link>에 동의하실 경우 상품 등록하기를 클릭해주세요
            </p>
            <BaseButton
              buttonType="default"
              width="100%"
              onClick={() => {
                if (allCheck) {
                  navigate("/sell/result");
                }
              }}
            >
              상품 등록하기
            </BaseButton>
          </S.ConfirmWrap>
        </S.RegisterInner>
      </S.RegisterWrap>
    </>
  );
};

export default SellRegister;
