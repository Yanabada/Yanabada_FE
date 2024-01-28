import * as S from "./styles";

const DiscountChip = () => {
  return (
    <S.DiscountChipWrapper>
      <S.DiscountChipLeftSection>
        <S.LeftSectionText>선착순</S.LeftSectionText>
      </S.DiscountChipLeftSection>
      <S.DiscountChipRightSection>
        <S.RightSectionText>10%</S.RightSectionText>
      </S.DiscountChipRightSection>
    </S.DiscountChipWrapper>
  );
};

export default DiscountChip;
