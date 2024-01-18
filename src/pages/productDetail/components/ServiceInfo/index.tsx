import * as S from "./style";
import CheckIcon from "@assets/icons/small_line_check.svg?react";
import { AccommodationInfoType, RoomInfoType } from "@pages/productDetail/types/detailType";

interface OptionProps {
  accommodationInfo: AccommodationInfoType;
  roomInfo: RoomInfoType;
}

const ServiceInfo = ({ accommodationInfo, roomInfo }: OptionProps) => {
  const accommodationOption = accommodationInfo.option;
  const roomOption = roomInfo.option;

  const accommodationKey = (key: string) => {
    const koreanName: Record<string, string> = {
      hasSauna: "사우나",
      hasRoofTop: "루프탑",
      hasPool: "수영장",
      hasGym: "피트니스",
      hasLoungeBar: "라운지바"
    };
    return koreanName[key];
  };

  const optionKey = (key: string) => {
    const koreanName: Record<string, string> = {
      canPark: "주차가능",
      isPartyRoom: "파티룸",
      canAccompanyPet: "애견동반",
      isKidsRoom: "키즈룸",
      isCityView: "시티뷰",
      isOceanView: "오션뷰",
      hasPc: "PC",
      hasOtt: "OTT",
      hasBathtub: "욕조",
      hasBreakfast: "조식",
      canCook: "조리시설",
      isNoKids: "노키즈존"
    };
    return koreanName[key];
  };

  return (
    <S.Container>
      <S.Text>시설 및 서비스</S.Text>
      <S.OptionContainer>
        숙소 옵션
        <S.OptionInnerContainer>
          {Object.entries(accommodationOption).map(([key, value]) => (
            <S.OptionTextContainer key={key}>
              <S.OptionText>{`${accommodationKey(key)} `}</S.OptionText>
              {value && <CheckIcon />}
            </S.OptionTextContainer>
          ))}
        </S.OptionInnerContainer>
      </S.OptionContainer>
      <S.OptionContainer>
        객실 옵션
        <S.OptionInnerContainer>
          {Object.entries(roomOption).map(([key, value]) => (
            <S.OptionTextContainer key={key}>
              <S.OptionText>{`${optionKey(key)} `}</S.OptionText>
              {value && <CheckIcon />}
            </S.OptionTextContainer>
          ))}
        </S.OptionInnerContainer>
      </S.OptionContainer>
    </S.Container>
  );
};

export default ServiceInfo;
