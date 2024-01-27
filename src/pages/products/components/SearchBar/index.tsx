import * as S from "./style";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "전체 지역";
  const adult = searchParams.get("adult") || 2;
  const child = searchParams.get("child") || 0;
  const checkInDate = searchParams.get("checkInDate")?.slice(5);
  const checkOutDate = searchParams.get("checkOutDate")?.slice(5);

  const checkDate = checkInDate && checkOutDate ? `${checkInDate} ~ ${checkOutDate}` : "전체 기간";

  return (
    <S.Container>
      <S.InputLabel>
        <S.InputIcon />
        <S.Input
          placeholder={
            keyword !== "전체 지역" || adult !== 2 || child !== 0 || checkDate !== "전체 기간"
              ? `${keyword} | ${checkDate} | 성인 ${adult}, 아동 ${child}`
              : "원하는 장소/날짜/인원을 검색해보세요"
          }
        />
      </S.InputLabel>
    </S.Container>
  );
};

export default SearchBar;
