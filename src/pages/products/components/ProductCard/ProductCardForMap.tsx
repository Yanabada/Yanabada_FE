import * as S from "./style";
import MapIcon from "assets/map.svg?react";
import { ProductType } from "@pages/products/types/productsType";
import { AnimatePresence, useAnimationControls } from "framer-motion";

import ArrowDown from "@assets/icons/search_arrowDown.svg?react";
import { useEffect, useState } from "react";
import { formatDateTo, formatRemainingTime } from "@utils/formatDateTo";
import { differenceInDays } from "date-fns";

interface ProductCardProps {
  selectedProduct?: ProductType;
}

const variants = {
  // FIXME: 애니메이션 투명도 조절 Figma랑 살짝 다름
  initial: (isOpen: boolean) => {
    return {
      x: "-50%",
      y: isOpen ? 0 : "150px",
      opacity: 1
    };
  },
  animate: {
    opacity: 1
  },
  up: {
    y: 0,
    transition: {
      ease: "easeInOut"
    }
  },
  down: {
    y: "150px",
    transition: {
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0
  }
};

const ProductCardForMap = ({ selectedProduct }: ProductCardProps) => {
  const [isOpen, setOpen] = useState(true);
  const cardControls = useAnimationControls();

  useEffect(() => {
    cardControls.start("animate");

    if (isOpen) {
      cardControls.start("up");
    } else {
      cardControls.start("down");
    }
  }, [isOpen, cardControls]);

  if (!selectedProduct) return;

  return (
    <AnimatePresence custom={isOpen}>
      <S.ItemContainer
        key={selectedProduct.id}
        custom={isOpen}
        variants={variants}
        initial="initial"
        animate={cardControls}
        exit="exit"
        className="map"
      >
        <button data-opened={isOpen} className="icon" onClick={() => setOpen((prev) => !prev)}>
          <ArrowDown />
        </button>
        <S.ImageContainer>
          <S.Image src={selectedProduct.image} />
          <S.DiscountRate>{selectedProduct.salesPercentage}%</S.DiscountRate>
          <S.LocationContainer>
            <MapIcon />
            <S.Location>{selectedProduct.address.split(" ").slice(0, 2).join(" ")}</S.Location>
          </S.LocationContainer>
        </S.ImageContainer>
        <S.InformationContainer>
          <S.ProductName>{selectedProduct.accommodationName}</S.ProductName>
          <S.RoomName>{selectedProduct.roomName}</S.RoomName>
          <S.Period>
            {formatDateTo(selectedProduct.checkIn)} ~ {formatDateTo(selectedProduct.checkOut)} (
            {differenceInDays(selectedProduct.checkOut, selectedProduct.checkIn)}박)
          </S.Period>
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
                <S.TimerText>{formatRemainingTime(selectedProduct.saleEnd)}</S.TimerText>
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
