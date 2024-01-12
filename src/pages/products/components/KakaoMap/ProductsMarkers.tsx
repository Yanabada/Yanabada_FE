import { CustomOverlayMap, useMap } from "react-kakao-maps-sdk";

export const ProductsMarkers = () => {
  const map = useMap();

  const positions = [
    {
      price: "10,000",
      latlng: { lat: 33.450705, lng: 126.570677 }
    },
    {
      price: "20,000",
      latlng: { lat: 33.450936, lng: 126.569477 }
    },
    {
      price: "300,000",
      latlng: { lat: 33.450879, lng: 126.56994 }
    },
    {
      price: "1,000,000",
      latlng: { lat: 33.451393, lng: 126.570738 }
    }
  ];

  return positions.map((position) => (
    <CustomOverlayMap key={`${position.price}-${position.latlng}`} position={position.latlng}>
      <div
        onClick={() => map.panTo(new kakao.maps.LatLng(position.latlng.lat, position.latlng.lng))}
      >
        {position.price}
      </div>
    </CustomOverlayMap>
  ));
};
