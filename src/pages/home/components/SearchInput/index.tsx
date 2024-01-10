import { useState } from "react";
import * as S from "./style";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  return (
    <S.Container>
      <S.Text>
        야나바다에서
        <br /> 안전하고 저렴한 양도매물을 검색해보세요!
      </S.Text>
      <S.InputContainer>
        <S.InputLabel>
          <S.LocationInputIcon />
          <S.Input placeholder="지역을 선택하세요" onChange={handleSearch} />
        </S.InputLabel>
        <S.SecondInputContainer>
          <S.InputLabel>
            <S.CalenderInputIcon />
            <S.Input placeholder="언제 갈까요?" />
          </S.InputLabel>
          <S.InputLabel>
            <S.UserInputIcon />
            <S.Input placeholder="누구와 갈까요?" />
          </S.InputLabel>
        </S.SecondInputContainer>
      </S.InputContainer>
      {searchInput ? (
        <S.SearchButton whileTap={{ scale: 0.95 }}>검색하기</S.SearchButton>
      ) : (
        <S.ProductNumberText>8456개 상품이 기다리고 있어요</S.ProductNumberText>
      )}
    </S.Container>
  );
};

export default SearchInput;
