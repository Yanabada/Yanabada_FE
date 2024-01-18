import * as S from "./style";
import { AccommodationInfoType } from "@pages/productDetail/types/detailType";
import CopyIcon from "@assets/icons/copy.svg?react";

interface AccommodationInfoProps {
  accommodationInfo: AccommodationInfoType;
}

const Location = ({ accommodationInfo }: AccommodationInfoProps) => {
  return (
    <S.Container>
      <S.Text>위치 / 교통</S.Text>
      <S.MapContainer></S.MapContainer>
      <S.AddressContainer>
        <S.Address>{accommodationInfo.address}</S.Address>
        <S.CopyButton>
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
