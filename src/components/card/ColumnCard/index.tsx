import * as S from "./styles";
import MapIcon from "assets/map.svg?react";
import { RiTimerLine } from "react-icons/ri";
import { OptionCardType } from "@pages/home/components/SpecialServices";

interface ColumnCardProps {
  product: OptionCardType;
}

const ColumnCard = ({ product }: ColumnCardProps) => {
  return (
    <S.Wrapper>
      <S.Container key={product.id}>
        <S.ImageContainer>
          <S.DiscountRate>
            {Math.floor(((product.price - product.sellingPrice) / product.price) * 100)}%
          </S.DiscountRate>
          <S.Image src="https://bit.ly/2Z4KKcF'" alt="숙소 이미지" />
          <S.LocationContainer>
            <MapIcon />
            <S.Location>강원도 강릉시</S.Location>
          </S.LocationContainer>
        </S.ImageContainer>
        <S.InformationContainer>
          <S.TimerContainer>
            <RiTimerLine className="TimeIcon" />
            <S.TimerText>3일 15시간 23분</S.TimerText>
          </S.TimerContainer>
          <S.ProductContainer>
            <S.ProductName>{product.accommodationName}</S.ProductName>
            <S.RoomName>{product.roomName}</S.RoomName>
            <S.Period>
              {product.checkIn.toLocaleDateString()} ~ {product.checkOut.toLocaleDateString()}
            </S.Period>
          </S.ProductContainer>
        </S.InformationContainer>
        <S.PriceContainer>
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
      </S.Container>
    </S.Wrapper>
  );
};

export default ColumnCard;
