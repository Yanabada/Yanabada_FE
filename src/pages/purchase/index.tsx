import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/styles";
import { TopLabel } from "@pages/myPage/components/Info/styles";
import { Timer, TimerText } from "@components/card/ListCard/styles";
import Notice from "@components/notice";
import { MdOutlineTimer } from "react-icons/md";
import { RoomName } from "@pages/myPage/components/Info/styles";
import ProfileIconGray from "@assets/icons/profileIcon_gray.svg?react";
import { DiscountRate } from "@pages/products/components/ProductCard/style";
import Checkbox from "@components/input/Checkbox";
import { useState } from "react";
import TextInput from "@components/input/TextInput";
import ManipulationChip from "@components/chips/ManipulationChip";
interface PurchaseProps {
  width?: string;
  timerText: string;
}

const Purchase = ({ width, timerText }: PurchaseProps) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      <UpperNavBar title="예약" type="back" />
      <S.ReservationContainer width={width} gap="16px">
        <TopLabel>구매 숙소 정보를 확인하세요</TopLabel>
        <Notice
          type="yanolja"
          content="야나바다의 모든 양도 매물은 야놀자에서 구매된 안전한 매물입니다."
          shape="lineFill"
        />
      </S.ReservationContainer>
      <S.Spacer width={width} />
      <S.ReservationContainer width={width}>
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
      <S.PriceCompareCard width={width}>
        <S.CheckInOutWrapper>
          <S.CheckInOut width={width}>
            <S.CheckInOutText>체크인</S.CheckInOutText>
            <S.DateText>2023.12.25 (월)</S.DateText>
            <S.TimeText>14:00</S.TimeText>
          </S.CheckInOut>
          <S.CheckInOut width={width}>
            <S.CheckInOutText>체크아웃</S.CheckInOutText>
            <S.DateText>2023.12.26 (화)</S.DateText>
            <S.TimeText>11:00</S.TimeText>
          </S.CheckInOut>
        </S.CheckInOutWrapper>
        <S.ImageWrapper imageURL="https://s3-alpha-sig.figma.com/img/7a66/7ee4/66508d41dfc3fa07524137416d5ec5b6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPktuodFjKnh-LxKRr5ui0f6hu61xJIy09e3tWv6yii31FOYdSCYzdi1ck7qCqSS92Yl9l2LCGCUN91TsyGIEbhgAJSwB5ngZMQk5cktPEeXLLYwauh7CTpHUIczfhPT4FlpHCBR-s4W3osIlTj1844buMWiRIppA1JlW3FlqhmknDNxzPW18mBaXZ4wdU3iwcH~cWxqpfF~CUKYrRbOvd7UMl3e9aSajVwbMi2G~1-xPqlId94GhTXeyAErB3caAknZF8Bz11asHcpTESvPU2-D~aGU9lhd5nWkKcHxLVMfUWXFBf3-gxWzc2JWajqoXLfFM6if~uCGCaRoL2FHaQ__">
          <DiscountRate borderRadius="5px">67%</DiscountRate>
        </S.ImageWrapper>
        <S.CompareCardBottomWrapper>
          <S.CostText>1,200,000원</S.CostText>
          <S.PriceWrapper>
            <S.PriceText>판매가</S.PriceText>
            <S.Price>800,000원</S.Price>
          </S.PriceWrapper>
        </S.CompareCardBottomWrapper>
      </S.PriceCompareCard>
      <S.ReservationContainer width={width}>
        <S.PersonInfoWrapper>
          <S.PersonInfoTopWrapper>
            <S.InfoText>예약자 정보</S.InfoText>
            <S.ChangeText>변경하기</S.ChangeText>
          </S.PersonInfoTopWrapper>
          <S.PersonInfoBottomWrapper>김팔자 / 010-1234-5678</S.PersonInfoBottomWrapper>
        </S.PersonInfoWrapper>
      </S.ReservationContainer>
      <S.Spacer width={width} />
      <S.ReservationContainer width={width}>
        <S.PersonInfoWrapper>
          <S.InfoText>
            이용자 정보 <S.UserInfoTextRed>*</S.UserInfoTextRed>
          </S.InfoText>
        </S.PersonInfoWrapper>
        <S.CheckBoxWrapper>
          <Checkbox
            variant="all"
            checked={isChecked}
            setChecked={setIsChecked}
            content="예약자 정보와 동일합니다"
            transparent={true}
            fontSize="14px"
            fontWeight="normal"
            setList={[setIsChecked]}
          />
          <TextInput
            variant="move"
            label={
              <>
                <span>성명</span>
                <span style={{ color: "#E01F3E" }}>*</span>
              </>
            }
            errorMessage="이용자 이름은 한글과 영문만 가능합니다."
          />
          <TextInput
            variant="move"
            label={
              <>
                <span>휴대폰 번호</span>
                <span style={{ color: "#E01F3E" }}>*</span>
              </>
            }
            errorMessage="이용자 이름은 한글과 영문만 가능합니다."
          />
        </S.CheckBoxWrapper>
      </S.ReservationContainer>
      <S.ReservationContainer width={width}>
        <S.PersonInfoWrapper>
          <S.InfoText>포인트</S.InfoText>
          <TextInput
            variant="static"
            placeholder="P 포인트를 입력해주세요"
            rightElement={
              <span
                style={{
                  color: "#616161",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "21px"
                }}
              >
                사용가능 : 0P
              </span>
            }
          />
        </S.PersonInfoWrapper>
        <S.ChipWrapper>
          <ManipulationChip buttonType="abledDefault">전액 사용</ManipulationChip>
        </S.ChipWrapper>
      </S.ReservationContainer>
    </>
  );
};

export default Purchase;
