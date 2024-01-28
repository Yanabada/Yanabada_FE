import useIntersect from "@pages/products/hooks/useIntersect";
import * as S from "../../styles/style";
import KakaoMap from "../KakaoMap";
import ProductCard from "../ProductCard";
import useProducts from "@pages/products/api/queries";
import { useMapState } from "@pages/products/stores/mapStore";
import { ScrollRestoration, useSearchParams } from "react-router-dom";
import { Category, Option, OrderState } from "@pages/products/api/products";
import { useEffect, useState } from "react";
import NoProduct from "../NoProduct";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState({
    options: searchParams.getAll("options"),
    order: searchParams.get("order"),
    category: searchParams.get("category"),
    keyword: searchParams.get("keyword"),
    checkInDate: searchParams.get("checkInDate"),
    checkOutDate: searchParams.get("checkOutDate"),
    swx: Number(searchParams.get("swx")),
    swy: Number(searchParams.get("swy")),
    nex: Number(searchParams.get("nex")),
    ney: Number(searchParams.get("ney"))
  });

  useEffect(() => {
    setQueryParams({
      options: searchParams.getAll("options"),
      order: searchParams.get("order"),
      category: searchParams.get("category"),
      keyword: searchParams.get("keyword"),
      checkInDate: searchParams.get("checkInDate"),
      checkOutDate: searchParams.get("checkOutDate"),
      swx: Number(searchParams.get("swx")),
      swy: Number(searchParams.get("swy")),
      nex: Number(searchParams.get("nex")),
      ney: Number(searchParams.get("ney"))
    });
  }, [searchParams]);

  const {
    data: products,
    hasNextPage,
    isFetching,
    fetchNextPage
  } = useProducts({
    ...(queryParams.options && { options: queryParams.options as Option[] }),
    ...(queryParams.order && { order: queryParams.order as OrderState }),
    ...(queryParams.category && { category: queryParams.category as Category }),
    ...(queryParams.checkInDate && { checkInDate: queryParams.checkInDate }),
    ...(queryParams.checkOutDate && { checkOutDate: queryParams.checkOutDate }),
    ...(queryParams.keyword && { keyword: queryParams.keyword }),
    ...(queryParams.swx && { smallX: queryParams.swx }),
    ...(queryParams.swy && { smallY: queryParams.swy }),
    ...(queryParams.nex && { bigX: queryParams.nex }),
    ...(queryParams.ney && { bigY: queryParams.ney }),
    size: 10
  });
  const { isMapOpen, setHasProducts, hasProducts } = useMapState();

  useEffect(() => {
    setHasProducts(products.length);
  }, [products.length, setHasProducts]);

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
      ) : !hasProducts ? (
        <NoProduct />
      ) : (
        <>
          <ScrollRestoration />
          <S.ProductCardWrapper>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <div className="observer" ref={ref} />
          </S.ProductCardWrapper>
        </>
      )}
    </>
  );
};

export default ProductList;
