import * as S from "./styles";

interface PayInfoProps {
  divType: "payInfo" | "transactionInfo";
  width?: string;
  imageURL?: string;
}

const Info = ({ divType, width, imageURL }: PayInfoProps) => {
  switch (divType) {
    case "payInfo":
      return (
        <S.InfoWrapper divType={divType} width={width}>
          <S.TopWrapper>
            <S.TopLabel>결제 정보</S.TopLabel>
          </S.TopWrapper>
          <S.SeperationForm>
            <S.FormLeftText color="gray">야놀자 구매가</S.FormLeftText>
            <S.FormRightPrice color="black">1,200,000원</S.FormRightPrice>
          </S.SeperationForm>
          <S.SeperationForm isBorder={true}>
            <S.FormTextWrapper>
              <S.FormLeftText color="gray">양도할인가</S.FormLeftText>
              <S.FormLeftText color="blue">(50% 할인)</S.FormLeftText>
            </S.FormTextWrapper>
            <S.FormRightPrice color="gray">-600,000원</S.FormRightPrice>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormLeftTextBold>야나바다 판매가</S.FormLeftTextBold>
            <S.FormRightPrice color="blue">600,000원</S.FormRightPrice>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormLeftText>결제수단</S.FormLeftText>
            <S.FormRightText>야놀자페이</S.FormRightText>
          </S.SeperationForm>
        </S.InfoWrapper>
      );
    case "transactionInfo":
      return (
        <S.InfoWrapper divType={divType} width={width}>
          <S.TopWrapper>
            <S.TopLabel>거래 정보</S.TopLabel>
          </S.TopWrapper>
          <S.MiddleWrapper isBorder={true}>
            <S.FormLeftText color="gray">상품명</S.FormLeftText>
            <S.MiddleBottomWrapper>
              <S.ImageWrapper imageURL={imageURL} />
              <S.MiddleBottomRightWrapper>
                <S.AccomodationName>파라스파라 서울 더 그레이트 현대 런던 호텔</S.AccomodationName>
                <S.RoomName>Forest Tower Deluxe King</S.RoomName>
              </S.MiddleBottomRightWrapper>
            </S.MiddleBottomWrapper>
          </S.MiddleWrapper>
          <S.SeperationForm>
            <S.FormLeftText>주문번호</S.FormLeftText>
            <S.FormRightText>00000000</S.FormRightText>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormLeftText>구매자</S.FormLeftText>
            <S.FormRightText>USER12345</S.FormRightText>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormLeftText>주문일시</S.FormLeftText>
            <S.FormRightText>2024.01.06(토) 00:00</S.FormRightText>
          </S.SeperationForm>
        </S.InfoWrapper>
      );
  }
};

export default Info;
