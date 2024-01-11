import { Map, MapMarker } from "react-kakao-maps-sdk";
import SearchTab from "./components/Input";
import SearchIcon from "@assets/icons/search_Search.svg?react";
import CalendarIcon from "@assets/icons/search_Calendar.svg?react";
import PersonIcon from "@assets/icons/search_Person.svg?react";
import { useEffect, useRef, useState } from "react";
import BottomActions from "./components/BottomActions";

interface StateType {
  center: { lat: number; lng: number };
  errMsg: string | null;
  isLoading: boolean;
}

interface Bounds {
  bigY: number;
  bigX: number;
  smallX: number;
  smallY: number;
}

const Products = () => {
  const [state, setState] = useState<StateType>({
    center: {
      lat: 33.450701,
      lng: 126.570667
    },
    errMsg: null,
    isLoading: true
  });
  const mapRef = useRef<kakao.maps.Map>(null);
  const [bounds, setBounds] = useState<Bounds>();

  useEffect(() => {
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
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "현재 위치를 사용할 수 없습니다.",
        isLoading: false
      }));
    }
  }, []);

  const getBounds = () => {
    if (!mapRef.current) return;
    const map = mapRef.current;
    const bounds = map.getBounds();

    const sX = bounds.getSouthWest().getLng();
    const sY = bounds.getSouthWest().getLat();
    const bX = bounds.getNorthEast().getLng();
    const bY = bounds.getNorthEast().getLat();

    console.log("sX", sX, "sY", sY, bX, bY);
    setBounds({ smallX: sX, smallY: sY, bigX: bX, bigY: bY });
  };

  const [openTab, setOpenTab] = useState("keyword");

  return (
    <div>
      <SearchTab
        isOpen={openTab === "keyword"}
        setIsOpen={() => setOpenTab("keyword")}
        icon={<SearchIcon />}
        leftPlaceholder="키워드"
        rightPlaceholder="전체 지역"
      >
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
      </SearchTab>
      <SearchTab
        isOpen={openTab === "calendar"}
        setIsOpen={() => setOpenTab("calendar")}
        icon={<CalendarIcon />}
        leftPlaceholder="일정"
        rightPlaceholder="전체 기간"
      >
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
      </SearchTab>
      <SearchTab
        isOpen={openTab === "person"}
        setIsOpen={() => setOpenTab("person")}
        icon={<PersonIcon />}
        leftPlaceholder="인원"
        rightPlaceholder="성인 2명"
      >
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
      </SearchTab>
      <BottomActions isActive={false} />
      <Map
        center={state.center}
        style={{
          width: "100%",
          height: "350px"
        }}
        level={3}
        ref={mapRef}
      >
        <MapMarker position={state.center} />
      </Map>
      <button onClick={getBounds}>좌표 구하기</button>
      {bounds && <p>{bounds.smallX}</p>}
    </div>
  );
};

export default Products;
