import * as S from "../../styles/style";
import KakaoMap from "../KakaoMap";
import OptionTab from "../OptionTap";
import Order from "../Order";
import ProductCard from "../ProductCard";
import useProducts from "@pages/products/api/queries";
import { useMapOpen } from "@pages/products/stores/mapStore";

const ProductList = () => {
  const { data: products } = useProducts();
  const { isMapOpen } = useMapOpen();

  return (
    <>
      {isMapOpen ? (
        <S.MapContainer>
          <KakaoMap />
        </S.MapContainer>
      ) : (
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
    </>
  );
};

export default ProductList;
