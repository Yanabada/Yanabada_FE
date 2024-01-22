import ColumnCard from "@components/card/ColumnCard";
import { ProductType } from "@pages/products/types/productsType";

import * as S from "./styles";

import ArrowRight from "@assets/icons/arrowRight.svg?react";
import useProducts from "@pages/products/api/queries";
import Logo from "@assets/icons/2024.svg?react";

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

const SpecialServices = () => {
  // 어떤 옵션을 줘야할지?
  const { data: products } = useProducts({ size: 10 });

  return (
    <S.Container>
      <S.Background />
      <S.TitleWrapper>
        <div className="logo">
          <Logo />
        </div>
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
    </S.Container>
  );
};

export default SpecialServices;
