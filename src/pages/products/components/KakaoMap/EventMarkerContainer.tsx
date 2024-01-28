import { MapMarker, useMap } from "react-kakao-maps-sdk";

interface MarkerProps {
  position: { lat: number; lng: number };
}

// 누르면 마커 포지션을 맵 센터로 만드는 마커
const EventMarkerContainer = ({ position }: MarkerProps) => {
  const map = useMap();

  return (
    <MapMarker position={position} onClick={(marker) => map.panTo(marker.getPosition())}>
      EventMarkerContainer
    </MapMarker>
  );
};

export default EventMarkerContainer;
