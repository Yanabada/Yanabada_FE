import SearchIcon from "@assets/icons/search_Search.svg?react";
import CalendarIcon from "@assets/icons/search_Calendar.svg?react";
import PersonIcon from "@assets/icons/search_Person.svg?react";
import { useState } from "react";

import SearchTab from "./components/SearchTab";
import BottomActions from "./components/BottomActions";
import GuestCounter from "./components/SearchTab/GuestCounter";

const Search = () => {
  const [openTab, setOpenTab] = useState("keyword");

  return (
    <div>
      <SearchTab
        isOpen={openTab === "keyword"}
        setIsOpen={() => setOpenTab("keyword")}
        icon={<SearchIcon />}
        leftPlaceholder="키워드"
        rightPlaceholder="전체 지역"
      >
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
      </SearchTab>
      <SearchTab
        isOpen={openTab === "calendar"}
        setIsOpen={() => setOpenTab("calendar")}
        icon={<CalendarIcon />}
        leftPlaceholder="일정"
        rightPlaceholder="전체 기간"
      >
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
      </SearchTab>
      <SearchTab
        isOpen={openTab === "person"}
        setIsOpen={() => setOpenTab("person")}
        icon={<PersonIcon />}
        leftPlaceholder="인원"
        rightPlaceholder="성인 2명"
      >
        <GuestCounter />
      </SearchTab>
      <BottomActions />
    </div>
  );
};

export default Search;
