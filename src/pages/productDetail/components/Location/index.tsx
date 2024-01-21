import * as S from "./style";
import { AccommodationInfoType } from "@pages/productDetail/types/detailType";
import CopyIcon from "@assets/icons/copy.svg?react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import PositionIcon from "@assets/icons/product_position_mark.svg?react";
import Modal from "@components/modal";
import { useState } from "react";

interface AccommodationInfoProps {
  accommodationInfo: AccommodationInfoType;
}

const Location = ({ accommodationInfo }: AccommodationInfoProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const copyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setModalVisible(true);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <S.Container>
      <S.Text>위치 / 교통</S.Text>
      <S.MapContainer>
        <Map
          style={{ width: "100%", height: "100%" }}
          center={{ lat: accommodationInfo.latitude, lng: accommodationInfo.longitude }}
        >
          <CustomOverlayMap
            position={{ lat: accommodationInfo.latitude, lng: accommodationInfo.longitude }}
          >
            <PositionIcon />
          </CustomOverlayMap>
        </Map>
      </S.MapContainer>
      <S.AddressContainer>
        <Modal
          title="주소가 클립보드에 복사되었습니다."
          content={accommodationInfo.address}
          leftBtnText="확인"
          leftAction={() => setModalVisible(false)}
          isVisible={isModalVisible}
          setIsVisible={setModalVisible}
        />
        <S.Address>{accommodationInfo.address}</S.Address>
        <S.CopyButton
          onClick={() => {
            copyClick(accommodationInfo.address);
          }}
        >
          <CopyIcon />
          복사
        </S.CopyButton>
      </S.AddressContainer>
      <S.Line />
      <S.TrafficContainer>
        교통
        <S.TrafficText>주차: 숙소에 문의 바랍니다.</S.TrafficText>
        <S.TrafficText>셔틀: 홈페이지 내 셔틀 정보 참조</S.TrafficText>
        <S.TrafficText>픽업: 운영 - 예약 후 문의 바랍니다.</S.TrafficText>
      </S.TrafficContainer>
    </S.Container>
  );
};

export default Location;
