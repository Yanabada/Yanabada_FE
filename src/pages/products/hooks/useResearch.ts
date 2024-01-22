import { useEffect, useState } from "react";
import { useMap } from "react-kakao-maps-sdk";

interface Position {
  smallX: number;
  smallY: number;
  bigX: number;
  bigY: number;
}

const useResearch = () => {
  const [isMapMoved, setMapMoved] = useState(false);
  const [position, setPosition] = useState<Position>();
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const centerChangedListener = (map: kakao.maps.Map) => {
      setMapMoved(true);

      const bounds = map.getBounds();
      const swLatLng = bounds.getSouthWest();
      const neLatLng = bounds.getNorthEast();

      setPosition({
        smallX: swLatLng.getLat(),
        smallY: swLatLng.getLng(),
        bigX: neLatLng.getLat(),
        bigY: neLatLng.getLng()
      });
    };

    kakao.maps.event.addListener(map, "dragend", () => centerChangedListener(map));

    return () => {
      if (map) {
        kakao.maps.event.removeListener(map, "dragend", () => centerChangedListener(map));
      }
    };
  }, [map]);

  return { position, isMapMoved, setMapMoved };
};

export default useResearch;
