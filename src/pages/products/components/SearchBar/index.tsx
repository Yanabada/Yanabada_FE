import * as S from "./style";

const SearchBar = () => {
  return (
    <S.Container>
      <S.InputLabel>
        <S.InputIcon />
        <S.Input placeholder="원하는 장소/날짜/ 인원을 검색해보세요" />
      </S.InputLabel>
    </S.Container>
  );
};

export default SearchBar;
