import * as S from "./style";
import StarIcon from "@assets/icons/Star.svg?react";
import { reviewList } from "@pages/productDetail/constants/review";

const Review = () => {
  const getRandomStarRating = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  return (
    <S.Container>
      <S.Text>후기</S.Text>
      <S.ReviewContainer>
        {reviewList.map((review) => (
          <S.ReviewItemContainer key={review.id}>
            <S.NickNameContainer>
              <S.NickName>{review.nickName}</S.NickName>
              <S.StarContainer>
                {Array.from({ length: getRandomStarRating() }).map((_, starIndex) => (
                  <StarIcon key={starIndex} />
                ))}
              </S.StarContainer>
            </S.NickNameContainer>
            <S.Description>{review.description}</S.Description>
          </S.ReviewItemContainer>
        ))}
      </S.ReviewContainer>
    </S.Container>
  );
};

export default Review;
