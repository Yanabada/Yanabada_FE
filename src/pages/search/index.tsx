import * as S from "./styles/style";
import SearchHistory from "./components/SearchHistory";
import BottomActions from "./components/BottomActions";
import UpperNavBar from "@components/navBar/upperNavBar";
import GuestCounterTab from "./components/GuestCounterTab";
import CalendarTab from "./components/CalendarTab";
import KeywordTab from "./components/KeywordTab";

const Search = () => {
  return (
    <>
      <UpperNavBar type="back" title="검색" />
      <S.Container>
        <S.RecentSearchText>최근 검색 기록</S.RecentSearchText>
        <SearchHistory />
        <S.FilterText>검색 필터</S.FilterText>
        <KeywordTab />
        <CalendarTab />
        <GuestCounterTab />
        <BottomActions />
      </S.Container>
    </>
  );
};

export default Search;
