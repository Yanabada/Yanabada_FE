import useIntersect from "@pages/products/hooks/useIntersect";
import * as S from "../../styles/style";
import KakaoMap from "../KakaoMap";
import OptionTab from "../OptionTap";
import Order from "../Order";
import ProductCard from "../ProductCard";
import useProducts from "@pages/products/api/queries";
import { useMapOpen } from "@pages/products/stores/mapStore";

const ProductList = () => {
  const { data: products, hasNextPage, isFetching, fetchNextPage } = useProducts();
  const { isMapOpen } = useMapOpen();
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      // FIXME: 세 번씩 요청됨
      console.log("fetch next page");
      fetchNextPage();
    }
  });

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
            <div className="observer" ref={ref} />
          </S.ProductCardWrapper>
        </S.SecondContainer>
      )}
    </>
  );
};

export default ProductList;
