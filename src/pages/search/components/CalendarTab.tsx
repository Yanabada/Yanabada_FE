import Calendar from "@components/calendar";
import SearchTab from "./SearchTab";
import { useSearchTab } from "../stores/tabStore";

import CalendarIcon from "@assets/icons/search_Calendar.svg?react";
import CalendarStore from "@stores/CalendarStore";
import { formatDateTo } from "@utils/formatDateTo";

const CalendarTab = () => {
  const { tab, setTab } = useSearchTab();
  const { searchStartDate, searchEndDate } = CalendarStore();

  const changeDate = (date: Date | null) => {
    if (date) {
      return formatDateTo(date, "MM/dd");
    }
    return null;
  };

  const startDate = changeDate(searchStartDate);
  const endDate = changeDate(searchEndDate);

  return (
    <SearchTab
      isOpen={tab === "calendar"}
      setIsOpen={() => setTab("calendar")}
      icon={<CalendarIcon />}
      leftPlaceholder="일정"
      rightPlaceholder={startDate && endDate ? `${startDate} ~ ${endDate}` : "전체 일정"}
    >
      <Calendar />
    </SearchTab>
  );
};

export default CalendarTab;
