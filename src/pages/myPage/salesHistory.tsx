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
            <S.MiddleRightText>승인예정</S.MiddleRightText>
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
      <ListCard
        cardType="sale"
        width="100%"
        imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
      />
      <ListCard
        cardType="saleCanceled"
        width="100%"
        imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
      />
      <ListCard
        cardType="saleEnd"
        width="100%"
        imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
      />
    </>
  );
};

export default SalesHistory;
