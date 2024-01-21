import * as S from "./styles/history.styles";
import UpperNavBar from "@components/navBar/upperNavBar";
import ListCard from "@components/card/ListCard";

// FIXME: 모듈화
interface PurchaseHistoryProps {
  width?: string;
}

const PurchaseHistory = ({ width }: PurchaseHistoryProps) => {
  return (
    <>
      <UpperNavBar title="구매내역" type="back" />
      <S.PointsMiddleContainer width={width}>
        <S.MiddleWrapper>
          <S.MiddleLeftText>전체</S.MiddleLeftText>
          <S.UnderLine />
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>승인대기</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>구매완료</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper>
            <S.MiddleRightText>구매취소</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>
      <S.ListCardWrapper width={width}>
        <ListCard
          cardType="approval_wait"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FV3YV8J1iK7a56Z5Q2ba~-NQViojN0kJgdWE8MeQKpBYmLk4wDjFDeFj7mfIQH7HttUF80b-fyEnZJlnyev0lLmhIjoQp7NF-dKd5Lz7VKout34e~0MWDj3YNBZtmg9m77v4gOvTcm-Hif2nd9FmX2SE436-Uv0wGV~LVFVhbP8K0QUhtbnADYBg0PJ71-P7Ub4lsbP59Q-kLIJk1-LRF2WTRyWexr9D2OmDsIsxN33Kq1hxol5VL9EbdDpHyt4T6djtVzuKs7HRdwhFcykM9REL6WTxY8PHpkASu5k9G--Il2AgAbvGjLG9XvK5Az8IWNN~hacp75q1TnNoyylsYQ__"
          accommodationName="떨이로 파는호텔"
          buyerInfo="판매자 : 강쥐사랑해"
          saleDate="2024.01.06(토) 00:10"
          timerText="10시간 23분 후 판매 종료"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="승인대기"
        />
        <ListCard
          cardType="purchasedCanceled"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/7a66/7ee4/66508d41dfc3fa07524137416d5ec5b6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPktuodFjKnh-LxKRr5ui0f6hu61xJIy09e3tWv6yii31FOYdSCYzdi1ck7qCqSS92Yl9l2LCGCUN91TsyGIEbhgAJSwB5ngZMQk5cktPEeXLLYwauh7CTpHUIczfhPT4FlpHCBR-s4W3osIlTj1844buMWiRIppA1JlW3FlqhmknDNxzPW18mBaXZ4wdU3iwcH~cWxqpfF~CUKYrRbOvd7UMl3e9aSajVwbMi2G~1-xPqlId94GhTXeyAErB3caAknZF8Bz11asHcpTESvPU2-D~aGU9lhd5nWkKcHxLVMfUWXFBf3-gxWzc2JWajqoXLfFM6if~uCGCaRoL2FHaQ__"
          accommodationName="아호텔이름짓기귀찮아"
          buyerInfo="판매자 : 럭셔리한인생살래"
          saleDate="2024.01.06(토) 00:10"
          statusText="구매를 취소했어요"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="구매취소"
        />
        <ListCard
          cardType="purchasedCanceled"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/7c5b/34d1/fd605ca04796d6b472c0c8b127ab14ca?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V4dqYdMTyBdqJGyrNX5k6qYVauCvqdFDZAftZQpxEfJ8vrvPSnCt4mO5OpDzKU6o9p2cxAdU2lvCkMkjV65Cw10~a4Wf5MXsrwKKlqrwezjPHDsQvPk~mjthwVFgCdF0InrfDzdrHA92FZT70PiCOuFxrLnoiXRU~Abqr0-OO7rjJsk4ALCppHYP9rlfnJUKN9ZZVuzKbdrnBrhwoOHo4tuAfcTda15yPIeKZ9p2CgJQYKGAE8F9fjDxJxVGxDm5ZS455snGQdbByoRLYZpgBPKbZ6TCa1hZECXrNW24bTp2JweeCyzMOCGWU6ttEuHHDAnBkba-rUOaSmchSvrg9g__"
          accommodationName="니가가라하와이호텔"
          buyerInfo="판매자 : 하와이안피자"
          saleDate="2024.01.06(토) 00:10"
          statusText="판매자가 승인을 거절했어요"
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="구매취소"
        />
        <ListCard
          cardType="purchased"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/e2d6/0971/a381c1d4da1df048d3f612a0e80c4bcd?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a5R8G5p78WK26T8gqsBIur5QgQPTlBfjiMlD5nn9vbsEBAueU5Z922dN0Xu4ciP8Wr9whJlfs13uxZhUXRClyQCXxBJDSb9trj5q05j3VXs8tgIimctKazKyJb1kgVQoWIQj6CMTf~TELD1Fcw6htaFXv3U2tln9G2m0HFHn-rZEfXiBO2gLK3zVXW6IoCe1~oF7b7-pwSRbSVa4wCHOpiXBWBoDcH1cSBZnP5Kv6aQCILj49rz~eic1T2zLpbR5hknJQYA7Xz6aGSZ7Z~Ha1UOADZQCgy5s0LtvVCPBRDqSwRMDzI6AG7r0ua46yfzPH~gwBUi5ze9Qbquggh98dQ__"
          accommodationName="똥냄새나는 호텔"
          buyerInfo="판매자 : 한국양돈연구회"
          saleDate="2023.12.1(월) 00:10"
          statusText="구매 완료되었어요."
          roomName="Forest Tower Deluxe King"
          price="800,000"
          badgeText="승인취소"
        />
      </S.ListCardWrapper>
    </>
  );
};

export default PurchaseHistory;
