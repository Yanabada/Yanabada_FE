import * as CS from "../styles/register";

import {
  addDays,
  differenceInDays,
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  subDays,
  subMonths
} from "date-fns";

import DateChangeButton from "@components/buttons/DateChangeButton";
import BaseButton from "@components/buttons/BaseButton";
import Calendar from "@components/calendar";
import BottomSheet from "@components/bottomSheet";
import Notice from "@components/notice";
import { numberFormat } from "@utils/numberFormat";
import todayFormat from "@utils/todayFormat";
import dateFormat from "@utils/dateFormat";
import { getDayOfWeek } from "@utils/getDayOfWeek";
import { feePolicy2 } from "@constants/feePolicys";

import calculateOriginDiscount from "../utils/calcEndFee";

interface DateOptionProps {
  bottomSheetVisible: boolean;
  setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
  productData: {
    checkInDate: string;
  };
  originalPrice: number;
  purchasePrice: number;
  price: number;
  endDate: string | undefined;
  endDateInfo: {
    feePercentage: number;
  };
}

const DateOption = ({
  bottomSheetVisible,
  setBottomSheetVisible,
  productData,
  originalPrice,
  purchasePrice,
  price,
  endDate,
  endDateInfo
}: DateOptionProps) => {
  const bottomSheetProps = {
    title: "판매기한 선택",
    isVisible: bottomSheetVisible,
    setIsVisible: setBottomSheetVisible
  };

  // Calendar 날짜 범위 설정
  const currentMonth = new Date(productData.checkInDate);
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

  // Calendar 활성화/비활성화 날짜 및 금액 표기
  const renderDayContents = (dayOfMonth: number, date?: Date | null | undefined) => {
    const isExcluded =
      date instanceof Date &&
      excludeDates.some((excludedDate) => excludedDate.getTime() === date.getTime());

    const currentDate = date instanceof Date ? date : new Date();
    const daysBefore = differenceInDays(new Date(productData.checkInDate), currentDate);

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

  // 구매가 대비 판매가격의 수수료% 계산
  function calculateDiscount(originalPrice: number, price: number) {
    const discountPercentage = ((originalPrice - price) / originalPrice) * 100;
    return Math.floor(discountPercentage);
  }

  return (
    <CS.RegisterInner>
      <CS.RegisterSubTitle>
        판매 중단 날짜 설정 <span>*</span>
      </CS.RegisterSubTitle>
      <CS.RegisterDes>
        판매 중단 날짜 내 상품이 판매되지 않을 경우 자동으로 야나바다에서 판매가 중단됩니다.
      </CS.RegisterDes>
      <DateChangeButton
        endDate={dateFormat(endDate)}
        week={getDayOfWeek(String(endDate))}
        width="100%"
        onClick={() => setBottomSheetVisible(true)}
      />
      <BottomSheet {...bottomSheetProps}>
        <CS.CalendarInner>
          <Notice
            type="default"
            title="판매 종료일을 선택해주세요"
            content={`날짜별 판매 종료 시 환불받을 수 있는 금액이에요
          오늘(${todayFormat(today)})부터 입실일까지 판매할 수 있어요.`}
            shape="line"
          />
          <CS.SmallSpace />
          <Calendar excludeDates={excludeDates} renderDayContents={renderDayContents} />
          <CS.SmallSpace />
          <CS.RegisterSubTitle>받을 수 있는 금액</CS.RegisterSubTitle>
          <CS.CalcInner>
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
                <span className="percentage text-orange">{endDateInfo.feePercentage}%</span>

                <span className="price">
                  {numberFormat(calculateOriginDiscount(originalPrice, endDateInfo.feePercentage))}
                  원
                </span>
              </p>
            </div>
          </CS.CalcInner>
          <CS.SmallSpace />
          <BaseButton buttonType="default" width="100%">
            확인
          </BaseButton>
        </CS.CalendarInner>
      </BottomSheet>
    </CS.RegisterInner>
  );
};

export default DateOption;
