import * as S from "./styles";
import MapIcon from "assets/map.svg?react";
import { RiTimerLine } from "react-icons/ri";
// import { DeadLineProps } from "./types";
import { ProductType } from "@pages/products/types/productsType";

interface RowCardProps {
  props: string;
  data: ProductType[];
}

const RowCard = ({ props, data }: RowCardProps) => {
  return (
    <S.Wrapper>
      {data.map((product) => {
        const saleEndTime = new Date(product.saleEnd);
        const timeOut = new Date().getTime() - saleEndTime.getTime();

        const days = Math.floor(timeOut / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeOut % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeOut % (1000 * 60 * 60)) / (1000 * 60));
        return (
          <S.Container key={product.id}>
            <S.ImageContainer>
              {props === "마감임박" ? (
                <S.TimeOut>
                  <RiTimerLine />
                  <S.TimerOutText>
                    {days ? `${days}일 ${hours}시간 ${minutes}분` : `${hours}시간 ${minutes}분`}
                  </S.TimerOutText>
                </S.TimeOut>
              ) : (
                <S.DiscountRate>{product.salesPercentage}%</S.DiscountRate>
              )}
              <S.Image src={product.image} alt="숙소 이미지" />
              <S.LocationContainer>
                <MapIcon />
                <S.Location>{product.address.split(" ").slice(0, 2).join(" ")}</S.Location>
              </S.LocationContainer>
            </S.ImageContainer>
            <S.InformationContainer>
              <S.ProductContainer>
                <S.ProductName>{product.accommodationName}</S.ProductName>
                <S.RoomName>{product.roomName}</S.RoomName>
                <S.Period>
                  {product.checkIn.toString().slice(5)} ~ {product.checkOut.toString().slice(5)}
                </S.Period>
              </S.ProductContainer>
              {props === "높은할인율" && (
                <S.TimerContainer>
                  <RiTimerLine className="TimeIcon" />
                  <S.TimerText>3일 15시간 23분</S.TimerText>
                </S.TimerContainer>
              )}
              <S.PriceContainer className={`${props === "마감임박" ? "deadLine" : ""}`}>
                <S.Price>{new Intl.NumberFormat().format(product.price)}원</S.Price>
                <S.SellingContainer>
                  <S.SellingRate>
                    {Math.floor(((product.price - product.sellingPrice) / product.price) * 100)}%
                  </S.SellingRate>
                  <S.SellingPrice>
                    {new Intl.NumberFormat().format(product.sellingPrice)}원
                  </S.SellingPrice>
                </S.SellingContainer>
              </S.PriceContainer>
            </S.InformationContainer>
          </S.Container>
        );
      })}
    </S.Wrapper>
  );
};

export default RowCard;
