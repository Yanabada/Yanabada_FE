import { useState } from "react";

import DatePicker, { registerLocale, ReactDatePickerCustomHeaderProps } from "react-datepicker";
import { startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import ko from "date-fns/locale/ko";

import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/calendar.css";

registerLocale("ko", ko);

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const today = new Date();
  const currentMonth = new Date(2024, 0);
  const nextYear = new Date(currentMonth);
  nextYear.setFullYear(currentMonth.getFullYear() + 1);

  const onChangeDate = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const seletedDates = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const excludeDates = seletedDates
    .filter((date) => date.getDate() < 7 || date.getDate() > 11)
    .concat(
      eachDayOfInterval({
        start: startOfMonth(new Date(currentMonth.getFullYear(), 1)),
        end: endOfMonth(nextYear)
      })
    );

  const addDayClass = (date: Date) => {
    if (date.getDay() === 0) {
      return "red-text";
    } else if (date.getDay() === 6) {
      return "blue-text";
    }
    return "";
  };

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

  const renderDayContents = (dayOfMonth: number, date?: Date | null | undefined) => {
    const isExcluded =
      date instanceof Date &&
      excludeDates.some((excludedDate) => excludedDate.getTime() === date.getTime());

    const isBeforeToday = date instanceof Date && date < today;

    return (
      <div>
        {dayOfMonth}
        {!(isBeforeToday || isExcluded) && <span className="include-text">100,000</span>}
        {(isBeforeToday || isExcluded) && <span className="exclude-text">0</span>}
      </div>
    );
  };

  return (
    <DatePicker
      onChange={onChangeDate}
      startDate={startDate}
      endDate={endDate}
      excludeDates={excludeDates}
      minDate={today}
      selectsRange
      dayClassName={addDayClass}
      locale="ko"
      renderCustomHeader={renderCustomHeader}
      renderDayContents={renderDayContents}
      showPreviousMonths
    />
  );
};

export default Calendar;
