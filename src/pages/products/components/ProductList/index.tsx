import * as S from "../../styles/style";
import ProductCard from "../ProductCard";
import useProducts from "@pages/products/api/queries";
import { ScrollRestoration, useSearchParams } from "react-router-dom";
import {
  Category,
  GetProductsRequestParams,
  Option,
  OrderState
} from "@pages/products/api/products";
import { useMemo } from "react";
import useIntersect from "@pages/products/hooks/useIntersect";
import KakaoMap from "../KakaoMap";
import NoProduct from "../NoProduct";
import { useMapState } from "@pages/products/stores/mapStore";
import GoToMapButton from "../ToMapButton";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const searchParamString = searchParams.toString();

  const queryParams = useMemo(() => {
    const params = new URLSearchParams(searchParamString);

    return {
      options: params.getAll("options") as Option[],
      order: params.get("order") as OrderState,
      category: params.get("category") as Category,
      keyword: params.get("keyword"),
      checkInDate: params.get("checkInDate"),
      checkOutDate: params.get("checkOutDate"),
      smallX: Number(params.get("smallX")),
      smallY: Number(params.get("smallY")),
      bigX: Number(params.get("bigX")),
      bigY: Number(params.get("bigY"))
    };
  }, [searchParamString]);

  const removeFalsy = <T extends object>(
    obj: T,
    ...rest: Array<Record<string, any>>
  ): Partial<T> => {
    const result = Object.assign({}, ...rest);

    Object.entries(obj).forEach(([key, value]) => {
      if (value && value !== 0) {
        result[key] = value;
      }
    });

    return result;
  };

  const {
    data: products,
    hasNextPage,
    isFetching,
    fetchNextPage
  } = useProducts(removeFalsy<Partial<GetProductsRequestParams>>(queryParams, { size: 10 }));

  const { setMapOpen, isMapOpen } = useMapState();

  const ref = useIntersect<HTMLDivElement>(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching && products.length > 0) {
      console.log("fetch next page");
      fetchNextPage();
    }
  });

  return (
    <>
      {isMapOpen ? (
        <S.MapContainer>
          <KakaoMap products={products} />
        </S.MapContainer>
      ) : products.length === 0 ? (
        <NoProduct />
      ) : (
        <>
          <ScrollRestoration />
          <S.ProductCardWrapper>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <div className="observer" ref={ref} />
            <GoToMapButton handleClick={setMapOpen} />
          </S.ProductCardWrapper>
        </>
      )}
      ;
    </>
  );
};

export default ProductList;
