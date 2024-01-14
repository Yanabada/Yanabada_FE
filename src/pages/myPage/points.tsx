import * as S from "./styles/points.styles";
import UpperNavBar from "@components/navBar/upperNavBar";
import InformationIcon from "@assets/icons/informationIcon.svg?react";
import Notice from "@components/notice";

const Points = () => {
  return (
    <>
      <UpperNavBar title="야놀자 포인트" type="back" rightElement={<InformationIcon />} />
      <S.PointsTopContainer>
        <Notice type="yanolja" content="야놀자 포인트를 야나바다에서 사용하실 수 있어요!" />
        <S.CompareCardWrapper>
          <S.LeftCompareCard>
            <S.CompareCardText>사용 가능한 포인트</S.CompareCardText>
            <S.PriceWrapper>
              <S.TextWrapper>
                {/* FIXME: 추후 변수값으로 대체 예정 */}
                <S.LeftPointText>99,999</S.LeftPointText>
                <S.PointText>P</S.PointText>
              </S.TextWrapper>
            </S.PriceWrapper>
          </S.LeftCompareCard>
          <S.RightCompareCard>
            <S.CompareCardText>15일 내 소멸 예정 포인트</S.CompareCardText>
            <S.PriceWrapper>
              <S.TextWrapper>
                {/* FIXME: 추후 변수값으로 대체 예정 */}
                <S.RightPointText>99,999</S.RightPointText>
                <S.PointText>P</S.PointText>
              </S.TextWrapper>
            </S.PriceWrapper>
          </S.RightCompareCard>
        </S.CompareCardWrapper>
      </S.PointsTopContainer>
    </>
  );
};

export default Points;
