import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/styles";
import { TopLabel } from "@pages/myPage/components/Info/styles";
import { Timer, TimerText } from "@components/card/ListCard/styles";
import Notice from "@components/notice";
import { MdOutlineTimer } from "react-icons/md";
import { RoomName } from "@pages/myPage/components/Info/styles";
import ProfileIconGray from "@assets/icons/profileIcon_gray.svg?react";

interface PurchaseProps {
  width?: string;
  timerText: string;
}

const Purchase = ({ width, timerText }: PurchaseProps) => {
  return (
    <>
      <UpperNavBar title="예약" type="back" />
      <S.ReservationContainer width={width}>
        <TopLabel>구매 숙소 정보를 확인하세요</TopLabel>
        <Notice
          type="yanolja"
          content="야나바다의 모든 양도 매물은 야놀자에서 구매된 안전한 매물입니다."
          shape="lineFill"
        />
        <S.Spacer />
        <S.AccommodationInfoWrapper>
          <Timer>
            <MdOutlineTimer style={{ fill: "#38A3EB" }} />
            <TimerText cardType="sale">{timerText}</TimerText>
          </Timer>
          <TopLabel>파라스파라 서울 더 그레이트 현대 런던 </TopLabel>
          <RoomName>Forest Tower Deluxe King</RoomName>
          <S.PersonnelInfoWrapper>
            <ProfileIconGray />
            <S.PersonalInfoText>성인 1, 아동 1 / 최대 2명</S.PersonalInfoText>
          </S.PersonnelInfoWrapper>
        </S.AccommodationInfoWrapper>
      </S.ReservationContainer>
    </>
  );
};

export default Purchase;
