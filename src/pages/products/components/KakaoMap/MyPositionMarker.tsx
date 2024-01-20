import { CustomOverlayMap } from "react-kakao-maps-sdk";

import MyPositionIcon from "@assets/icons/myPosition.svg?react";
import { StateType } from ".";

interface MyPositionMarkerProps {
  state: StateType;
}

export const MyPositionMarker = ({ state: { center, isLoading } }: MyPositionMarkerProps) => {
  return (
    <div>
      {!isLoading && (
        <CustomOverlayMap position={center}>
          <MyPositionIcon />
        </CustomOverlayMap>
      )}
    </div>
  );
};
