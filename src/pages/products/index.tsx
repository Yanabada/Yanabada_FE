import UpperNavBar from "@components/navBar/upperNavBar";
import SearchBar from "./components/SearchBar";
import OptionTab from "./components/OptionTap";
import Order from "./components/Order";
import ProductCard from "./components/ProductCard";
import * as S from "./styles/style";
import KakaoMap from "./components/KakaoMap";
import CategoryTab from "./components/CategoryTab";
import GoToMapButton from "./components/ToMapButton";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getProducts from "./api/products";
import { ProductItemsType } from "@pages/products/types/productsType";

const Products = () => {
  const [isMapOpen, setMapOpen] = useState(false);
  const [productItem, setProductItem] = useState<ProductItemsType[] | null>(null);

  useEffect(() => {
    const productData = async () => {
      try {
        const data = await getProducts();
        setProductItem(data);
      } catch (error) {
        console.error("/products error: ", error);
      }
    };
    productData();
  }, []);

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
            <S.ProductCardWrapper>
              {productItem?.map((product: ProductItemsType) => <ProductCard product={product} />)}
            </S.ProductCardWrapper>
          </S.SecondContainer>
        </>
      )}
      {!isMapOpen && <GoToMapButton handleClick={() => setMapOpen(true)} />}
    </>
  );
};

export default Products;
