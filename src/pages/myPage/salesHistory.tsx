import * as S from "./styles/salesHistory.styles";
import { Link } from "react-router-dom";
import UpperNavBar from "@components/navBar/upperNavBar";

// FIXME: 모듈화
interface PointsMiddleTabProps {
  width?: string;
}

const SalesHistory = ({ width }: PointsMiddleTabProps) => {
  return (
    <>
      <UpperNavBar title="판매내역" type="back" />
      <S.PointsMiddleContainer width={width}>
        <S.MiddleWrapper>
          <Link to="/mypage/points/list">
            <>
              <S.MiddleLeftText>전체</S.MiddleLeftText>
              <S.UnderLine />
            </>
          </Link>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <Link to="/mypage/points/disappear">
            <S.MiddleTextWrapper>
              <S.MiddleRightText>승인예정</S.MiddleRightText>
            </S.MiddleTextWrapper>
          </Link>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <Link to="/mypage/points/disappear">
            <S.MiddleTextWrapper>
              <S.MiddleRightText>판매완료</S.MiddleRightText>
            </S.MiddleTextWrapper>
          </Link>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <Link to="/mypage/points/disappear">
            <S.MiddleTextWrapper>
              <S.MiddleRightText>판매중</S.MiddleRightText>
            </S.MiddleTextWrapper>
          </Link>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <Link to="/mypage/points/disappear">
            <S.MiddleTextWrapper>
              <S.MiddleRightText>판매취소</S.MiddleRightText>
            </S.MiddleTextWrapper>
          </Link>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>
    </>
  );
};

export default SalesHistory;
