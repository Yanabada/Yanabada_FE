import * as S from "./style";
import { useLocation, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const adult = searchParams.get("adult");
  const child = searchParams.get("child");
  const checkInDate = searchParams.get("checkInDate")?.slice(5);
  const checkOutDate = searchParams.get("checkOutDate")?.slice(5);

  return (
    <S.Container>
      <S.InputLabel>
        <S.InputIcon />
        <S.Input
          placeholder={
            search
              ? `${keyword} | ${checkInDate} ~ ${checkOutDate} | 성인 ${adult}, 아동 ${child}`
              : "원하는 장소/날짜/인원을 검색해보세요"
          }
        />
      </S.InputLabel>
    </S.Container>
  );
};

export default SearchBar;
