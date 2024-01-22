import { format } from "date-fns";
import * as S from "./style";
import HistoryStore from "@pages/search/stores/historyStore";
import { HistoryType } from "@pages/search/types/history";

const SearchHistory = () => {
  const { history, setHistory } = HistoryStore();

  const handleDeleteHistory = (id: Date) => {
    const deleteHistory = history.filter((item: HistoryType) => {
      return item.id != id;
    });
    setHistory(deleteHistory);
  };
  return (
    <S.RecentSearchContainer>
      {history.map((item: HistoryType) => {
        const checkInDate = item.checkInDate && format(new Date(item.checkInDate), "MM/dd");
        const checkOutDate = item.checkOutDate && format(new Date(item.checkOutDate), "MM/dd");
        return (
          <S.RecordContainer key={item.id.toString()}>
            <S.RecordBoxContainer>
              <S.Location>{item.keyword}</S.Location>
              <S.Period>
                {checkInDate && checkInDate} ~ {checkOutDate && checkOutDate}
              </S.Period>
              <S.User>
                {item.adult} 성인 / {item.child} 아동
              </S.User>
              <S.CancelIcon onClick={() => handleDeleteHistory(item.id)} />
            </S.RecordBoxContainer>
          </S.RecordContainer>
        );
      })}
    </S.RecentSearchContainer>
  );
};

export default SearchHistory;
