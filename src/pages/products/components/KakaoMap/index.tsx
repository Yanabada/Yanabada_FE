import { useState, useRef, useEffect } from "react";
import { Map, MarkerClusterer } from "react-kakao-maps-sdk";
import AirplaneIcon from "@assets/icons/airplane.svg?react";
import * as S from "./styles";
import { ProductsMarkers } from "./ProductsMarkers";
import ProductCardForMap from "../ProductCard/ProductCardForMap";
import { MyPositionMarker } from "./MyPositionMarker";
import Research from "./Research";
import { ProductType } from "@pages/products/types/productsType";

export interface UserPositionType {
  lat: number | null;
  lng: number | null;
  errorMessage: string;
  isLoading: boolean;
}

export interface MapCenter {
  lat: number;
  lng: number;
}

interface MapProps {
  products: ProductType[];
}

const KakaoMap = ({ products }: MapProps) => {
  const [selectedProductId, setSelectedProductId] = useState(
    products.length > 0 ? products[0].id : 0
  );
  const [mapCenter, setMapCenter] = useState<MapCenter>({
    lat: products.length > 0 ? products[0].latitude : 33.450701,
    lng: products.length > 0 ? products[0].longitude : 126.570667
  });
  const [userPosition, setUserPosition] = useState<UserPositionType>({
    lat: null,
    lng: null,
    errorMessage: "",
    isLoading: true
  });

  useEffect(() => {
    if (products.length > 0) {
      setSelectedProductId(products[0].id);
    }
  }, [products]);

  const mapRef = useRef<kakao.maps.Map>(null);

  const handleMyPositionClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setMapCenter(newPosition);
          setUserPosition((prev) => ({
            ...prev,
            lat: newPosition.lat,
            lng: newPosition.lng,
            isLoading: false
          }));
          mapRef.current?.setLevel(5);
          mapRef.current?.setCenter(
            new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude)
          );
        },
        (err) => {
          setUserPosition((prev) => ({
            ...prev,
            errorMessage: err.message,
            isLoading: false
          }));
        }
      );
    } else {
      setUserPosition((prev) => ({
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
        center={mapCenter}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 1000
        }}
        level={5}
        ref={mapRef}
      >
        {userPosition.lat && userPosition.lng ? <MyPositionMarker position={userPosition} /> : null}
        {products.length > 0 && (
          <MarkerClusterer averageCenter={true} minLevel={10} styles={[S.clustererStyles]}>
            <ProductsMarkers
              products={products}
              selectedProductId={selectedProductId}
              setSelectedProductId={setSelectedProductId}
            />
          </MarkerClusterer>
        )}
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
