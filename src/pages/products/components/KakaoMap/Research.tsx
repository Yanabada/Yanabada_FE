import useResearch from "@pages/products/hooks/useResearch";
import * as S from "./styles";
import useProducts from "@pages/products/api/queries";
import { Dispatch, SetStateAction } from "react";

interface ResearchProps {
  setSelectedProductId: Dispatch<SetStateAction<number | null>>;
}

const Research = ({ setSelectedProductId }: ResearchProps) => {
  const { position, isMapMoved, setMapMoved } = useResearch();
  const { refetch, data: products } = useProducts({
    smallX: position?.smallX,
    smallY: position?.smallY,
    bigX: position?.bigX,
    bigY: position?.bigY,
    size: 20
  });

  const handleResearch = () => {
    refetch();
    setMapMoved(false);
    setSelectedProductId(products[0].id);
  };

  return (
    isMapMoved && (
      <S.ResearchButton onClick={handleResearch}>현재 지도에서 숙소 재검색</S.ResearchButton>
    )
  );
};

export default Research;
