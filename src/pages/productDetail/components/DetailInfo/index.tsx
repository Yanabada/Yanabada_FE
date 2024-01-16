import * as S from "./style";
import { DetailType } from "@pages/productDetail/types/detailType";
import StarIcon from "assets/icons/Star.svg?react";
import { numberFormat } from "@utils/numberFormat";

interface DetailProps {
  data: DetailType;
}

const categoryList = [
  { id: "HOTEL_RESORT", name: "호텔/리조트" },
  { id: "MOTEL", name: "모텔" },
  { id: "PENSION", name: "펜션" },
  { id: "GUESTHOUSE", name: "게스트하우스" },
  { id: "POOL_VILLA", name: "풀빌라" }
];

const DetailInfo = ({ data }: DetailProps) => {
  const accommodationInfo = data.accommodationInfo;
  const roomInfo = data.roomInfo;

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image src={accommodationInfo.image} />
        <S.ImageCounterContainer>
          <p>01</p>
          <p className="second">&nbsp;/&nbsp;02</p>
        </S.ImageCounterContainer>
      </S.ImageContainer>
      <S.InfoContainer>
        <S.StarContainer>
          <StarIcon />
          <S.StarRating>{roomInfo.rating}</S.StarRating>
          <S.StarRating>(2,242)</S.StarRating>
          <S.Category>
            ·&nbsp;
            {categoryList.find((item) => item.id === accommodationInfo.category)?.name}
          </S.Category>
        </S.StarContainer>
        <S.ProductName>{accommodationInfo.name}</S.ProductName>
        <S.RoomName>{roomInfo.name}</S.RoomName>
        <S.UserContainer>
          <S.UserIcon />
          <S.User>
            기준 {roomInfo.minHeadCount}명 / 최대 {roomInfo.maxHeadCount}명
          </S.User>
        </S.UserContainer>
        <S.GuideText>예약된 인원 구성과 다를 시 추가 요금이 발생할 수 있습니다.</S.GuideText>
        <S.CheckContainer>
          <S.CheckInnerContainer className="checkIn">
            <S.CheckText>체크인</S.CheckText>
            <S.CheckInText>{data.checkInDate.toString()}</S.CheckInText>
            <S.CheckTimeText>{roomInfo.checkInTime}</S.CheckTimeText>
          </S.CheckInnerContainer>
          <S.Line />
          <S.CheckInnerContainer className="checkOut">
            <S.CheckText>체크아웃</S.CheckText>
            <S.CheckInText>{data.checkOutDate.toString()}</S.CheckInText>
            <S.CheckTimeText>{roomInfo.checkOutTime}</S.CheckTimeText>
          </S.CheckInnerContainer>
        </S.CheckContainer>
      </S.InfoContainer>
      <S.PriceContainer>
        <S.PriceInnerContainer>
          <S.PriceText>원가</S.PriceText>
          <S.Price>{numberFormat(data.price)}원</S.Price>
        </S.PriceInnerContainer>
        <S.PriceInnerContainer>
          <S.PriceText>구매가</S.PriceText>
          <S.Price>{numberFormat(data.purchasePrice)}원</S.Price>
        </S.PriceInnerContainer>
        <S.PriceInnerContainer className="selling">
          <S.PriceText>판매가</S.PriceText>
          <S.SaleRate>{data.salesPercentage}%</S.SaleRate>
          <S.Price className="sellingPrice">{numberFormat(data.sellingPrice)}원</S.Price>
        </S.PriceInnerContainer>
      </S.PriceContainer>
    </S.Container>
  );
};

export default DetailInfo;
