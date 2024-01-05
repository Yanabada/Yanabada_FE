import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import { startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

type DateRange = [Date, Date];

registerLocale("ko", ko);

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const onChange = (dates: DateRange) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const januaryDates = eachDayOfInterval({
    start: startOfMonth(new Date(2024, 0)), // 2024년 1월의 시작일
    end: endOfMonth(new Date(2024, 11)) // 2024년 1월의 마지막일
  });

  const excludeDates = januaryDates.filter((date) => date.getDate() !== 3 && date.getDate() !== 4);

  return (
    <DatePicker
      // selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      excludeDates={excludeDates}
      selectsRange
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

        return (
          <div>
            {dayOfMonth}
            {!isExcluded && <span className="exclude-text">텍스트</span>}
          </div>
        );
      }}
    />
  );
};

export default CustomDatePicker;
