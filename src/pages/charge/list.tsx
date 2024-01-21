import * as S from "./styles/list";

import { useState } from "react";
import { Link } from "react-router-dom";

import NoPointIcon from "@assets/icons/noPointIcon.svg?react";
import UpperNavBar from "@components/navBar/upperNavBar";
import CardSectionButton from "@components/buttons/CardSectionButton";

const PointsMiddleTabList = () => {
  const [isPointExist] = useState(true);

  return (
    <>
      <UpperNavBar title={"야놀자 페이 이용내역"} type="back" />
      <S.CardWrapper>
        <CardSectionButton buttonType="abledPay" width={"100%"} />
      </S.CardWrapper>
      <S.PointsMiddleContainer>
        <S.MiddleWrapper>
          <Link to="/">
            <>
              <S.MiddleLeftText>전체내역</S.MiddleLeftText>
              <S.UnderLine />
            </>
          </Link>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <Link to="/">
            <S.MiddleTextWrapper>
              <S.MiddleRightText>거래내역</S.MiddleRightText>
            </S.MiddleTextWrapper>
          </Link>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <Link to="/">
            <S.MiddleTextWrapper>
              <S.MiddleRightText>충전/인출내역</S.MiddleRightText>
            </S.MiddleTextWrapper>
          </Link>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>

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
            <NoPointIcon />
            <S.NoItemText>최근 1년간 기록된 포인트 내역이 없습니다.</S.NoItemText>
          </S.NoItemWrapper>
        </S.PointsBottomContainer>
      )}
    </>
  );
};

export default PointsMiddleTabList;
