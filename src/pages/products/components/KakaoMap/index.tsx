import { useState, useRef } from "react";
import { Map, MarkerClusterer } from "react-kakao-maps-sdk";
import AirplaneIcon from "@assets/icons/airplane.svg?react";
import * as S from "./styles";
import { ProductsMarkers } from "./ProductsMarkers";
import ProductCardForMap from "../ProductCard/ProductCardForMap";
import useProducts from "@pages/products/api/queries";
import { MyPositionMarker } from "./MyPositionMarker";
import Research from "./Research";

export interface StateType {
  center: {
    lat: number;
    lng: number;
  };
  errorMessage: string;
  isLoading: boolean;
}

const KakaoMap = () => {
  const { data: products } = useProducts();
  const [selectedProductId, setSelectedProductId] = useState<number>(products[0].id); // default is first product fetched (maybe 1)
  const [state, setState] = useState<StateType>({
    center: {
      lat: 33.450701,
      lng: 126.570667
    },
    errorMessage: "",
    isLoading: true
  });
  // TODO: 숙소 리스트의 위도 경도 배열을 positions에 담고 MapMarkers에 props로 넘겨주기
  const mapRef = useRef<kakao.maps.Map>(null);

  const handleMyPositionClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            isLoading: false
          }));
          mapRef.current?.setLevel(5);
          mapRef.current?.setCenter(
            new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude)
          );
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errorMessage: err.message,
            isLoading: false
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errorMessage: "현재 위치를 사용할 수 없습니다.",
        isLoading: false
      }));
    }
  };

  const selectedProduct = products.find((product) => product.id === selectedProductId);

  return (
    <>
      <Map
        center={{ lat: products[0].latitude, lng: products[0].longitude }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%"
        }}
        ref={mapRef}
      >
        <MyPositionMarker state={state} />
        <MarkerClusterer averageCenter={true} minLevel={10} styles={[S.clustererStyles]}>
          <ProductsMarkers products={products} setSelectedProductId={setSelectedProductId} />
        </MarkerClusterer>
        <Research />
      </Map>
      <ProductCardForMap selectedProduct={selectedProduct!} />
      <S.Button onClick={handleMyPositionClick}>
        <AirplaneIcon />
      </S.Button>
    </>
  );
};

export default KakaoMap;
