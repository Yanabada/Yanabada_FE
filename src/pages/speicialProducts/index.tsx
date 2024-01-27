import UpperNavBar from "@components/navBar/upperNavBar";
import useProducts from "@pages/products/api/queries";
import Order from "@pages/products/components/Order";
import ProductCard from "@pages/products/components/ProductCard";
import Logo from "@assets/icons/hot_place_2024.svg?react";
import { ScrollRestoration } from "react-router-dom";
import * as S from "./styles";

const SpecialProducts = () => {
  const { data: products } = useProducts({ options: ["PARTY_ROOM"] });

  return (
    <>
      <ScrollRestoration />
      <UpperNavBar title="2024년을 시작하는 신년 파티룸" type="back" />
      <S.Wrapper>
        <div className="logo">
          <Logo />
        </div>
        <div className="desc">
          <p className="bold">HAPPY NEW YEAR</p>
          <p>2024년을 시작하는 신년 파티룸</p>
        </div>
      </S.Wrapper>
      <Order />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default SpecialProducts;
