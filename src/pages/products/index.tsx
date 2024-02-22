import UpperNavBar from "@components/navBar/upperNavBar";
import SearchBar from "./components/SearchBar";
import * as S from "./styles/style";
import CategoryTab from "./components/CategoryTab";
import GoToMapButton from "./components/ToMapButton";
import { Suspense } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import { useMapState } from "./stores/mapStore";
import OptionTab from "./components/OptionTap";
import Order from "./components/Order";
import LoadingCircle from "@components/loading";

const Products = () => {
  const { isMapOpen, setMapOpen, hasProducts } = useMapState();
  const location = useLocation();
  const navigate = useNavigate();

  const customBack = () => {
    if (isMapOpen) {
      setMapOpen();
      navigate(location.pathname);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <UpperNavBar
        title={isMapOpen ? "지도검색" : "상품리스트"}
        type={isMapOpen ? "backClose" : "back"}
        hasBorder={false}
        isCustom={true}
        {...{ customBack: customBack }}
      />
      <S.Container>
        <Link to="/search">
          <SearchBar />
        </Link>
        {!isMapOpen && <CategoryTab />}
      </S.Container>
      {!isMapOpen && (
        <S.OptionWrapper>
          <OptionTab />
          <Order />
        </S.OptionWrapper>
      )}
      <Suspense fallback={<LoadingCircle width="200px" />}>
        <ProductList />
      </Suspense>
      {!isMapOpen && hasProducts && <GoToMapButton handleClick={setMapOpen} />}
    </>
  );
};

export default Products;
