import useResearch from "@pages/products/hooks/useResearch";
import * as S from "./styles";
import { useSearchParams } from "react-router-dom";

const Research = () => {
  const { position, isMapMoved, setMapMoved } = useResearch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleResearch = () => {
    searchParams.set("smallX", position.smallX.toString());
    searchParams.set("smallY", position.smallY.toString());
    searchParams.set("bigX", position.bigX.toString());
    searchParams.set("bigY", position.bigY.toString());
    setSearchParams(searchParams);
    setMapMoved(false);
  };

  return (
    isMapMoved && (
      <S.ResearchButton onClick={handleResearch}>현재 지도에서 숙소 재검색</S.ResearchButton>
    )
  );
};

export default Research;
