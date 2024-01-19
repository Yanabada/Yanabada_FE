import { useState, useRef } from "react";
import { CustomOverlayMap, Map, MarkerClusterer } from "react-kakao-maps-sdk";
import AirplaneIcon from "@assets/icons/airplane.svg?react";
import MyPositionIcon from "@assets/icons/myPosition.svg?react";
import * as S from "./styles";
import { ProductsMarkers } from "./ProductsMarkers";
import ProductCardForMap from "../ProductCard/ProductCardForMap";
import useProducts from "@pages/products/api/queries";

interface PositionState {
  center: {
    lat: number;
    lng: number;
  };
  errorMessage: string;
  isLoading: boolean;
}

const clustererStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80px",
  height: "80px",
  padding: "10px",
  border: "2px solid #fff",
  borderRadius: "50%",
  background:
    "linear-gradient(102deg, rgba(58, 200, 244, 0.90) 10.91%, rgba(94, 155, 243, 0.90) 89.69%)",
  boxShadow: "0px 2px 18px 3px rgba(0, 0, 0, 0.10)",
  fontSize: "20px",
  fontWeight: 600,
  color: "#fff"
};

const KakaoMap = () => {
  const { data: products } = useProducts();
  const [selectedProductId, setSelectedProductId] = useState<number>(products[0].id); // default is first product fetched (maybe 1)
  const [position, setPosition] = useState<PositionState>({
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
          setPosition((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            isLoading: false
          }));
          mapRef.current?.setCenter(
            new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude)
          );
        },
        (err) => {
          setPosition((prev) => ({
            ...prev,
            errorMessage: err.message,
            isLoading: false
          }));
        }
      );
    } else {
      setPosition((prev) => ({
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
        center={position.center}
        style={{
          position: "relative",
          width: "100%",
          height: "100%"
        }}
        level={15}
        ref={mapRef}
      >
        {!position.isLoading && (
          <CustomOverlayMap position={position.center}>
            <MyPositionIcon />
          </CustomOverlayMap>
        )}
        <MarkerClusterer averageCenter={true} minLevel={10} styles={[clustererStyles]}>
          <ProductsMarkers products={products} setSelectedProductId={setSelectedProductId} />
        </MarkerClusterer>
      </Map>
      {/* selectedProduct에 대한 정보를 props로 전달 */}
      <ProductCardForMap selectedProduct={selectedProduct!} />
      <S.Button onClick={handleMyPositionClick}>
        <AirplaneIcon />
      </S.Button>
    </>
  );
};

export default KakaoMap;
