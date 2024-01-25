import * as S from "./styles";
import YanoljaIcon from "@assets/icons/YanoljaIcon.svg?react";

interface PayInfoProps {
  divType: "payInfo" | "transactionInfo" | "payInfo-tall";
  width?: string;
  imageURL?: string;
  yanoljaPurchasePrice?: string | null;
  yanabadaPurchasePrice?: string | null;
  discountRate?: number;
  discountPrice?: string | null;
  from: string;
  payMethod?: string;
  accommodationName?: string;
  roomName?: string;
  orderNumber?: string;
  buyer?: string;
  seller?: string;
  orderDate?: string;
  charge?: string;
}

const Info = ({ ...props }: PayInfoProps) => {
  const textContent =
    props.from === "sale"
      ? "야나바다 판매가"
      : props.from === "purchase" || props.from === "cancel"
        ? "야나바다 구매가"
        : "";

  const buyerOrSeller =
    props.from === "sale"
      ? "구매자"
      : props.from === "purchase" || props.from === "cancel"
        ? "판매자"
        : "";

  switch (props.divType) {
    case "payInfo":
    case "payInfo-tall":
      return (
        <S.InfoWrapper divType={props.divType} width={props.width}>
          <S.TopWrapper>
            <S.TopLabel>결제 정보</S.TopLabel>
          </S.TopWrapper>
          <S.SeperationForm>
            <S.FormLeftText color="gray">야놀자 구매가</S.FormLeftText>
            <S.FormRightPrice color="black">{props.yanoljaPurchasePrice}원</S.FormRightPrice>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormTextWrapper>
              <S.FormLeftText color="gray">양도할인가</S.FormLeftText>
              <S.FormLeftText color="blue">({props.discountRate}% 할인)</S.FormLeftText>
            </S.FormTextWrapper>
            <S.FormRightPrice color="gray">-{props.discountPrice}원</S.FormRightPrice>
          </S.SeperationForm>

          {props.from === "purchase" || props.from === "cancel" ? (
            <S.SeperationForm>
              <S.FormTextWrapper>
                <S.FormLeftText color="gray">수수료</S.FormLeftText>
                <S.FormLeftText color="red">(야놀자페이 무료)</S.FormLeftText>
              </S.FormTextWrapper>
              <S.FormRightPrice color="gray">{props.charge}원</S.FormRightPrice>
            </S.SeperationForm>
          ) : null}

          <S.SeperationForm isBorder={true}>
            <S.FormLeftTextBold>{textContent}</S.FormLeftTextBold>
            <S.FormRightPrice color="blue">{props.yanabadaPurchasePrice}원</S.FormRightPrice>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormLeftText>결제수단</S.FormLeftText>
            <S.FormRightText>{props.payMethod}</S.FormRightText>
          </S.SeperationForm>
        </S.InfoWrapper>
      );
    case "transactionInfo":
      return (
        <S.InfoWrapper divType={props.divType} width={props.width}>
          <S.TopWrapper width={props.width}>
            <S.TopLabel>거래 정보</S.TopLabel>
            {props.from === "purchase" || props.from === "cancel" ? (
              <S.ShortcutWrapper>
                <S.ShortcutText>야놀자 바로가기</S.ShortcutText>
                <YanoljaIcon />
              </S.ShortcutWrapper>
            ) : null}
          </S.TopWrapper>
          <S.MiddleWrapper isBorder={true}>
            <S.FormLeftText color="gray">상품명</S.FormLeftText>
            <S.MiddleBottomWrapper>
              <S.ImageWrapper imageURL={props.imageURL} />
              <S.MiddleBottomRightWrapper>
                <S.AccomodationName>{props.accommodationName}</S.AccomodationName>
                <S.RoomName>{props.roomName}</S.RoomName>
              </S.MiddleBottomRightWrapper>
            </S.MiddleBottomWrapper>
          </S.MiddleWrapper>
          <S.SeperationForm>
            <S.FormLeftText>주문번호</S.FormLeftText>
            <S.FormRightText>{props.orderNumber}</S.FormRightText>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormLeftText>{buyerOrSeller}</S.FormLeftText>
            <S.FormRightText>
              {props.from === "purchase" || props.from === "cancel" ? props.seller : props.buyer}
            </S.FormRightText>
          </S.SeperationForm>
          <S.SeperationForm>
            <S.FormLeftText>주문일시</S.FormLeftText>
            <S.FormRightText>{props.orderDate}</S.FormRightText>
          </S.SeperationForm>
        </S.InfoWrapper>
      );
  }
};

export default Info;
