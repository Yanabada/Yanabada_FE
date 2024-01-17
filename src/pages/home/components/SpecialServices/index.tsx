import ColumnCard from "@components/card/ColumnCard";
import { ProductType } from "@pages/products/types/productsType";

import * as S from "./styles";

import ArrowRight from "@assets/icons/arrowRight.svg?react";

type Picked =
  | "id"
  | "image"
  | "accommodationName"
  | "roomName"
  | "checkIn"
  | "checkOut"
  | "price"
  | "sellingPrice";
export type OptionCardType = Pick<ProductType, Picked>;

const products: OptionCardType[] = [
  {
    id: 1,
    image: "https://bit.ly/2Z4KKcF",
    accommodationName: "파라스파라 서울 더 그레이트 현대 런던1",
    roomName: "Forest Tower Deluxe King1",
    checkIn: new Date("2024-01-15"),
    checkOut: new Date("2024-01-16"),
    price: 1029000,
    sellingPrice: 264000
  },
  {
    id: 2,
    image: "https://bit.ly/2Z4KKcF",
    accommodationName: "파라스파라 서울 더 그레이트 현대 런던2",
    roomName: "Forest Tower Deluxe King2",
    checkIn: new Date("2024-01-12"),
    checkOut: new Date("2024-01-13"),
    price: 2000000,
    sellingPrice: 1500000
  },
  {
    id: 3,
    image: "https://bit.ly/2Z4KKcF",
    accommodationName: "파라스파라 서울 더 그레이트 현대 런던2",
    roomName: "Forest Tower Deluxe King2",
    checkIn: new Date("2024-01-12"),
    checkOut: new Date("2024-01-13"),
    price: 2000000,
    sellingPrice: 1500000
  }
];

const SpecialServices = () => {
  return (
    <>
      <S.TitleWrapper>
        <div className="logo">2024 로고</div>
        <div className="title">
          <div>
            <h2>HAPPY NEW YEAR</h2>
            <h3>새해 핫플레이스 양도숙박권 모음</h3>
          </div>
          <ArrowRight />
        </div>
      </S.TitleWrapper>
      <S.CardWrapper>
        {products.map((product) => (
          <ColumnCard key={product.id} product={product} />
        ))}
      </S.CardWrapper>
    </>
  );
};

export default SpecialServices;
