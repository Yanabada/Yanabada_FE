import * as S from "./style";
import RecentlyRowCard from "@components/card/RecentlyRowCard";

const RecentlyProduct = () => {
  return (
    <S.Container>
      최근 본 상품
      <S.CardContainer>
        <RecentlyRowCard />
      </S.CardContainer>
    </S.Container>
  );
};

export default RecentlyProduct;
