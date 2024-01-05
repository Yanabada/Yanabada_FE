import { useState } from "react";
import DatePicker, { registerLocale, ReactDatePickerCustomHeaderProps } from "react-datepicker";
import ko from "date-fns/locale/ko";
import { startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

type DateRange = [Date, Date];

registerLocale("ko", ko);

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const today = new Date();

  const onChange = (dates: DateRange) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const currentMonth = new Date(2024, 0);
  const nextYear = new Date(currentMonth);
  nextYear.setFullYear(currentMonth.getFullYear() + 1);

  const januaryDates = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  // const excludeDates = januaryDates
  //   .filter((date) => date.getDate() !== 3 && date.getDate() !== 4)
  //   .concat(
  //     eachDayOfInterval({
  //       start: startOfMonth(new Date(currentMonth.getFullYear(), 1)),
  //       end: endOfMonth(nextYear)
  //     })
  //   );

  const excludeDates = januaryDates
    .filter((date) => date.getDate() < 7 || date.getDate() > 11)
    .concat(
      eachDayOfInterval({
        start: startOfMonth(new Date(currentMonth.getFullYear(), 1)),
        end: endOfMonth(nextYear)
      })
    );

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth
  }: ReactDatePickerCustomHeaderProps) => {
    const year = new Intl.DateTimeFormat("ko", { year: "numeric" }).format(date);
    const month = new Intl.DateTimeFormat("ko", { month: "long" }).format(date);

    return (
      <div className="react-datepicker__header react-datepicker__header--custom">
        <button
          onClick={decreaseMonth}
          className="react-datepicker__navigation react-datepicker__navigation--previous"
        >
          <IoChevronBack />
        </button>
        <div className="react-datepicker__current-month">{`${year} ${month}`}</div>
        <button
          onClick={increaseMonth}
          className="react-datepicker__navigation react-datepicker__navigation--next"
        >
          <IoChevronForward />
        </button>
      </div>
    );
  };

  return (
    <DatePicker
      // selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      excludeDates={excludeDates}
      selectsRange
      minDate={today}
      // selectsDisabledDaysInRange
      dayClassName={(date) => {
        // date.getDay()는 0(일요일)부터 6(토요일)까지의 값을 반환
        if (date.getDay() === 0) {
          return "red-text";
        } else if (date.getDay() === 6) {
          return "blue-text";
        }
        return ""; // 기본 스타일
      }}
      // inline
      locale="ko"
      renderDayContents={(dayOfMonth: number, date?: Date | null | undefined) => {
        const isExcluded =
          date instanceof Date &&
          excludeDates.some((excludedDate) => excludedDate.getTime() === date.getTime());

        const isBeforeToday = date instanceof Date && date < today;

        return (
          <div>
            {dayOfMonth}
            {!(isBeforeToday || isExcluded) && <span className="include-text">100,000</span>}
            {/* 아래는 조건이 아닌 경우 빈 span 태그 */}
            {(isBeforeToday || isExcluded) && <span className="exclude-text">0</span>}
          </div>
        );
      }}
      renderCustomHeader={renderCustomHeader}
      showPreviousMonths
    />
  );
};

export default CustomDatePicker;
