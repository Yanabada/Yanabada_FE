import UpperNavBar from "@components/navBar/upperNavBar";
import SearchBar from "./components/SearchBar";
import * as S from "./styles/style";
import CategoryTab from "./components/CategoryTab";
import GoToMapButton from "./components/ToMapButton";
import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "./components/ProductList";

const Products = () => {
  const [isMapOpen, setMapOpen] = useState(false);

  return (
    <>
      <UpperNavBar
        title={isMapOpen ? "지도검색" : "상품리스트"}
        type={isMapOpen ? "backClose" : "back"}
        hasBorder={false}
        isCustom={isMapOpen}
        {...(isMapOpen && { customBack: () => setMapOpen(false) })}
      />
      <S.Container>
        <Link to="/search">
          <SearchBar />
        </Link>
        {!isMapOpen && <CategoryTab />}
      </S.Container>
      <Suspense fallback={<p>Loading...</p>}>
        <ProductList isMapOpen={isMapOpen} />
      </Suspense>
      {!isMapOpen && <GoToMapButton handleClick={() => setMapOpen(true)} />}
    </>
  );
};

export default Products;
