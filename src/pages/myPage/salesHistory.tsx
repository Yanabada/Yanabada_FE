import * as S from "./styles/salesHistory.styles";
import { Link } from "react-router-dom";
import UpperNavBar from "@components/navBar/upperNavBar";
import ListCard from "@components/card/ListCard";

// FIXME: 모듈화
interface PointsMiddleTabProps {
  width?: string;
}

const SalesHistory = ({ width }: PointsMiddleTabProps) => {
  return (
    <>
      <UpperNavBar title="판매내역" type="back" />
      <ListCard
        cardType="purchasedCanceled"
        width="100%"
        imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
      />
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
