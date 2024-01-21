import * as S from "./styles/history.styles";
import UpperNavBar from "@components/navBar/upperNavBar";
import ListCard from "@components/card/ListCard";

// FIXME: 모듈화
interface SalesHistoryProps {
  width?: string;
}

const SalesHistory = ({ width }: SalesHistoryProps) => {
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
            <S.MiddleRightText>판매대기</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>판매증</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>판매완료</S.MiddleRightText>
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
          cardType="approval_sale"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
          accommodationName="떨이로 파는호텔"
          timerText="10시간 23분 후 판매 종료"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="판매대기"
        />
        <ListCard
          cardType="sale"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/ec55/0b20/cd3d87263af872899977beed0e59b846?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPZC0RxMuxrVLVaTg5LisFbdDTii3EPRJ7EoNeEUHapPB6AGZH3xO1YgnlwBn1qTfrTZYtcAWS3aa1nKXVprCcLrOx2agmzawgpSpA1xbAQow-FmUyksl6XSG34IP9reryBmaqAhN6mIkDCbjp0hvkn6C8197UyXe0ugEPSEXkyytU4kaEuQIyXKd-bNp9aECl~rYDmpDeT1ShQDroCxXXsZHZzn14f553yxB2lhHMeekeiMe13uFNwnWp4MjYaRBxmWVmWPeNFSd0gPm19WRIrvHAxI4-wevNrYK1RboyMWPamhBI6cfzBaOiM0PLtScrx8F2OlDOksBvgjZ3noCg__"
          accommodationName="파라스파라 서울 더 그레이트 현대 런..."
          timerText="3일 15시간 23분 후 판매 종료"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="판매중"
        />
        <ListCard
          cardType="saleEnd"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/7d35/e595/ba1e4b6774a105487957b1570338b5b3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q9dHkPzBSvfhNoqfW12DuVqJTg5V0tDqHZdoWhnmDdw4msW8QEXSEEkR70oj8Il1IBhx1BBNcy29luTy634OXzFQwo~7Mnlc6m~TsR0l4frsZmoSl-n-5PIUQgShImvf554t9BeipOjEPBmCkB33Zag2sgwGIAUWaY-eh9jHSEKRNRXyCBy7sbtS3LAmNEzq8QZkXIxq8zlM6-j6NJ7a0D5loOSkJb5BaeQxWIARLuWh0zrrQaw0bEM~lgDiXFNtsV36SYC7oiUXETh8jW~LBoclwE4uETmf1V584pyXtTfWcvaZoF~~hNKWXOtFpBRMSwKTBxVKZoyNUcLMBoclJw__"
          accommodationName="파라스파라 서울 더 그레이트 현대..."
          statusText="판매 완료되었어요."
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="판매완료"
        />
        <ListCard
          cardType="saleCanceled"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/7c5b/34d1/fd605ca04796d6b472c0c8b127ab14ca?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V4dqYdMTyBdqJGyrNX5k6qYVauCvqdFDZAftZQpxEfJ8vrvPSnCt4mO5OpDzKU6o9p2cxAdU2lvCkMkjV65Cw10~a4Wf5MXsrwKKlqrwezjPHDsQvPk~mjthwVFgCdF0InrfDzdrHA92FZT70PiCOuFxrLnoiXRU~Abqr0-OO7rjJsk4ALCppHYP9rlfnJUKN9ZZVuzKbdrnBrhwoOHo4tuAfcTda15yPIeKZ9p2CgJQYKGAE8F9fjDxJxVGxDm5ZS455snGQdbByoRLYZpgBPKbZ6TCa1hZECXrNW24bTp2JweeCyzMOCGWU6ttEuHHDAnBkba-rUOaSmchSvrg9g__"
          accommodationName="망한 호텔"
          statusText="판매 완료되었어요."
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="판매취소"
        />
      </S.ListCardWrapper>
    </>
  );
};

export default SalesHistory;
