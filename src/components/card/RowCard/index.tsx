import * as S from "./styles";
import MapIcon from "assets/map.svg?react";
import { RiTimerLine } from "react-icons/ri";
import { DeadLineProps } from "./types";

const RowCard = (props: DeadLineProps) => {
  const products = [
    {
      id: 1,
      image: "https://bit.ly/2Z4KKcF",
      accommodationName: "파라스파라 서울 더 그레이트 현대 런던1",
      roomName: "Forest Tower Deluxe King",
      checkIn: "01/10",
      checkOut: "01/13",
      price: 1029000,
      sellingPrice: 264000
    },
    {
      id: 2,
      image: "https://bit.ly/2Z4KKcF",
      accommodationName: "파라스파라 서울 더 그레이트 현대 런던2",
      roomName: "Forest Tower Deluxe King",
      checkIn: "01/12",
      checkOut: "01/13",
      price: 2000000,
      sellingPrice: 1500000
    }
  ];

  return (
    <S.Wrapper>
      {products.map((product) => (
        <S.Container key={product.id}>
          <S.ImageContainer>
            {props.props === "마감임박" ? (
              <S.TimeOut>
                <RiTimerLine />
                <S.TimerOutText>5시간 23분</S.TimerOutText>
              </S.TimeOut>
            ) : (
              <S.DiscountRate>
                {Math.floor(((product.price - product.sellingPrice) / product.price) * 100)}%
              </S.DiscountRate>
            )}
            <S.Image src="https://bit.ly/2Z4KKcF'" alt="숙소 이미지" />
            <S.LocationContainer>
              <MapIcon />
              <S.Location>강원도 강릉시</S.Location>
            </S.LocationContainer>
          </S.ImageContainer>
          <S.InformationContainer>
            <S.ProductContainer>
              <S.ProductName>{product.accommodationName}</S.ProductName>
              <S.RoomName>{product.roomName}</S.RoomName>
              <S.Period>
                {product.checkIn} ~ {product.checkOut}
              </S.Period>
            </S.ProductContainer>
            {props.props === "높은할인율" && (
              <S.TimerContainer>
                <RiTimerLine className="TimeIcon" />
                <S.TimerText>3일 15시간 23분</S.TimerText>
              </S.TimerContainer>
            )}
            <S.PriceContainer className={`${props.props === "마감임박" ? "deadLine" : ""}`}>
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
      ))}
    </S.Wrapper>
  );
};

export default RowCard;
