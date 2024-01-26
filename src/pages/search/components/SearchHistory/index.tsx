import * as S from "./style";
import HistoryStore from "@pages/search/stores/historyStore";
import { HistoryType } from "@pages/search/types/history";
import { formatDateTo } from "@utils/formatDateTo";
import { Link } from "react-router-dom";

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
        const checkInDate = item.checkInDate && formatDateTo(new Date(item.checkInDate));
        const checkOutDate = item.checkOutDate && formatDateTo(new Date(item.checkOutDate));
        return (
          <S.RecordContainer key={item.id.toString()}>
            <S.RecordBoxContainer>
              <Link
                to={`/products?keyword=${item.keyword}&checkInDate=${item.checkInDate}&checkOutDate=${item.checkOutDate}&adult=${item.adult}&child=${item.child}`}
              >
                <S.Location>{item.keyword}</S.Location>
                <S.Period>
                  {checkInDate && checkInDate} ~ {checkOutDate && checkOutDate}
                </S.Period>
                <S.User>
                  {item.adult} 성인 / {item.child} 아동
                </S.User>
              </Link>
              <S.CancelIcon onClick={() => handleDeleteHistory(item.id)} />
            </S.RecordBoxContainer>
          </S.RecordContainer>
        );
      })}
    </S.RecentSearchContainer>
  );
};

export default SearchHistory;
