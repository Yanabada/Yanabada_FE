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
import * as CS from "@pages/myPage/components/Info/styles";
import ToggleButton from "@components/buttons/ToggleButton";
import { InputWrapper } from "@pages/charge/styles/styles";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect } from "react";
import BaseButton from "@components/buttons/BaseButton";

interface PurchaseProps {
  width?: string;
  timerText: string;
  divType: string;
  yanoljaPurchasePrice: string;
  charge: string;
  yanoljaPoint: string;
  totalPurchasePrice: string;
}

const Purchase = ({
  width,
  timerText,
  divType,
  yanoljaPurchasePrice,
  charge,
  yanoljaPoint,
  totalPurchasePrice
}: PurchaseProps) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isCardOptionVisible, setIsCardOptionVisible] = useState(false);
  const [isInstallmentOptionVisible, setIsInstallmentOptionVisible] = useState(false);
  const [cardMessage, setCardMessage] = useState("카드사 선택");
  const [installmentMessage, setInstallmentMessage] = useState("할부 기간 선택");

  const toggleCardOption = () => {
    setIsCardOptionVisible((prev) => !prev);
  };

  const toggleInstallmentOption = () => {
    setIsInstallmentOptionVisible((prev) => !prev);
  };

  const handleInstallmentOption = (months: number) => {
    setInstallmentMessage(`${months}개월`);
    setIsInstallmentOptionVisible(false);
  };

  useEffect(() => {
    if (isChecked3 && isChecked4) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [isChecked1, isChecked2, isChecked3, isChecked4]);

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
            checked={isChecked1}
            setChecked={setIsChecked1}
            content="예약자 정보와 동일합니다"
            transparent={true}
            fontSize="14px"
            fontWeight="normal"
            setList={[setIsChecked1]}
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
      <CS.InfoWrapper divType={divType} width={width}>
        <CS.TopWrapper>
          <CS.TopLabel>결제 정보</CS.TopLabel>
        </CS.TopWrapper>
        <CS.SeperationForm>
          <CS.FormLeftText color="gray">상품 금액</CS.FormLeftText>
          <CS.FormRightPrice color="black">{yanoljaPurchasePrice}원</CS.FormRightPrice>
        </CS.SeperationForm>
        <CS.SeperationForm>
          <CS.FormTextWrapper>
            <CS.FormLeftText color="gray">수수료</CS.FormLeftText>
          </CS.FormTextWrapper>
          <CS.FormRightPrice color="darkGray">{charge}원</CS.FormRightPrice>
        </CS.SeperationForm>
        <CS.SeperationForm>
          <CS.FormTextWrapper>
            <CS.FormLeftText color="gray">야놀자 포인트</CS.FormLeftText>
          </CS.FormTextWrapper>
          <CS.FormRightPrice color="lightGray">-{yanoljaPoint}P</CS.FormRightPrice>
        </CS.SeperationForm>
        <CS.SeperationForm isBorder={true}>
          <CS.FormLeftTextBold>총 결제 금액</CS.FormLeftTextBold>
          <CS.FormRightPrice color="blue">{totalPurchasePrice}원</CS.FormRightPrice>
        </CS.SeperationForm>
      </CS.InfoWrapper>
      <S.Spacer width={width} />
      <S.ReservationContainer width={width} gap="16px">
        <S.PersonInfoWrapper>
          <S.InfoText>
            결제 수단 <S.UserInfoTextRed>*</S.UserInfoTextRed>
          </S.InfoText>
        </S.PersonInfoWrapper>
        <S.ToggleButtonWrapper>
          <ToggleButton buttonType="yanolja" subText="*40,000원 할인" width="48%">
            야놀자 페이
          </ToggleButton>
          <ToggleButton buttonType="toss" width="48%">
            토스 페이
          </ToggleButton>
        </S.ToggleButtonWrapper>
        <S.ToggleButtonWrapper>
          <ToggleButton buttonType="default" width="48%">
            무통장 입금
          </ToggleButton>
          <ToggleButton buttonType="default" width="48%">
            카드
          </ToggleButton>
        </S.ToggleButtonWrapper>
        <S.PersonInfoWrapper>
          <S.InfoText>
            카드 결제 <S.UserInfoTextRed>*</S.UserInfoTextRed>
          </S.InfoText>
        </S.PersonInfoWrapper>
        <Notice
          type="info"
          content="카드사와 할부기간을 선택해주세요"
          color="blue"
          shape="fill"
          bgColor="#F8F8F8"
        />
        <InputWrapper>
          <motion.p className="select" onClick={toggleCardOption}>
            <span>{cardMessage}</span>
            {isCardOptionVisible ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </motion.p>
          <AnimatePresence>
            {isCardOptionVisible && (
              <motion.div
                className="option"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => {
                  setCardMessage("국민카드");
                  setIsCardOptionVisible(false);
                }}
                style={{
                  position: "relative",
                  top: "-3px",
                  left: 0,
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                  alignItems: "flex-start"
                }}
              >
                <motion.div className="inner">
                  <motion.img src="/src/assets/bankIcon.png" />
                  <span className="card">국민카드</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </InputWrapper>
        <InputWrapper>
          <motion.p className="select" onClick={toggleInstallmentOption}>
            <span>{installmentMessage}</span>
            {isInstallmentOptionVisible ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </motion.p>
          <AnimatePresence>
            {isInstallmentOptionVisible && (
              <motion.div
                className="option"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  position: "relative",
                  top: "-3px",
                  left: 0,
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  height: "auto",
                  alignItems: "flex-start"
                }}
              >
                <motion.div className="inner" onClick={() => handleInstallmentOption(1)}>
                  <span className="installment">1개월(무이자)</span>
                </motion.div>
                <motion.div className="inner" onClick={() => handleInstallmentOption(2)}>
                  <span className="installment">2개월</span>
                </motion.div>
                <motion.div className="inner" onClick={() => handleInstallmentOption(3)}>
                  <span className="installment">3개월</span>
                </motion.div>
                <motion.div className="inner" onClick={() => handleInstallmentOption(4)}>
                  <span className="installment">4개월</span>
                </motion.div>
                <motion.div className="inner" onClick={() => handleInstallmentOption(5)}>
                  <span className="installment">5개월</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </InputWrapper>
        <S.PersonInfoWrapper>
          <S.InfoText>주의사항 및 결제 동의</S.InfoText>
          <S.DetailText>
            야나바다[(주)야놀자]는 통신판매중개업자로서, 통신판매의 당사자가 아니라는 사실을
            고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </S.DetailText>
        </S.PersonInfoWrapper>
        <S.NoticeWrapper>
          <Notice
            type="default"
            title="현장결제"
            content="추가인원 비용등의 현장결제 발생 상품을 확인하세요."
            shape="fill"
            color="orange"
          />
          <Notice
            type="default"
            title="취소불가"
            content="야나바다에서 구매한 상품은 취소가 불가합니다"
            shape="fill"
            color="orange"
          />
          <Notice
            type="default"
            title="미성년자 및 법정대리인 필수"
            content="미성년자는 법정대리인 동행 없이 투숙 불가합니다."
            shape="fill"
            color="orange"
          />
        </S.NoticeWrapper>
        <S.ReservationBottomWrapper width={width}>
          <Checkbox
            variant="all"
            checked={isAllChecked}
            setChecked={setIsChecked2}
            content="예약자 정보와 동일합니다"
            transparent={false}
            fontSize="15px"
            fontWeight="600"
            setList={[setIsChecked2, setIsChecked3, setIsChecked4]}
          />
          <Checkbox
            variant="individual"
            title="개인정보 수집 및 이용 (필수)"
            content=""
            hasMoreContent={true}
            checked={isChecked3}
            setChecked={setIsChecked3}
          />
          <Checkbox
            variant="individual"
            title="개인정보 제 3자 제공 (필수)"
            content=""
            hasMoreContent={true}
            checked={isChecked4}
            setChecked={setIsChecked4}
          />
          <S.ButtonFormWrapper width={width}>
            <S.BottomDetailText>
              <S.BottomDetailTextBlue>이용규칙, 취소 및 환불 규칙</S.BottomDetailTextBlue>에
              동의하실 경우 결제하기를 클릭해 주세요
            </S.BottomDetailText>
          </S.ButtonFormWrapper>
          <BaseButton width="100%" buttonType="default">
            630,000원 결제하기
          </BaseButton>
        </S.ReservationBottomWrapper>
      </S.ReservationContainer>
    </>
  );
};

export default Purchase;
