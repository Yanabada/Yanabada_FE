import ColumnCard from "@components/card/ColumnCard";
import { ProductType } from "@pages/products/types/productsType";

import * as S from "./styles";

import ArrowRight from "@assets/icons/arrowRight.svg?react";
import useProducts from "@pages/products/api/queries";
import Logo from "@assets/icons/hot_place_2024.svg?react";
import { Link } from "react-router-dom";

type Picked =
  | "id"
  | "image"
  | "accommodationName"
  | "roomName"
  | "checkIn"
  | "checkOut"
  | "price"
  | "sellingPrice"
  | "address"
  | "saleEnd"
  | "salesPercentage";
export type OptionCardType = Pick<ProductType, Picked>;

const SpecialServices = () => {
  // 어떤 옵션을 줘야할지?
  const { data: products } = useProducts({
    size: 10,
    isHidingSoldOut: true,
    options: ["PARTY_ROOM"]
  });

  return (
    <S.Container>
      <S.Background />
      <Link to="/products/special">
        <S.TitleWrapper>
          <div className="logo">
            <Logo />
          </div>
          <div className="title">
            <div>
              <h2>HAPPY NEW YEAR</h2>
              <h3>2024년을 시작하는 신년 파티룸</h3>
            </div>
            <ArrowRight />
          </div>
        </S.TitleWrapper>
      </Link>
      <S.CardWrapper>
        {products.map((product) => (
          <ColumnCard key={product.id} product={product} />
        ))}
      </S.CardWrapper>
    </S.Container>
  );
};

export default SpecialServices;
