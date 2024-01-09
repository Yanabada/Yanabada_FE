import * as S from "./styles";
import SearchIcon from "@assets/icons/search_Search.svg?react";

// Focus 애니메이션
// border radius 208.017px..?
const Input = () => {
  return (
    <S.Wrapper>
      <SearchIcon />
      <S.Input placeholder="원하는 장소 / 날짜 / 인원을 검색해보세요" />
    </S.Wrapper>
  );
};

export default Input;
