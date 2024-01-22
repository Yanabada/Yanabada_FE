import * as S from "./styles/style";
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
        <KeywordTab />
        <CalendarTab />
        <GuestCounterTab />
        <BottomActions />
      </S.Container>
    </>
  );
};

export default Search;
