import * as S from "../../styles/pointsMiddleTab.styles";
import { useState } from "react";
import NoPointIcon from "@assets/icons/noPointIcon.svg?react";
import { Link } from "react-router-dom";

// FIXME: 모듈화
interface PointsMiddleTabProps {
  width?: string;
}

const PointsMiddleTabList = ({ width }: PointsMiddleTabProps) => {
  const [isPointExist] = useState(true);

  return (
    <>
      <S.PointsMiddleContainer width={width}>
        <S.MiddleWrapper>
          <Link to="/mypage/points/list">
            <>
              <S.MiddleLeftText>전체내역</S.MiddleLeftText>
              <S.UnderLine />
            </>
          </Link>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <Link to="/mypage/points/disappear">
            <S.MiddleTextWrapper>
              <S.MiddleRightText>소멸예정</S.MiddleRightText>
            </S.MiddleTextWrapper>
          </Link>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>

      <S.SectionDescriptionWrapper width={width}>
        <S.ListMessageWrapper>
          <S.MessageText>최근 1년간 적립/사용/소멸된 포인트 내역을 확인하세요.</S.MessageText>
        </S.ListMessageWrapper>
      </S.SectionDescriptionWrapper>

      {isPointExist ? (
        <S.PointsBottomContainer>
          <S.PointList width={width}>
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

          <S.PointList width={width}>
            <S.PointListRow>
              <S.MinusReason>이러한 이유로 포인트를 사용했습니다</S.MinusReason>
              <S.MinusPoint>-5,000</S.MinusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.Date>2020-12-28</S.Date>
              <S.DueDate>~2024-12-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>

          <S.PointList width={width}>
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

          <S.PointList width={width}>
            <S.PointListRow>
              <S.MinusReason>이러한 이유로 포인트를 사용했습니다</S.MinusReason>
              <S.MinusPoint>-5,000</S.MinusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.Date>2020-12-28</S.Date>
              <S.DueDate>~2024-12-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>

          <S.PointList width={width}>
            <S.PointListRow>
              <S.MinusReason>이러한 이유로 포인트를 사용했습니다</S.MinusReason>
              <S.MinusPoint>-5,000</S.MinusPoint>
            </S.PointListRow>
            <S.PointListRow>
              <S.Date>2020-12-28</S.Date>
              <S.DueDate>~2024-12-31 까지</S.DueDate>
            </S.PointListRow>
          </S.PointList>

          <S.PointList width={width}>
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

          <S.PointList width={width}>
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

          <S.PointList width={width}>
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

          <S.PointList width={width}>
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
            <NoPointIcon />
            <S.NoItemText>최근 1년간 기록된 포인트 내역이 없습니다.</S.NoItemText>
          </S.NoItemWrapper>
        </S.PointsBottomContainer>
      )}
    </>
  );
};

export default PointsMiddleTabList;
