import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import DatePicker, { registerLocale, ReactDatePickerCustomHeaderProps } from "react-datepicker";
import ko from "date-fns/locale/ko";

import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";

import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
interface calendarProp {
  excludeDates?: Date[];
  renderDayContents?: (dayOfMonth: number, date?: Date | undefined) => React.ReactNode;
}

const Calendar = ({ excludeDates, renderDayContents }: calendarProp) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const today = new Date();

  registerLocale("ko", ko);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (startDate) {
      searchParams.set("start", startDate.toISOString());
    } else {
      searchParams.delete("start");
    }

    if (endDate) {
      searchParams.set("end", endDate.toISOString());
    } else {
      searchParams.delete("end");
    }

    setSearchParams(searchParams);
  }, [startDate, endDate, searchParams, setSearchParams]);

  const onChangeDate = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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

  const addDayClass = (date: Date) => {
    if (date.getDay() === 0) {
      return "red-text";
    } else if (date.getDay() === 6) {
      return "blue-text";
    }
    return "";
  };

  return (
    <>
      <DatePicker
        onChange={onChangeDate}
        startDate={startDate}
        endDate={endDate}
        minDate={today}
        selectsRange
        dayClassName={addDayClass}
        locale="ko"
        renderCustomHeader={renderCustomHeader}
        renderDayContents={renderDayContents}
        excludeDates={excludeDates}
        showPreviousMonths={false}
        inline
      />
    </>
  );
};

export default Calendar;
