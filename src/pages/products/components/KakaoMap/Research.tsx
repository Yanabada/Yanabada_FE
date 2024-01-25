import useResearch from "@pages/products/hooks/useResearch";
import * as S from "./styles";
import useProducts from "@pages/products/api/queries";

const Research = () => {
  const { position, isMapMoved, setMapMoved } = useResearch();
  const { refetch } = useProducts({
    smallX: position?.smallX,
    smallY: position?.smallY,
    bigX: position?.bigX,
    bigY: position?.bigY,
    size: 20
  });

  const handleResearch = async () => {
    await refetch();
    setMapMoved(false);
  };

  return (
    isMapMoved && (
      <S.ResearchButton onClick={handleResearch}>현재 지도에서 숙소 재검색</S.ResearchButton>
    )
  );
};

export default Research;
