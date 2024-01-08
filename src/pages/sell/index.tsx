import Calendar from "@components/calendar";
import { startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const Sell = () => {
  const currentMonth = new Date(2024, 0);
  const nextYear = new Date(currentMonth);
  nextYear.setFullYear(currentMonth.getFullYear() + 1);
  const today = new Date();

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
    <>
      <Calendar excludeDates={excludeDates} renderDayContents={renderDayContents} />
    </>
  );
};

export default Sell;
