import * as S from "./style";
import MapIcon from "assets/map.svg?react";
import StarIcon from "assets/icons/Star.svg?react";
import { Link } from "react-router-dom";
import { ProductType } from "@pages/products/types/productsType";
import { numberFormat } from "@utils/numberFormat";
import CheckStore from "@pages/products/stores/checkStore";
import { formatDateTo } from "@utils/formatDateTo";

type Product = Omit<ProductType, "latitude" | "longitude">;

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { isCheck } = CheckStore();

  return (
    <S.Container>
      <Link to={`/products/${product.id}`}>
        <S.ItemContainer>
          <S.ImageContainer>
            <S.Image src={product.image} />
            {!isCheck && product.status === "SOLD_OUT" && (
              <S.ImageOverlay>판매 완료</S.ImageOverlay>
            )}
            {product.status === "BOOKING" && <S.ImageOverlay>예약중</S.ImageOverlay>}
            <S.DiscountRate>{product.salesPercentage}%</S.DiscountRate>
            <S.LocationContainer>
              <MapIcon />
              <S.Location>{product.address.split(" ").slice(0, 2).join(" ")}</S.Location>
            </S.LocationContainer>
          </S.ImageContainer>
          <S.InformationContainer>
            <S.ProductName>{product.accommodationName}</S.ProductName>
            <S.RoomName>{product.roomName}</S.RoomName>
            <S.Period>
              {formatDateTo(product.checkIn)} ~ {formatDateTo(product.checkOut)} (1박)
            </S.Period>
            <S.StarUserContainer>
              <S.StarContainer>
                <StarIcon />
                <S.StarRating>{product.rating}</S.StarRating>
              </S.StarContainer>
              <S.UserContainer>
                <S.UserIcon />
                <S.UserNumber>
                  기준 {product.min}명 / 최대 {product.max}명
                </S.UserNumber>
              </S.UserContainer>
            </S.StarUserContainer>
            <S.RightInnerContainer>
              <S.TimerNegoContainer>
                <S.TimerContainer>
                  <S.TimerIcon />
                  <S.TimerText>{product.saleEnd.toString()}</S.TimerText>
                </S.TimerContainer>
                {product.canNegotiate ? (
                  <S.NegoContainer>
                    <p>가격제안가능</p>
                  </S.NegoContainer>
                ) : (
                  <S.NoNegoContainer>
                    <p>가격제안불가</p>
                  </S.NoNegoContainer>
                )}
              </S.TimerNegoContainer>
              <S.PriceContainer>
                <S.PriceText>원가</S.PriceText>
                <S.Price>{numberFormat(product.price)}원</S.Price>
              </S.PriceContainer>
              <S.PriceContainer>
                <S.PriceText>구매가</S.PriceText>
                <S.Price>{numberFormat(product.purchasePrice)}원</S.Price>
              </S.PriceContainer>
              <S.PriceContainer>
                <S.PriceText>판매가</S.PriceText>
                <S.Price className="sellingPrice">{numberFormat(product.sellingPrice)}원</S.Price>
              </S.PriceContainer>
            </S.RightInnerContainer>
          </S.InformationContainer>
        </S.ItemContainer>
      </Link>
    </S.Container>
  );
};

export default ProductCard;
