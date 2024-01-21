import * as S from "../../styles/style";
import KakaoMap from "../KakaoMap";
import OptionTab from "../OptionTap";
import Order from "../Order";
import ProductCard from "../ProductCard";
import useProducts from "@pages/products/api/queries";

interface ProductListProps {
  isMapOpen: boolean;
}

const ProductList = ({ isMapOpen }: ProductListProps) => {
  const { data: products } = useProducts();

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
