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
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import Modal from "@components/modal";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import useProductDetail from "@pages/productDetail/hooks/useProductDetail";
import formatTimeUntilSaleEnd from "@pages/myPage/utils/formatTimeUntilSaleEnd";
import { getDayOfWeek } from "@utils/getDayOfWeek";
import formatDate from "./utils/formatDate";
import formatNumberWithCommas from "@pages/myPage/utils/formatNumberWithCommas";
import calculateDiscountRate from "@pages/myPage/utils/calculateDiscountRate";
import useProfileDetail from "@pages/myPage/hooks/useProfileDetail";
import useBuyProduct from "./hooks/useBuyProduct";
import { convertString, convertStringToKR } from "./utils/convertString";
import { onClickTossPayment, onClickPGPayment } from "./utils/onClickPayment";
import BankIcoLogo from "@assets/bankIcon.png";
import Cookies from "js-cookie";
import useBalance from "@pages/myPage/hooks/useBalance";

interface PurchaseProps {
  width?: string;
  divType: string;
}

const Purchase = ({ width, divType }: PurchaseProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const phoneNumber = searchParams.get("phonenumber");
  const productId = searchParams.get("productId");
  const isLoggedIn = Cookies.get("isLoggedIn") === "yes";

  const {
    getDetailQuery: { data: productData, error: productError }
  } = useProductDetail(Number(productId));
  const {
    data: profileData,
    error: profileError,
    refetch: profileRefetch
  } = useProfileDetail(isLoggedIn);
  const { mutate: buyProductMutate, isSuccess: buyProductSuccess } = useBuyProduct();

  const { data: balanceData, error: balanceError } = useBalance(isLoggedIn);

  if (productError) {
    console.log(productError);
  }

  if (profileError) {
    console.log(profileError);
  }

  if (balanceError) {
    console.log(balanceError);
  }

  profileRefetch();

  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    trigger
  } = useForm({
    mode: "onBlur"
  });

  const PaymentMethod = {
    None: "none",
    YanoljaPay: "yanoljaPay",
    TossPay: "tossPay",
    AccountTransfer: "accountTransfer",
    Card: "card"
  };

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isCardOptionVisible, setIsCardOptionVisible] = useState(false);
  const [isInstallmentOptionVisible, setIsInstallmentOptionVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(PaymentMethod.None);
  const [cardMessage, setCardMessage] = useState("카드사 선택");
  const [bankMessage, setBankMessage] = useState("은행 선택");
  const [installmentMessage, setInstallmentMessage] = useState("할부 기간 선택");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isChangeButtonClicked, setIsChangeButtonClicked] = useState(false);
  const [nameState, setNameState] = useState("");
  const [phoneNumberState, setPhoneNumberState] = useState("");
  const [pointToUse, setPointToUse] = useState("0");
  const [toggleButtonActive, setToggleButtonActive] = useState(0);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [isPaymentDone, setIsPaymentDone] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const modalProps = {
    title: "야놀자 페이 가입 후 이용 가능합니다",
    leftBtnText: "가입하기",
    rightBtnText: "아니오",
    isVisible: isModalVisible,
    setIsVisible: setIsModalVisible,
    leftAction: () => navigate("/login"),
    rightAction: () => setIsModalVisible(false)
  };

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

  const handlePaymentMethodChange = (selectedMethod: string) => {
    setPaymentMethod(selectedMethod);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (errors.name1 || errors.phoneNumber1) return;

    navigate(
      `/signin/3?from=changeReservationInfo&name=${getValues("name1")}&phonenumber=${getValues("phoneNumber1")}&productId=${productId}&redirect=/purchase`
    );
  };

  const formatPhoneNumber = (value: string): string => {
    if (value.length > 13) {
      return value.slice(0, 13);
    }
    value = value.replace(/[^0-9]/g, "").replace(/^(\d{3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    return value;
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);

    setValue("phoneNumber1", formattedValue);
  };

  const REDIRECT_URL = "https://www.yanabada.com/purchase/confirm";

  useEffect(() => {
    if (isChecked3 && isChecked4) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [isChecked2, isChecked3, isChecked4]);

  useEffect(() => {
    trigger("name1");
    trigger("name2");
    trigger("phoneNumber1");
    trigger("phoneNumber2");
  }, []);

  useEffect(() => {
    if (isChecked1) {
      setNameState(name ? name : "");
      setPhoneNumberState(phoneNumber ? phoneNumber : "");
    } else {
      setNameState("");
      setPhoneNumberState("");
    }
  }, [isChecked1]);

  useEffect(() => {
    if (isPaymentSuccess) {
      const simplePassword = localStorage.getItem("simplePW");
      buyProductMutate({
        productId: Number(productId),
        reservationPersonName: nameState,
        reservationPersonPhoneNumber: phoneNumberState,
        userPersonName: name,
        userPersonPhoneNumber: phoneNumber,
        point: Number(pointToUse),
        paymentType: convertString(paymentMethod),
        simplePassword: simplePassword
      });
    }
  }, [isPaymentSuccess]);

  useEffect(() => {
    if (buyProductSuccess) {
      const purchaseInfo = {
        accommodationName: productData?.accommodationInfo.name,
        roomName: productData?.roomInfo.name,
        checkInDate: productData?.checkInDate,
        checkOutDate: productData?.checkOutDate,
        checkInTime: productData?.roomInfo.checkInTime,
        checkOutTime: productData?.roomInfo.checkOutTime,
        minHeadCount: productData?.roomInfo.minHeadCount,
        maxHeadCount: productData?.roomInfo.maxHeadCount,
        reservationPersonName: nameState,
        reservationPersonPhoneNumber: phoneNumberState,
        userPersonName: name,
        userPersonPhoneNumber: phoneNumber,
        tradeId: productData?.tradeId,
        productPrice: formatNumberWithCommas(productData?.price),
        fee: productData?.sellingPrice * 0.05,
        point: pointToUse,
        totalPrice: formatNumberWithCommas(totalPrice),
        paymentType: convertStringToKR(paymentMethod),
        productId: productId
      };

      localStorage.setItem("purchaseInfo", JSON.stringify(purchaseInfo));

      navigate("/purchase/confirm");
    }
  }, [buyProductSuccess]);

  useEffect(() => {
    localStorage.removeItem("tossPayment");
    localStorage.removeItem("trans");
    localStorage.removeItem("card");
    localStorage.removeItem("simplePW");
    localStorage.removeItem("purchaseInfo");
  }, []);

  useEffect(() => {
    if (isPaymentDone === 1) {
      localStorage.getItem("tossPayment") === "true"
        ? setIsPaymentSuccess(true)
        : setIsPaymentSuccess(false);
    } else if (isPaymentDone === 2) {
      localStorage.getItem("trans") === "true"
        ? setIsPaymentSuccess(true)
        : setIsPaymentSuccess(false);
    } else if (isPaymentDone === 3) {
      localStorage.getItem("card") === "true"
        ? setIsPaymentSuccess(true)
        : setIsPaymentSuccess(false);
    }
  }, [isPaymentDone]);

  useEffect(() => {
    if (paymentMethod === "yanoljaPay")
      setTotalPrice(productData?.sellingPrice - Number(pointToUse));
    else {
      setTotalPrice(
        productData?.sellingPrice + productData?.sellingPrice * 0.05 - Number(pointToUse)
      );
    }
  }, [paymentMethod, pointToUse]);

  useEffect(() => {
    if (
      isAllChecked &&
      toggleButtonActive !== 0 &&
      name &&
      phoneNumber &&
      nameState &&
      phoneNumberState
    ) {
      setIsActive(true);
    }
  }, [isAllChecked, toggleButtonActive, name, phoneNumber, nameState, phoneNumberState]);

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
            <TimerText cardType="sale">
              {formatTimeUntilSaleEnd(productData?.saleEndDate)}
            </TimerText>
          </Timer>
          <TopLabel>{productData?.accommodationInfo.name}</TopLabel>
          <RoomName>{productData?.roomInfo.name}</RoomName>
          <S.PersonnelInfoWrapper>
            <ProfileIconGray />
            <S.PersonalInfoText>
              기준 {productData?.roomInfo.minHeadCount}명 / 최대{" "}
              {productData?.roomInfo.maxHeadCount}명
            </S.PersonalInfoText>
          </S.PersonnelInfoWrapper>
        </S.AccommodationInfoWrapper>
      </S.ReservationContainer>
      <S.PriceCompareCard width={width}>
        <S.CheckInOutWrapper>
          <S.CheckInOut width={width}>
            <S.CheckInOutText>체크인</S.CheckInOutText>
            <S.DateText>
              {formatDate(productData?.checkInDate)} ({getDayOfWeek(productData?.checkInDate)})
            </S.DateText>
            <S.TimeText>{productData?.roomInfo.checkInTime}</S.TimeText>
          </S.CheckInOut>
          <S.CheckInOut width={width}>
            <S.CheckInOutText>체크아웃</S.CheckInOutText>
            <S.DateText>
              {formatDate(productData?.checkOutDate)} ({getDayOfWeek(productData?.checkOutDate)})
            </S.DateText>
            <S.TimeText>{productData?.roomInfo.checkOutTime}</S.TimeText>
          </S.CheckInOut>
        </S.CheckInOutWrapper>
        <S.ImageWrapper imageURL={productData?.accommodationInfo.image}>
          <DiscountRate borderRadius="5px">
            {calculateDiscountRate(productData?.price, productData?.sellingPrice)}%
          </DiscountRate>
        </S.ImageWrapper>
        <S.CompareCardBottomWrapper>
          <S.CostText>{formatNumberWithCommas(productData?.price)}</S.CostText>
          <S.PriceWrapper>
            <S.PriceText>판매가</S.PriceText>
            <S.Price>{formatNumberWithCommas(productData?.sellingPrice)}</S.Price>
          </S.PriceWrapper>
        </S.CompareCardBottomWrapper>
      </S.PriceCompareCard>
      <S.ReservationContainer width={width}>
        <S.PersonInfoWrapper>
          <S.PersonInfoTopWrapper>
            <S.InfoText>
              예약자 정보<S.UserInfoTextRed>*</S.UserInfoTextRed>
            </S.InfoText>
            <S.ChangeText onClick={() => setIsChangeButtonClicked(true)}>변경하기</S.ChangeText>
          </S.PersonInfoTopWrapper>
          {isChangeButtonClicked ? (
            <S.FormWrapper width={width}>
              <form onSubmit={onSubmit}>
                <S.TextInputWrapper>
                  <TextInput
                    variant="move"
                    label={
                      <>
                        <span>성명</span>
                        <span style={{ color: "#E01F3E" }}>*</span>
                      </>
                    }
                    {...register("name1", {
                      required: true,
                      pattern: {
                        value: /^[가-힣a-zA-Z]*$/,
                        message: "이용자 이름은 한글과 영문만 가능합니다."
                      }
                    })}
                    errorMessage={errors.name1 && `${errors.name1?.message}`}
                  />
                  <S.TextInputSpacer />
                  <TextInput
                    variant="move"
                    label={
                      <>
                        <span>휴대폰 번호</span>
                        <span style={{ color: "#E01F3E" }}>*</span>
                      </>
                    }
                    {...register("phoneNumber1", {
                      required: true,
                      pattern: {
                        value: /^010-\d{4}-\d{4}$/,
                        message: "010-0000-0000 형태로 입력해주세요."
                      }
                    })}
                    errorMessage={errors.phoneNumber1 && `${errors.phoneNumber1?.message}`}
                    onChange={handlePhoneNumberChange}
                  />
                </S.TextInputWrapper>

                <S.ChipWrapper>
                  <ManipulationChip
                    buttonType={
                      getValues("name1") &&
                      getValues("phoneNumber1") &&
                      !errors.name1 &&
                      !errors.phoneNumber1
                        ? "abledDefault"
                        : "disabledDefault"
                    }
                    type="submit"
                  >
                    인증 변경하기
                  </ManipulationChip>
                </S.ChipWrapper>
              </form>
            </S.FormWrapper>
          ) : (
            <S.PersonInfoBottomWrapper>
              {name ? name : ""} / {phoneNumber ? phoneNumber : ""}
            </S.PersonInfoBottomWrapper>
          )}
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
          <S.FormWrapper width={width}>
            <form>
              <S.TextInputWrapper>
                <TextInput
                  variant="move"
                  label={
                    <>
                      <span>성명</span>
                      <span style={{ color: "#E01F3E" }}>*</span>
                    </>
                  }
                  {...register("name2", {
                    required: true,
                    pattern: {
                      value: /^[가-힣a-zA-Z]*$/,
                      message: "이용자 이름은 한글과 영문만 가능합니다."
                    }
                  })}
                  errorMessage={errors.name2 && `${errors.name2?.message}`}
                  value={nameState}
                  onChange={(e) => setNameState(e.target.value)}
                />
                <S.TextInputSpacer />
                <TextInput
                  variant="move"
                  label={
                    <>
                      <span>휴대폰 번호</span>
                      <span style={{ color: "#E01F3E" }}>*</span>
                    </>
                  }
                  {...register("phoneNumber2", {
                    required: true,
                    pattern: {
                      value: /^010-\d{4}-\d{4}$/,
                      message: "010-0000-0000 형태로 입력해주세요."
                    }
                  })}
                  errorMessage={errors.phoneNumber2 && `${errors.phoneNumber2?.message}`}
                  value={phoneNumberState}
                  onChange={(e) => setPhoneNumberState(e.target.value)}
                />
              </S.TextInputWrapper>
            </form>
          </S.FormWrapper>
        </S.CheckBoxWrapper>
      </S.ReservationContainer>
      <S.ReservationContainer width={width}>
        <S.PersonInfoWrapper>
          <S.InfoText>포인트</S.InfoText>
          <TextInput
            variant="static"
            placeholder="포인트를 입력해주세요"
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
                사용가능 : {profileData?.point && profileData.point}P
              </span>
            }
            value={pointToUse.toString()}
            onChange={(e) => setPointToUse(e.target.value)}
          />
        </S.PersonInfoWrapper>
        <S.ChipWrapper>
          {profileData?.point && profileData.point > 0 ? (
            <ManipulationChip
              buttonType="abledDefault"
              onClick={() => {
                setPointToUse(profileData.point);
              }}
            >
              전액 사용
            </ManipulationChip>
          ) : (
            <ManipulationChip buttonType="disabledDefault">전액 사용</ManipulationChip>
          )}
        </S.ChipWrapper>
      </S.ReservationContainer>
      <CS.InfoWrapper divType={divType} width={width}>
        <CS.TopWrapper>
          <CS.TopLabel>결제 정보</CS.TopLabel>
        </CS.TopWrapper>
        <CS.SeperationForm>
          <CS.FormLeftText color="gray">상품 금액</CS.FormLeftText>
          <CS.FormRightPrice color="black">
            {formatNumberWithCommas(productData?.sellingPrice)}원
          </CS.FormRightPrice>
        </CS.SeperationForm>
        <CS.SeperationForm>
          <CS.FormTextWrapper>
            <CS.FormLeftText color="gray">수수료</CS.FormLeftText>
          </CS.FormTextWrapper>
          <CS.FormRightPrice color="darkGray">
            {paymentMethod === "yanoljaPay"
              ? "야놀자 페이 사용 무료"
              : `${formatNumberWithCommas(productData?.sellingPrice * 0.05)}원`}
          </CS.FormRightPrice>
        </CS.SeperationForm>
        <CS.SeperationForm>
          <CS.FormTextWrapper>
            <CS.FormLeftText color="gray">야놀자 포인트</CS.FormLeftText>
          </CS.FormTextWrapper>
          <CS.FormRightPrice color="lightGray">-{pointToUse}P</CS.FormRightPrice>
        </CS.SeperationForm>
        <CS.SeperationForm isBorder={true}>
          <CS.FormLeftTextBold>총 결제 금액</CS.FormLeftTextBold>
          <CS.FormRightPrice color="blue">
            {formatNumberWithCommas(totalPrice) === "NaN" ? 0 : formatNumberWithCommas(totalPrice)}
            원
          </CS.FormRightPrice>
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
          <ToggleButton
            buttonType="yanolja"
            width="48%"
            onClick={() => {
              handlePaymentMethodChange(PaymentMethod.YanoljaPay);
              setToggleButtonActive(1);
            }}
            toggleButtonActive={toggleButtonActive}
          >
            야놀자 페이
          </ToggleButton>
          <ToggleButton
            buttonType="toss"
            width="48%"
            onClick={() => {
              handlePaymentMethodChange(PaymentMethod.TossPay);
              setToggleButtonActive(2);
            }}
            toggleButtonActive={toggleButtonActive}
          >
            토스 페이
          </ToggleButton>
        </S.ToggleButtonWrapper>
        <S.ToggleButtonWrapper>
          <ToggleButton
            buttonType="default"
            width="48%"
            onClick={() => {
              handlePaymentMethodChange(PaymentMethod.AccountTransfer);
              setToggleButtonActive(3);
            }}
            toggleButtonActive={toggleButtonActive}
          >
            무통장 입금
          </ToggleButton>
          <ToggleButton
            buttonType="default2"
            width="48%"
            onClick={() => {
              handlePaymentMethodChange(PaymentMethod.Card);
              setToggleButtonActive(4);
            }}
            toggleButtonActive={toggleButtonActive}
          >
            카드
          </ToggleButton>
        </S.ToggleButtonWrapper>
        {paymentMethod === "card" ? (
          <>
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
                      <motion.img src={BankIcoLogo} />
                      <span className="card">국민카드</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </InputWrapper>

            {totalPrice >= 50000 ? (
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
            ) : null}
          </>
        ) : null}

        {paymentMethod === "accountTransfer" ? (
          <>
            <S.PersonInfoWrapper>
              <S.InfoText>
                무통장 입금 <S.UserInfoTextRed>*</S.UserInfoTextRed>
              </S.InfoText>
            </S.PersonInfoWrapper>
            <Notice
              type="info"
              content="이용하실 은행을 선택해주세요"
              color="blue"
              shape="fill"
              bgColor="#F8F8F8"
            />
            <InputWrapper>
              <motion.p className="select" onClick={toggleCardOption}>
                <span>{bankMessage}</span>
                {isCardOptionVisible ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </motion.p>
              <AnimatePresence>
                {isCardOptionVisible && (
                  <motion.div
                    className="option"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => {
                      setBankMessage("국민은행");
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
                      <motion.img src={BankIcoLogo} />
                      <span className="card">국민은행</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </InputWrapper>
          </>
        ) : null}

        {paymentMethod !== "yanoljaPay" || balanceData.hasJoinedYanoljaPay ? null : (
          <>
            <Notice
              type="default"
              title="야놀자 페이에 가입되어 있지 않습니다. 가입 후 이용하실 수 있어요!"
              content="야놀자 페이 가입 후 야나바다 수수료 전액 무료 혜택을 이용해보세요"
              shape="fill"
              color="red"
            />
            <AuthenticationButton
              buttonType="default"
              width={width}
              onClick={() => setIsModalVisible(true)}
            >
              야놀자 페이 가입하러 가기
            </AuthenticationButton>
            <Modal {...modalProps} />
          </>
        )}

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
            content="필수 약관 전체 동의"
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
          {isActive ? (
            <BaseButton
              width="100%"
              buttonType="default"
              onClick={() => {
                if (paymentMethod === "tossPay") {
                  onClickTossPayment(
                    productData?.accommodationInfo.name,
                    nameState,
                    phoneNumberState,
                    totalPrice,
                    setIsPaymentDone,
                    REDIRECT_URL
                  );
                } else if (paymentMethod === "accountTransfer") {
                  onClickPGPayment(
                    productData?.accommodationInfo.name,
                    nameState,
                    phoneNumberState,
                    totalPrice,
                    "trans",
                    setIsPaymentDone,
                    REDIRECT_URL
                  );
                } else if (paymentMethod === "card") {
                  onClickPGPayment(
                    productData?.accommodationInfo.name,
                    nameState,
                    phoneNumberState,
                    totalPrice,
                    "card",
                    setIsPaymentDone,
                    REDIRECT_URL
                  );
                } else {
                  const purchaseInfo = {
                    accommodationName: productData?.accommodationInfo.name,
                    roomName: productData?.roomInfo.name,
                    checkInDate: productData?.checkInDate,
                    checkOutDate: productData?.checkOutDate,
                    checkInTime: productData?.roomInfo.checkInTime,
                    checkOutTime: productData?.roomInfo.checkOutTime,
                    minHeadCount: productData?.roomInfo.minHeadCount,
                    maxHeadCount: productData?.roomInfo.maxHeadCount,
                    reservationPersonName: nameState,
                    reservationPersonPhoneNumber: phoneNumberState,
                    userPersonName: name,
                    userPersonPhoneNumber: phoneNumber,
                    tradeId: productData?.tradeId,
                    productPrice: formatNumberWithCommas(productData?.price),
                    fee: productData?.sellingPrice * 0.05,
                    point: pointToUse,
                    totalPrice: formatNumberWithCommas(totalPrice),
                    paymentType: convertStringToKR(paymentMethod),
                    productId: productId
                  };

                  localStorage.setItem("purchaseInfo", JSON.stringify(purchaseInfo));

                  navigate(`/charge?type=charging&price=${totalPrice}&redirect=/purchase/confirm`);
                }
              }}
            >
              {formatNumberWithCommas(totalPrice)}원 결제하기
            </BaseButton>
          ) : (
            <BaseButton width="100%" buttonType="disabled-default">
              {formatNumberWithCommas(totalPrice)}원 결제하기
            </BaseButton>
          )}
        </S.ReservationBottomWrapper>
      </S.ReservationContainer>
    </>
  );
};
export default Purchase;
