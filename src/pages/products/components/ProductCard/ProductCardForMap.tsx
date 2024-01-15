import * as S from "./style";
import MapIcon from "assets/map.svg?react";
import { ProductType } from "@pages/products/types/productsType";
import { AnimatePresence } from "framer-motion";

interface ProductCardProps {
  selectedProduct: ProductType;
}

const variants = {
  initial: {
    x: "-50%",
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};
// FIXME: 기본값 수정
const ProductCardForMap = ({ selectedProduct }: ProductCardProps) => {
  return (
    <AnimatePresence>
      <S.ItemContainer
        key={selectedProduct.id}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="map"
      >
        <S.ImageContainer>
          <S.Image src="https://bit.ly/2Z4KKcF" />
          <S.DiscountRate>{selectedProduct.salesPercentage}%</S.DiscountRate>
          <S.LocationContainer>
            <MapIcon />
            <S.Location>강원도 강릉시</S.Location>
          </S.LocationContainer>
        </S.ImageContainer>
        <S.InformationContainer>
          <S.ProductName>{selectedProduct.accommodationName}</S.ProductName>
          <S.RoomName>{selectedProduct.roomName}</S.RoomName>
          <S.Period>12/25 ~ 12/26 (1박)</S.Period>
          <S.StarUserContainer>
            <S.UserContainer>
              <S.UserIcon />
              <S.UserNumber>
                기준 {selectedProduct.min}명 / 최대 {selectedProduct.max}명
              </S.UserNumber>
            </S.UserContainer>
          </S.StarUserContainer>
          <S.RightInnerContainer>
            <S.TimerNegoContainer>
              <S.TimerContainer>
                <S.TimerIcon />
                <S.TimerText>3일 15시간 23분</S.TimerText>
              </S.TimerContainer>
              <S.NegoText canNegotiate={selectedProduct.canNegotiate}>
                {selectedProduct.canNegotiate ? "가격제안가능" : "가격제안불가"}
              </S.NegoText>
            </S.TimerNegoContainer>
            <S.PriceContainer>
              <S.PriceText>판매가</S.PriceText>
              <S.Price className="sellingPrice">
                {selectedProduct.sellingPrice.toLocaleString()}
              </S.Price>
            </S.PriceContainer>
          </S.RightInnerContainer>
        </S.InformationContainer>
      </S.ItemContainer>
    </AnimatePresence>
  );
};

export default ProductCardForMap;
