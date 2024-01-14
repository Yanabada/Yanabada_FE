import * as S from "./styles/salesHistory.styles";
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
      <S.PointsMiddleContainer width={width}>
        <S.MiddleWrapper>
          <S.MiddleLeftText>전체</S.MiddleLeftText>
          <S.UnderLine />
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>승인요청</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>판매완료</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>판매중</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>판매취소</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>
      <S.ListCardWrapper width={width}>
        <ListCard
          cardType="sale"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
          accommodationName="파라스파라 서울 더 그레이트 현대..."
          timerText="3일 15시간 23분"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="판매중"
        />
        <ListCard
          cardType="saleCanceled"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
          accommodationName="파라스파라 서울 더 그레이트 현대..."
          buyerInfo="승인 거절 / 판매 종료에 의한 취소"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="취소"
        />
        <ListCard
          cardType="saleEnd"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
          accommodationName="파라스파라 서울 더 그레이트 현대..."
          buyerInfo="물건구매자닉네임 | 야놀자페이 결제"
          saleDate="2024.01.06(토) 00:00"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="판매완료"
        />
      </S.ListCardWrapper>
    </>
  );
};

export default SalesHistory;
