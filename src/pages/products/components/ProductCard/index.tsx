import * as S from "./style";
import MapIcon from "assets/map.svg?react";
import StarIcon from "assets/icons/Star.svg?react";
import { Link } from "react-router-dom";
import { Product } from "@pages/products/types";
import { ProductItemsType } from "@pages/products/types/productsType";

type ProductCardProps = Partial<
  Omit<Product, "latitude" | "longitude"> & { fullContent?: boolean } & {
    product: ProductItemsType;
  }
>;

const ProductCard = ({ product, fullContent = true }: ProductCardProps) => {
  return (
    <S.Container>
      <Link to={`/products/${product?.id}`}>
        <S.ItemContainer fullContent={fullContent}>
          <S.ImageContainer>
            <S.Image src={product?.image} />
            <S.DiscountRate>{product?.salesPercentage}%</S.DiscountRate>
            <S.LocationContainer>
              <MapIcon />
              <S.Location>{product?.address.split(" ").slice(0, 2).join(" ")}</S.Location>
            </S.LocationContainer>
          </S.ImageContainer>
          <S.InformationContainer>
            <S.ProductName>{product?.accommodationName}</S.ProductName>
            <S.RoomName>{product?.roomName}</S.RoomName>
            <S.Period>
              {product?.checkIn} ~ {product?.checkOut} (1박)
            </S.Period>
            <S.StarUserContainer>
              {fullContent && (
                <S.StarContainer>
                  <StarIcon />
                  <S.StarRating>{product?.rating}</S.StarRating>
                </S.StarContainer>
              )}
              <S.UserContainer>
                <S.UserIcon />
                <S.UserNumber>
                  기준 {product?.min}명 / 최대 {product?.max}명
                </S.UserNumber>
              </S.UserContainer>
            </S.StarUserContainer>
            <S.RightInnerContainer>
              <S.TimerNegoContainer>
                <S.TimerContainer>
                  <S.TimerIcon />
                  <S.TimerText>{product?.saleEnd}</S.TimerText>
                </S.TimerContainer>
                {product?.canNegotiate ? (
                  <S.NegoContainer>
                    <p>가격제안가능</p>
                  </S.NegoContainer>
                ) : (
                  <S.NoNegoContainer>
                    <p>가격제안불가</p>
                  </S.NoNegoContainer>
                )}
              </S.TimerNegoContainer>
              {fullContent && (
                <S.PriceContainer>
                  <S.PriceText>원가</S.PriceText>
                  <S.Price>
                    {product?.price && new Intl.NumberFormat().format(product?.price)}원
                  </S.Price>
                </S.PriceContainer>
              )}
              {fullContent && (
                <S.PriceContainer>
                  <S.PriceText>구매가</S.PriceText>
                  <S.Price>
                    {product?.price && new Intl.NumberFormat().format(product?.purchasePrice)}원
                  </S.Price>
                </S.PriceContainer>
              )}
              <S.PriceContainer>
                <S.PriceText>판매가</S.PriceText>
                <S.Price className="sellingPrice">
                  {product?.price && new Intl.NumberFormat().format(product?.sellingPrice)}원
                </S.Price>
              </S.PriceContainer>
            </S.RightInnerContainer>
          </S.InformationContainer>
        </S.ItemContainer>
      </Link>
    </S.Container>
  );
};

export default ProductCard;
