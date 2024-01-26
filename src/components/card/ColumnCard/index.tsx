import * as S from "./styles";
import MapIcon from "assets/map.svg?react";
import { RiTimerLine } from "react-icons/ri";
import { OptionCardType } from "@pages/home/components/SpecialServices";
import { formatDateTo } from "@utils/formatDateTo";
import { Link } from "react-router-dom";

interface ColumnCardProps {
  product: OptionCardType;
}

const ColumnCard = ({ product }: ColumnCardProps) => {
  return (
    <Link to={`/products/${product.id}`}>
      <S.Wrapper>
        <S.Container key={product.id}>
          <S.ImageContainer>
            <S.DiscountRate>
              {Math.floor(((product.price - product.sellingPrice) / product.price) * 100)}%
            </S.DiscountRate>
            <S.Image src={product.image} alt="숙소 이미지" />
            <S.LocationContainer>
              <MapIcon />
              <S.Location>{product.address.split(" ").slice(0, 2).join(" ")}</S.Location>
            </S.LocationContainer>
          </S.ImageContainer>
          <S.InformationContainer>
            <S.TimerContainer>
              <RiTimerLine className="TimeIcon" />
              <S.TimerText>{formatDateTo(product.saleEnd, "d일 HH시간 mm분")}</S.TimerText>
            </S.TimerContainer>
            <S.ProductContainer>
              <S.ProductName>{product.accommodationName}</S.ProductName>
              <S.RoomName>{product.roomName}</S.RoomName>
              <S.Period>
                {formatDateTo(product.checkIn)} ~ {formatDateTo(product.checkOut)}
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
    </Link>
  );
};

export default ColumnCard;
