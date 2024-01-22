import { Link } from "react-router-dom";
import * as S from "./style";
import useAccumulate from "@pages/home/hooks/useAccumulate";
import { numberFormat } from "@utils/numberFormat";

const SearchInput = () => {
  const {
    getAccumulateQuery: { data }
  } = useAccumulate();

  const accumulatedProductCount = data.accumulatedProductCount || 0;
  const accumulatedUsageAmount = data.accumulatedUsageAmount || 0;
  const accumulatedDiscountAmount = data.accumulatedDiscountAmount || 0;

  return (
    <S.Container>
      <S.Text>
        야나바다에서
        <br /> 안전하고 저렴한 양도매물을 검색해보세요!
      </S.Text>
      <S.InputContainer>
        <Link to="/search">
          <S.InputLabel>
            <S.LocationInputIcon />
            <S.Input placeholder="원하는 장소/날짜/인원을 검색해보세요" />
          </S.InputLabel>
        </Link>
      </S.InputContainer>
      <S.AccumulateContainer>
        <S.AccumulateTextContainer>
          <S.AccumulateTitle>누적 매물</S.AccumulateTitle>
          <S.AccumulateNumber>{accumulatedProductCount}개</S.AccumulateNumber>
        </S.AccumulateTextContainer>
        <S.Line></S.Line>
        <S.AccumulateTextContainer>
          <S.AccumulateTitle>누적 이용금액</S.AccumulateTitle>
          <S.AccumulateNumber>{numberFormat(accumulatedUsageAmount)}</S.AccumulateNumber>
        </S.AccumulateTextContainer>
        <S.Line></S.Line>
        <S.AccumulateTextContainer>
          <S.AccumulateTitle>누적 할인액</S.AccumulateTitle>
          <S.AccumulateNumber>{numberFormat(accumulatedDiscountAmount)}</S.AccumulateNumber>
        </S.AccumulateTextContainer>
      </S.AccumulateContainer>
    </S.Container>
  );
};

export default SearchInput;
