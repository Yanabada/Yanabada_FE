import * as S from "./style";
import HistoryStore from "@pages/search/stores/historyStore";
import { HistoryType } from "@pages/search/types/history";
import { formatDateTo } from "@utils/formatDateTo";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const SearchHistory = () => {
  const navigate = useNavigate();
  const { history, setHistory } = HistoryStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleDeleteHistory = (id: Date, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
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
        const checkDate =
          checkInDate && checkOutDate ? `${checkInDate} ~ ${checkOutDate}` : "전체 기간";
        return (
          <S.RecordContainer key={item.id.toString()}>
            <S.RecordBoxContainer
              onClick={() => {
                if (item.keyword) {
                  searchParams.set("keyword", item.keyword);
                }
                if (item.checkInDate) {
                  searchParams.set("checkInDate", item.checkInDate);
                }
                if (item.checkOutDate) {
                  searchParams.set("checkOutDate", item.checkOutDate);
                }
                if (item.adult) {
                  searchParams.set("adult", item.adult);
                }
                if (item.child) {
                  searchParams.set("child", item.child);
                }
                setSearchParams(searchParams);
                navigate(`/products?${searchParams}`);
              }}
            >
              <S.Location>{item.keyword ? item.keyword : "전체 지역"}</S.Location>
              <S.Period>{checkDate}</S.Period>
              <S.User>
                {item.adult ? item.adult : 2} 성인 / {item.child ? item.child : 0} 아동
              </S.User>
              <S.CancelIcon onClick={(e) => handleDeleteHistory(item.id, e)} />
            </S.RecordBoxContainer>
          </S.RecordContainer>
        );
      })}
    </S.RecentSearchContainer>
  );
};

export default SearchHistory;
