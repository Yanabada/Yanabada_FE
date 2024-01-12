import * as S from "./style";
import MapIcon from "assets/map.svg?react";
import StarIcon from "assets/icons/Star.svg?react";
import { Product } from "@pages/products/types";

// FIXME: 임시로 Partial 부착
type ProductCardProps = Partial<
  Omit<Product, "latitude" | "longitude"> & { fullContent?: boolean }
>;

// FIXME: false -> true 로 변경
const ProductCard = ({ canNegotiate = false, fullContent = false }: ProductCardProps) => {
  return (
    <>
      <S.ItemContainer>
        <S.ImageContainer>
          <S.Image src="https://bit.ly/2Z4KKcF" />
          <S.DiscountRate>70%</S.DiscountRate>
          <S.LocationContainer>
            <MapIcon />
            <S.Location>강원도 강릉시</S.Location>
          </S.LocationContainer>
        </S.ImageContainer>
        <S.InformationContainer>
          <S.ProductName>속초 굿모닝 호텔 앤 리조트</S.ProductName>
          <S.RoomName>Forest Tower Deluxe King</S.RoomName>
          <S.Period>12/25 ~ 12/26 (1박)</S.Period>
          <S.StarUserContainer>
            {fullContent && (
              <S.StarContainer>
                <StarIcon />
                <S.StarRating>4.4</S.StarRating>
              </S.StarContainer>
            )}
            <S.UserContainer>
              <S.UserIcon />
              <S.UserNumber>기준 2명 / 최대 4명</S.UserNumber>
            </S.UserContainer>
          </S.StarUserContainer>
          <S.RightInnerContainer>
            <S.TimerNegoContainer>
              <S.TimerContainer>
                <S.TimerIcon />
                <S.TimerText>3일 15시간 23분</S.TimerText>
              </S.TimerContainer>

              <S.NegoText canNegotiate={canNegotiate}>
                {canNegotiate ? "가격제안가능" : "가격제안불가"}
              </S.NegoText>
            </S.TimerNegoContainer>
            <S.PriceContainer>
              <S.PriceText>원가</S.PriceText>
              <S.Price>2,000,000원</S.Price>
            </S.PriceContainer>
            <S.PriceContainer>
              <S.PriceText>구매가</S.PriceText>
              <S.Price>2,000,000원</S.Price>
            </S.PriceContainer>
            <S.PriceContainer>
              <S.PriceText>판매가</S.PriceText>
              <S.Price className="sellingPrice">1,264,000원</S.Price>
            </S.PriceContainer>
          </S.RightInnerContainer>
        </S.InformationContainer>
      </S.ItemContainer>

      <S.ItemContainer>
        <S.ImageContainer>
          <S.Image src="https://bit.ly/2Z4KKcF" />
          <S.DiscountRate>70%</S.DiscountRate>
          <S.LocationContainer>
            <MapIcon />
            <S.Location>강원도 강릉시</S.Location>
          </S.LocationContainer>
        </S.ImageContainer>
        <S.InformationContainer>
          <S.ProductName>속초 굿모닝 호텔 앤 리조트</S.ProductName>
          <S.RoomName>Forest Tower Deluxe King</S.RoomName>
          <S.Period>12/25 ~ 12/26 (1박)</S.Period>
          <S.StarUserContainer>
            <S.StarContainer>
              <StarIcon />
              <S.StarRating>4.4</S.StarRating>
            </S.StarContainer>
            <S.UserContainer>
              <S.UserIcon />
              <S.UserNumber>기준 2명 / 최대 4명</S.UserNumber>
            </S.UserContainer>
          </S.StarUserContainer>
          <S.RightInnerContainer>
            <S.TimerNegoContainer>
              <S.TimerContainer>
                <S.TimerIcon />
                <S.TimerText>3일 15시간 23분</S.TimerText>
              </S.TimerContainer>
              <S.NegoText canNegotiate={true}>가격제안가능</S.NegoText>
            </S.TimerNegoContainer>
            <S.PriceContainer>
              <S.PriceText>원가</S.PriceText>
              <S.Price>2,000,000원</S.Price>
            </S.PriceContainer>
            <S.PriceContainer>
              <S.PriceText>구매가</S.PriceText>
              <S.Price>2,000,000원</S.Price>
            </S.PriceContainer>
            <S.PriceContainer>
              <S.PriceText>판매가</S.PriceText>
              <S.Price className="sellingPrice">1,264,000원</S.Price>
            </S.PriceContainer>
          </S.RightInnerContainer>
        </S.InformationContainer>
      </S.ItemContainer>
    </>
  );
};

export default ProductCard;
