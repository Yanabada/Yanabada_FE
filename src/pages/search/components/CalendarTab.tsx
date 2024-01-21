import Calendar from "@components/calendar";
import SearchTab from "./SearchTab";
import { useSearchTab } from "../stores/tabStore";

import CalendarIcon from "@assets/icons/search_Calendar.svg?react";
import CalendarStore from "@stores/CalendarStore";
import { formatDateTo } from "@utils/formatDateTo";

const CalendarTab = () => {
  const { tab, setTab } = useSearchTab();
  const { searchStartDate, searchEndDate } = CalendarStore();

  const startDate = formatDateTo(searchStartDate, "MM/dd");
  const endDate = formatDateTo(searchEndDate, "MM/dd");

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
