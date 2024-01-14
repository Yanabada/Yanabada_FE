import * as S from "./styles";

const DiscountChip = () => {
  return (
    <S.DiscountChipWrapper>
      <S.DiscountChipLeftSection>
        {/* FIXME: 추후 변수값으로 대체 예정 */}
        <S.LeftSectionText>선착순</S.LeftSectionText>
      </S.DiscountChipLeftSection>
      <S.DiscountChipRightSection>
        {/* FIXME: 추후 변수값으로 대체 예정 */}
        <S.RightSectionText>10%</S.RightSectionText>
      </S.DiscountChipRightSection>
    </S.DiscountChipWrapper>
  );
};

export default DiscountChip;
