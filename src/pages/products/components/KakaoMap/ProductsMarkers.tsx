import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./styles";
import { CustomOverlayMap, useMap } from "react-kakao-maps-sdk";
import { ProductType } from "@pages/products/types/productsType";

interface ProductMarkersProps {
  products: ProductType[];
  setSelectedProductId: Dispatch<SetStateAction<number>>;
}

// FIXME: utils로 이동
const getPriceWithComma = (price: number) => {
  return price.toLocaleString("en-US");
};

export const ProductsMarkers = ({ products, setSelectedProductId }: ProductMarkersProps) => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const map = useMap();

  const handleSelect = (product: ProductType) => {
    const { latitude, longitude } = product;
    setSelectedId(product.id);
    setSelectedProductId(product.id);
    map.panTo(new kakao.maps.LatLng(latitude, longitude));
  };

  return products.map((product) => (
    <CustomOverlayMap key={product.id} position={{ lat: product.latitude, lng: product.longitude }}>
      <S.Pin
        data-selected={selectedId === product.id ? "true" : "false"}
        onClick={() => handleSelect(product)}
      >
        {getPriceWithComma(product.price)}
      </S.Pin>
    </CustomOverlayMap>
  ));
};
