import UpperNavBar from "@components/navBar/upperNavBar";
import SearchBar from "./components/SearchBar";
import OptionTab from "./components/OptionTap";
import Order from "./components/Order";
import ProductCard from "./components/ProductCard";
import * as S from "./styles/style";
import KakaoMap from "./components/KakaoMap";
import CategoryTab from "./components/CategoryTab";
import GoToMapButton from "./components/ToMapButton";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [isMapOpen, setMapOpen] = useState(false);

  return (
    <>
      <UpperNavBar title="상품 리스트" type="back" />
      <S.Container>
        <Link to="/search">
          <SearchBar />
        </Link>
        {!isMapOpen && <CategoryTab />}
      </S.Container>
      {isMapOpen && (
        <S.MapContainer>
          <KakaoMap />
        </S.MapContainer>
      )}
      {!isMapOpen && (
        <>
          <S.SecondContainer>
            <OptionTab />
            <Order />
          </S.SecondContainer>
          <S.ProductCardWrapper>
            <ProductCard />
          </S.ProductCardWrapper>
        </>
      )}
      {!isMapOpen && <GoToMapButton handleClick={() => setMapOpen(true)} />}
    </>
  );
};

export default Products;
