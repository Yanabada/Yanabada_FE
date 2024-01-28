import * as S from "./style";
import RecentlyRowCard from "@components/card/RecentlyRowCard";
import RecentStore from "@pages/home/stores/recentStore";

const RecentlyProduct = () => {
  const { recentItem } = RecentStore();

  return (
    <>
      {recentItem.length > 0 && (
        <S.Container>
          최근 본 상품
          <S.CardContainer>
            <RecentlyRowCard />
          </S.CardContainer>
        </S.Container>
      )}
    </>
  );
};

export default RecentlyProduct;
