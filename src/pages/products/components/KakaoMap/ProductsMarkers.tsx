import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";
import { CustomOverlayMap, useMap } from "react-kakao-maps-sdk";
import { ProductType } from "@pages/products/types/productsType";

interface ProductMarkersProps {
  products: ProductType[];
  selectedProductId: number;
  setSelectedProductId: Dispatch<SetStateAction<number | null>>;
}

// FIXME: utils로 이동
const getPriceWithComma = (price: number) => {
  return price.toLocaleString("en-US");
};

export const ProductsMarkers = ({
  products,
  selectedProductId,
  setSelectedProductId
}: ProductMarkersProps) => {
  const map = useMap();

  const handleSelect = (product: ProductType) => {
    // positions, productId, setProductId
    const { latitude, longitude } = product;
    setSelectedProductId(product.id);
    map.panTo(new kakao.maps.LatLng(latitude, longitude));
  };

  return products.map((product) => (
    <CustomOverlayMap key={product.id} position={{ lat: product.latitude, lng: product.longitude }}>
      <S.Pin
        data-selected={selectedProductId === product.id ? "true" : "false"}
        onClick={() => handleSelect(product)}
      >
        {getPriceWithComma(product.sellingPrice)}
      </S.Pin>
    </CustomOverlayMap>
  ));
};
