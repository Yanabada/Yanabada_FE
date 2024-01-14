import * as S from "./styles";
import YanoljaIcon from "@assets/icons/YanoljaIcon.svg?react";

interface PayInfoProps {
  divType: "payInfo" | "transactionInfo" | "payInfo-tall";
  width?: string;
  imageURL?: string;
  yanoljaPurchasePrice?: string;
  yanabadaPurchasePrice?: string;
  discountRate?: number;
  discountPrice?: string;
  from?: string;
  payMethod?: string;
  accommodationName?: string;
  roomName?: string;
  orderNumber?: string;
  buyer?: string;
  orderDate?: string;
  charge?: string;
}

const Info = ({
  divType,
  width,
  imageURL,
  yanoljaPurchasePrice,
  yanabadaPurchasePrice,
  discountRate,
  discountPrice,
  from,
  payMethod,
  accommodationName,
  roomName,
  orderNumber,
  buyer,
  orderDate,
  charge
}: PayInfoProps) => {
  const textContent =
    from === "sale"
      ? "야나바다 판매가"
      : from === "purchase" || from === "cancel"
        ? "야나바다 구매가"
        : "";

  switch (divType) {
    case "payInfo":
    case "payInfo-tall":
      return (
        <S.InfoWrapper divType={divType} width={width}>
          <S.TopWrapper>
            <S.TopLabel>결제 정보</S.TopLabel>
          </S.TopWrapper>
          <S.SeperationForm>
            <S.FormLeftText color="gray">야놀자 구매가</S.FormLeftText>
            <S.FormRightPrice color="black">{yanoljaPurchasePrice}원</S.FormRightPrice>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormTextWrapper>
              <S.FormLeftText color="gray">양도할인가</S.FormLeftText>
              <S.FormLeftText color="blue">({discountRate}% 할인)</S.FormLeftText>
            </S.FormTextWrapper>
            <S.FormRightPrice color="gray">-{discountPrice}원</S.FormRightPrice>
          </S.SeperationForm>

          {from === "purchase" || from === "cancel" ? (
            <S.SeperationForm>
              <S.FormTextWrapper>
                <S.FormLeftText color="gray">수수료</S.FormLeftText>
                <S.FormLeftText color="red">(야놀자페이 무료)</S.FormLeftText>
              </S.FormTextWrapper>
              <S.FormRightPrice color="gray">{charge}원</S.FormRightPrice>
            </S.SeperationForm>
          ) : null}

          <S.SeperationForm isBorder={true}>
            <S.FormLeftTextBold>{textContent}</S.FormLeftTextBold>
            <S.FormRightPrice color="blue">{yanabadaPurchasePrice}원</S.FormRightPrice>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormLeftText>결제수단</S.FormLeftText>
            <S.FormRightText>{payMethod}</S.FormRightText>
          </S.SeperationForm>
        </S.InfoWrapper>
      );
    case "transactionInfo":
      return (
        <S.InfoWrapper divType={divType} width={width}>
          <S.TopWrapper width={width}>
            <S.TopLabel>거래 정보</S.TopLabel>
            {from === "purchase" || from === "cancel" ? (
              <S.ShortcutWrapper>
                <S.ShortcutText>야놀자 바로가기</S.ShortcutText>
                <YanoljaIcon />
              </S.ShortcutWrapper>
            ) : null}
          </S.TopWrapper>
          <S.MiddleWrapper isBorder={true}>
            <S.FormLeftText color="gray">상품명</S.FormLeftText>
            <S.MiddleBottomWrapper>
              <S.ImageWrapper imageURL={imageURL} />
              <S.MiddleBottomRightWrapper>
                <S.AccomodationName>{accommodationName}</S.AccomodationName>
                <S.RoomName>{roomName}</S.RoomName>
              </S.MiddleBottomRightWrapper>
            </S.MiddleBottomWrapper>
          </S.MiddleWrapper>
          <S.SeperationForm>
            <S.FormLeftText>주문번호</S.FormLeftText>
            <S.FormRightText>{orderNumber}</S.FormRightText>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormLeftText>구매자</S.FormLeftText>
            <S.FormRightText>{buyer}</S.FormRightText>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormLeftText>주문일시</S.FormLeftText>
            <S.FormRightText>{orderDate}</S.FormRightText>
          </S.SeperationForm>
        </S.InfoWrapper>
      );
  }
};

export default Info;
