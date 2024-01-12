import * as S from "./styles/points.styles";
import UpperNavBar from "@components/navBar/upperNavBar";
import InformationIcon from "@assets/icons/informationIcon.svg?react";
import Notice from "@components/notice";
import { useState } from "react";
import NoItemIcon from "@assets/icons/noItemIcon.svg?react";
import PointsMiddleTab from "./components/PointsMiddleTab";

const Points = () => {
  const [isPointExist] = useState(false);
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
      <S.PointsMiddleContainer>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleLeftText>전체내역</S.MiddleLeftText>
            <S.UnderLine />
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>소멸예정</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>

      <PointsMiddleTab />

      {isPointExist ? (
        <S.PointsBottomContainer>
          <S.PointList>
            <S.PointListRow>
              <S.PlusReason>이러한 이유로 포인트를 적립했습니다</S.PlusReason>
              <S.PlusPoint>+5,000</S.PlusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.EventName>이러한 이벤트</S.EventName>
              <S.Date>2020-12-28</S.Date>
              <S.DueDate>~2024-12-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>

          <S.PointList>
            <S.PointListRow>
              <S.MinusReason>이러한 이유로 포인트를 사용했습니다</S.MinusReason>
              <S.MinusPoint>-5,000</S.MinusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.Date>2020-12-28</S.Date>
              <S.DueDate>~2024-12-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>

          <S.PointList>
            <S.PointListRow>
              <S.PlusReason>이러한 이유로 포인트를 적립했습니다</S.PlusReason>
              <S.PlusPoint>+5,000</S.PlusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.EventName>이러한 이벤트</S.EventName>
              <S.Date>2020-12-28</S.Date>
              <S.DueDate>~2024-12-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>

          <S.PointList>
            <S.PointListRow>
              <S.MinusReason>이러한 이유로 포인트를 사용했습니다</S.MinusReason>
              <S.MinusPoint>-5,000</S.MinusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.Date>2020-12-28</S.Date>
              <S.DueDate>~2024-12-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>

          <S.PointList>
            <S.PointListRow>
              <S.MinusReason>이러한 이유로 포인트를 사용했습니다</S.MinusReason>
              <S.MinusPoint>-5,000</S.MinusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.Date>2020-12-28</S.Date>
              <S.DueDate>~2024-12-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>

          <S.PointList>
            <S.PointListRow>
              <S.PlusReason>이러한 이유로 포인트를 적립했습니다</S.PlusReason>
              <S.PlusPoint>+5,000</S.PlusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.EventName>이러한 이벤트</S.EventName>
              <S.Date>2020-12-28</S.Date>
              <S.DueDate>~2024-12-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>

          <S.PointList>
            <S.PointListRow>
              <S.PlusReason>이러한 이유로 포인트를 적립했습니다</S.PlusReason>
              <S.PlusPoint>+5,000</S.PlusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.EventName>이러한 이벤트</S.EventName>
              <S.Date>2020-12-28</S.Date>
              <S.DueDate>~2024-12-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>
        </S.PointsBottomContainer>
      ) : (
        <S.PointsBottomContainer>
          <S.NoItemWrapper>
            <NoItemIcon />
            <S.NoItemText>최근 1년간 기록된 포인트 내역이 없습니다.</S.NoItemText>
          </S.NoItemWrapper>
        </S.PointsBottomContainer>
      )}
    </>
  );
};

export default Points;
