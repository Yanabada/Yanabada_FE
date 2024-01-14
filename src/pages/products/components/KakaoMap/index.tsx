import { useState, useRef } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import AirplaneIcon from "@assets/icons/airplane.svg?react";
import MyPositionIcon from "@assets/icons/myPosition.svg?react";
import * as S from "./styles";
import { ProductsMarkers } from "./ProductsMarkers";
import ProductCardForMap from "../ProductCard/ProductCardForMap";
import { Product } from "@pages/products/types";

interface PositionState {
  center: {
    lat: number;
    lng: number;
  };
  errorMessage: string;
  isLoading: boolean;
}

const products: Product[] = [
  {
    id: 1,
    image: "1.jpg",
    accommodationName: "춘천세종호텔",
    roomName: "스탠다드 룸",
    address: "강원특별자치도 춘천시 봉의산길 31",
    checkIn: new Date("2024-01-26"),
    checkOut: new Date("2024-01-30"),
    min: 2,
    max: 4,
    saleEnd: new Date("2024-01-19"),
    rating: 0.0,
    salesPercentage: 20,
    canNegotiate: true,
    price: 65000,
    sellingPrice: 80000,
    purchasePrice: 100000,
    latitude: 35.1631049574,
    longitude: 126.9882125981,
    status: "ON_SALE"
  },
  {
    id: 2,
    image: "2.jpg",
    accommodationName: "부산 해운대 리조트",
    roomName: "디럭스 오션 뷰",
    address: "부산광역시 해운대구 해운대해변로 197",
    checkIn: new Date("2024-02-15"),
    checkOut: new Date("2024-02-17"),
    min: 1,
    max: 2,
    saleEnd: new Date("2024-02-08"),
    rating: 4.5,
    salesPercentage: 15,
    canNegotiate: false,
    price: 120000,
    sellingPrice: 140000,
    purchasePrice: 160000,
    latitude: 35.158647,
    longitude: 129.160384,
    status: "ON_SALE"
  },
  {
    id: 3,
    image: "4.jpg",
    accommodationName: "서울 강남 호텔",
    roomName: "비즈니스 스위트",
    address: "서울특별시 강남구 테헤란로 123",
    checkIn: new Date("2024-04-05"),
    checkOut: new Date("2024-04-07"),
    min: 1,
    max: 3,
    saleEnd: new Date("2024-03-29"),
    rating: 4.8,
    salesPercentage: 25,
    canNegotiate: false,
    price: 150000,
    sellingPrice: 180000,
    purchasePrice: 200000,
    latitude: 37.497912,
    longitude: 127.027634,
    status: "ON_SALE"
  },
  {
    id: 4,
    image: "4.jpg",
    accommodationName: "서울 강남 호텔",
    roomName: "비즈니스 스위트",
    address: "서울특별시 강남구 테헤란로 123",
    checkIn: new Date("2024-04-05"),
    checkOut: new Date("2024-04-07"),
    min: 1,
    max: 3,
    saleEnd: new Date("2024-03-29"),
    rating: 4.8,
    salesPercentage: 25,
    canNegotiate: false,
    price: 150000,
    sellingPrice: 180000,
    purchasePrice: 200000,
    latitude: 37.555912,
    longitude: 127.555634,
    status: "ON_SALE"
  }
];

const KakaoMap = () => {
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
        level={3}
        ref={mapRef}
      >
        {!position.isLoading && (
          <CustomOverlayMap position={position.center}>
            <MyPositionIcon />
          </CustomOverlayMap>
        )}
        <ProductsMarkers products={products} setSelectedProductId={setSelectedProductId} />
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
