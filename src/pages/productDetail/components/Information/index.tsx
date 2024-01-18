import * as S from "./style";
import { AccommodationInfoType } from "@pages/productDetail/types/detailType";

interface AccommodationInfoProps {
  accommodationInfo: AccommodationInfoType;
}

const Information = ({ accommodationInfo }: AccommodationInfoProps) => {
  return (
    <S.Container>
      <S.Text>숙소 소개</S.Text>
      <S.Description>{accommodationInfo.description}</S.Description>
    </S.Container>
  );
};

export default Information;
