import { useState, useRef } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import AirplaneIcon from "@assets/icons/airPlane.svg?react";
import MyPositionIcon from "@assets/icons/myPosition.svg?react";
import * as S from "./styles";
import { ProductsMarkers } from "./ProductsMarkers";
import EventMarkerContainer from "./EventMarkerContainer";

interface PositionState {
  center: {
    lat: number;
    lng: number;
  };
  errorMessage: string;
  isLoading: boolean;
}

const KakaoMap = () => {
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

  return (
    <>
      <Map
        center={position.center}
        style={{
          width: "100%",
          height: "350px"
        }}
        level={3}
        ref={mapRef}
      >
        {!position.isLoading && (
          <CustomOverlayMap position={position.center}>
            <MyPositionIcon />
          </CustomOverlayMap>
        )}
        <EventMarkerContainer position={{ lat: 33.450701, lng: 126.570667 }} />
        <ProductsMarkers />
      </Map>
      <S.Button onClick={handleMyPositionClick}>
        <AirplaneIcon />
      </S.Button>
    </>
  );
};

export default KakaoMap;
