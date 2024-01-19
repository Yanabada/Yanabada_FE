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
import useProducts from "./api/queries";

const Products = () => {
  const [isMapOpen, setMapOpen] = useState(false);
  const { data: products } = useProducts();

  return (
    <>
      <UpperNavBar
        title={isMapOpen ? "지도검색" : "상품리스트"}
        type={isMapOpen ? "close" : "back"}
        hasBorder={false}
        {...(isMapOpen && { customBack: () => setMapOpen(false) })}
      />
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
        <S.SecondContainer>
          <OptionTab />
          <Order />
          <S.ProductCardWrapper>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </S.ProductCardWrapper>
        </S.SecondContainer>
      )}
      {!isMapOpen && <GoToMapButton handleClick={() => setMapOpen(true)} />}
    </>
  );
};

export default Products;
