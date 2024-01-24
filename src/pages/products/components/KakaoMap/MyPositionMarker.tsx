import { CustomOverlayMap } from "react-kakao-maps-sdk";
import MyPositionIcon from "@assets/icons/myPosition.svg?react";
import { UserPositionType } from ".";

interface MyPositionMarkerProps {
  position: UserPositionType;
}

export const MyPositionMarker = ({ position: { lat, lng, isLoading } }: MyPositionMarkerProps) => {
  if (lat && lng) {
    return (
      <div>
        {!isLoading && (
          <CustomOverlayMap position={{ lat, lng }}>
            <MyPositionIcon />
          </CustomOverlayMap>
        )}
      </div>
    );
  }
};
