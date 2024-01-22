import Calendar from "@components/calendar";
import SearchTab from "./SearchTab";
import { useSearchTab } from "../stores/tabStore";
import CalendarIcon from "@assets/icons/search_Calendar.svg?react";
import { useSearchParams } from "react-router-dom";
import { formatDateTo } from "@utils/formatDateTo";

const CalendarTab = () => {
  const { tab, setTab } = useSearchTab();
  const [searchParams] = useSearchParams();
  const startParams = searchParams.get("checkInDate");
  const endParams = searchParams.get("checkOutDate");

  const checkInDate = startParams && formatDateTo(new Date(startParams));
  const checkOutDate = endParams && formatDateTo(new Date(endParams));

  return (
    <SearchTab
      isOpen={tab === "calendar"}
      setIsOpen={() => setTab("calendar")}
      icon={<CalendarIcon />}
      leftPlaceholder="일정"
      rightPlaceholder={
        checkInDate && checkOutDate ? `${checkInDate} ~ ${checkOutDate}` : "전체 일정"
      }
    >
      <Calendar />
    </SearchTab>
  );
};

export default CalendarTab;
