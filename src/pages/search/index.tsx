import { useState } from "react";
import * as S from "./styles/style";
import { format } from "date-fns";
import SearchIcon from "@assets/icons/search_Search.svg?react";
import CalendarIcon from "@assets/icons/search_Calendar.svg?react";
import PersonIcon from "@assets/icons/search_Person.svg?react";
import SearchTab from "./components/SearchTab";
import BottomActions from "./components/BottomActions";
import KeywordSearch from "./components/SearchTab/Keyword";
import KeywordStore from "@pages/search/stores/KeywordStore";
import UpperNavBar from "@components/navBar/upperNavBar";
import GuestCounter from "./components/SearchTab/GuestCounter";
import Calendar from "@components/calendar";
import CalendarStore from "@stores/CalendarStore";

const Search = () => {
  const [openTab, setOpenTab] = useState("keyword");
  const { locationName } = KeywordStore();
  const { searchStartDate, searchEndDate } = CalendarStore();

  const changeDate = (date: Date | null) => {
    if (date) {
      return format(date, "MM/dd");
    }
    return null;
  };

  const startDate = changeDate(searchStartDate);
  const endDate = changeDate(searchEndDate);

  return (
    <>
      <UpperNavBar type="close" title="검색" />
      <S.Container>
        <S.RecentSearchText>최근 검색 기록</S.RecentSearchText>
        <S.RecentSearchContainer>
          <S.RecordContainer>
            <S.RecordBoxContainer>
              <S.Location>정동진</S.Location>
              <S.Period>12/28 ~ 12/29 (1박)</S.Period>
              <S.User>2 성인 / 0 아동</S.User>
              <S.CancelIcon />
            </S.RecordBoxContainer>
          </S.RecordContainer>
          <S.RecordContainer>
            <S.RecordBoxContainer>
              <S.Location>정동진</S.Location>
              <S.Period>12/28 ~ 12/29 (1박)</S.Period>
              <S.User>2 성인 / 0 아동</S.User>
              <S.CancelIcon />
            </S.RecordBoxContainer>
          </S.RecordContainer>
          <S.RecordContainer>
            <S.RecordBoxContainer>
              <S.Location>정동진</S.Location>
              <S.Period>12/28 ~ 12/29 (1박)</S.Period>
              <S.User>2 성인 / 0 아동</S.User>
              <S.CancelIcon />
            </S.RecordBoxContainer>
          </S.RecordContainer>
          <S.RecordContainer>
            <S.RecordBoxContainer>
              <S.Location>정동진</S.Location>
              <S.Period>12/28 ~ 12/29 (1박)</S.Period>
              <S.User>2 성인 / 0 아동</S.User>
              <S.CancelIcon />
            </S.RecordBoxContainer>
          </S.RecordContainer>
          <S.RecordContainer>
            <S.RecordBoxContainer>
              <S.Location>정동진</S.Location>
              <S.Period>12/28 ~ 12/29 (1박)</S.Period>
              <S.User>2 성인 / 0 아동</S.User>
              <S.CancelIcon />
            </S.RecordBoxContainer>
          </S.RecordContainer>
        </S.RecentSearchContainer>
        <S.FilterText>검색 필터</S.FilterText>
        <SearchTab
          isOpen={openTab === "keyword"}
          setIsOpen={() => setOpenTab("keyword")}
          icon={<SearchIcon />}
          leftPlaceholder="키워드"
          rightPlaceholder={locationName}
        >
          <KeywordSearch />
        </SearchTab>
        <SearchTab
          isOpen={openTab === "calendar"}
          setIsOpen={() => setOpenTab("calendar")}
          icon={<CalendarIcon />}
          leftPlaceholder="일정"
          rightPlaceholder={startDate && endDate ? `${startDate} ~ ${endDate}` : "전체 일정"}
        >
          <Calendar />
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
      </S.Container>
    </>
  );
};

export default Search;
