import * as S from "./styles/history.styles";
import UpperNavBar from "@components/navBar/upperNavBar";
import ListCard from "@components/card/ListCard";

// FIXME: 모듈화
interface ManagementProps {
  width?: string;
}

const Management = ({ width }: ManagementProps) => {
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
            <S.MiddleRightText>승인취소</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>승인완료</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>
      <S.ListCardWrapper width={width}>
        <ListCard
          cardType="approval_request"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FV3YV8J1iK7a56Z5Q2ba~-NQViojN0kJgdWE8MeQKpBYmLk4wDjFDeFj7mfIQH7HttUF80b-fyEnZJlnyev0lLmhIjoQp7NF-dKd5Lz7VKout34e~0MWDj3YNBZtmg9m77v4gOvTcm-Hif2nd9FmX2SE436-Uv0wGV~LVFVhbP8K0QUhtbnADYBg0PJ71-P7Ub4lsbP59Q-kLIJk1-LRF2WTRyWexr9D2OmDsIsxN33Kq1hxol5VL9EbdDpHyt4T6djtVzuKs7HRdwhFcykM9REL6WTxY8PHpkASu5k9G--Il2AgAbvGjLG9XvK5Az8IWNN~hacp75q1TnNoyylsYQ__"
          accommodationName="떨이로 파는호텔"
          buyerInfo="구매자 : 구매자1234"
          saleDate="2024.01.06(토) 00:10"
          timerText="10시간 23분 후 판매 종료"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="승인요청"
        />
        <ListCard
          cardType="purchasedCanceled"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FV3YV8J1iK7a56Z5Q2ba~-NQViojN0kJgdWE8MeQKpBYmLk4wDjFDeFj7mfIQH7HttUF80b-fyEnZJlnyev0lLmhIjoQp7NF-dKd5Lz7VKout34e~0MWDj3YNBZtmg9m77v4gOvTcm-Hif2nd9FmX2SE436-Uv0wGV~LVFVhbP8K0QUhtbnADYBg0PJ71-P7Ub4lsbP59Q-kLIJk1-LRF2WTRyWexr9D2OmDsIsxN33Kq1hxol5VL9EbdDpHyt4T6djtVzuKs7HRdwhFcykM9REL6WTxY8PHpkASu5k9G--Il2AgAbvGjLG9XvK5Az8IWNN~hacp75q1TnNoyylsYQ__"
          accommodationName="떨이로 파는호텔"
          buyerInfo="구매자 : 개싸기지없는구매자"
          saleDate="2024.01.06(토) 00:10"
          statusText="판매 승인을 거절했어요"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="승인취소"
        />
        <ListCard
          cardType="purchasedCanceled"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FV3YV8J1iK7a56Z5Q2ba~-NQViojN0kJgdWE8MeQKpBYmLk4wDjFDeFj7mfIQH7HttUF80b-fyEnZJlnyev0lLmhIjoQp7NF-dKd5Lz7VKout34e~0MWDj3YNBZtmg9m77v4gOvTcm-Hif2nd9FmX2SE436-Uv0wGV~LVFVhbP8K0QUhtbnADYBg0PJ71-P7Ub4lsbP59Q-kLIJk1-LRF2WTRyWexr9D2OmDsIsxN33Kq1hxol5VL9EbdDpHyt4T6djtVzuKs7HRdwhFcykM9REL6WTxY8PHpkASu5k9G--Il2AgAbvGjLG9XvK5Az8IWNN~hacp75q1TnNoyylsYQ__"
          accommodationName="떨이로 파는호텔"
          buyerInfo="구매자 : 간잽이"
          saleDate="2024.01.05 (금) 23:50"
          statusText="구매자가 구매를 취소했어요"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="승인취소"
        />
        <ListCard
          cardType="approved"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/7d35/e595/ba1e4b6774a105487957b1570338b5b3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q9dHkPzBSvfhNoqfW12DuVqJTg5V0tDqHZdoWhnmDdw4msW8QEXSEEkR70oj8Il1IBhx1BBNcy29luTy634OXzFQwo~7Mnlc6m~TsR0l4frsZmoSl-n-5PIUQgShImvf554t9BeipOjEPBmCkB33Zag2sgwGIAUWaY-eh9jHSEKRNRXyCBy7sbtS3LAmNEzq8QZkXIxq8zlM6-j6NJ7a0D5loOSkJb5BaeQxWIARLuWh0zrrQaw0bEM~lgDiXFNtsV36SYC7oiUXETh8jW~LBoclwE4uETmf1V584pyXtTfWcvaZoF~~hNKWXOtFpBRMSwKTBxVKZoyNUcLMBoclJw__"
          accommodationName="돈벌레짱많은호텔"
          buyerInfo="구매자 : 구매자1234"
          saleDate="2024.01.06(토) 00:00"
          statusText="판매 완료되었어요."
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="승인취소"
        />
      </S.ListCardWrapper>
    </>
  );
};

export default Management;
