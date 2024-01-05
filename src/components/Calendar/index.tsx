import { useState } from "react";
import DatePicker, { registerLocale, ReactDatePickerCustomHeaderProps } from "react-datepicker";
import ko from "date-fns/locale/ko";
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
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      dayClassName={(date) => {
        if (date.getDay() === 0) {
          return "red-text";
        } else if (date.getDay() === 6) {
          return "blue-text";
        }
        return "";
      }}
      dateFormat="yyyy.MM.dd"
      locale="ko"
      renderCustomHeader={renderCustomHeader}
      minDate={today}
    />
  );
};

export default CustomDatePicker;
