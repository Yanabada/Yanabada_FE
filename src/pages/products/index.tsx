import UpperNavBar from "@components/navBar/upperNavBar";
import SearchBar from "./components/SearchBar";
import CategoryTab from "./components/CategoryTab";
import OptionTab from "./components/OptionTap";
import Order from "./components/Order";
import ProductCard from "./components/Items";
import * as S from "./styles/style";

const Products = () => {
  return (
    <>
      <UpperNavBar title="상품 리스트" type="back" />
      <S.Container>
        <SearchBar />
        <CategoryTab />
      </S.Container>
      <S.SecondContainer>
        <OptionTab />
        <Order />
      </S.SecondContainer>
      <S.ProductCardWrapper>
        <ProductCard />
      </S.ProductCardWrapper>
    </>
  );
};

export default Products;
