import * as S from "./styles/register";
import * as CS from "./styles/detail";

import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { differenceInDays } from "date-fns";

import UpperNavBar from "@components/navBar/upperNavBar";
import PriceArea from "@components/priceArea";
import PriceTable from "@components/priceTable";
import Notice from "@components/notice";
import Checkbox from "@components/input/Checkbox";
import BaseButton from "@components/buttons/BaseButton";
import { feePolicy2 } from "@constants/feePolicys";

import NegoOption from "./components/NegoOption";
import AutoCancelOption from "./components/AutoCancelOption";
import DateOption from "./components/DateOption";
import getSellDetail from "./apis/sellDetail";
import { formatDate } from "./utils/formatDate";
import { callSellApi } from "./apis/sendData";

interface EndDateInfo {
  endDate: string;
  daysBefore: number;
  feePercentage: number;
}

const SellRegister = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const [price, setPrice] = useState(0);
  const [isNego, setIsNego] = useState(false);
  const [isAutoCancel, setIsAutoCancel] = useState(false);
  const [sellerComment, setSellerComment] = useState<string>("");
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const [, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | undefined>();
  const [endDateInfo, setEndDateInfo] = useState<EndDateInfo>({
    endDate: "",
    daysBefore: 0,
    feePercentage: 0
  });

  const [sellDetailData, setSellDetailData] = useState({
    accommodationImage: "",
    accommodationName: "",
    cancelPolicy: "",
    checkInDate: "",
    checkInTime: "",
    checkOutDate: "",
    checkOutTime: "",
    code: "",
    orderDate: "",
    orderId: 0,
    paymentMethod: "",
    price: 0,
    reservationPersonName: "",
    reservationPersonPhoneNumber: "",
    roomName: "",
    totalPayment: 0,
    userPersonName: "",
    userPersonPhoneNumber: ""
  });

  // 시작일과 종료일 쿼리스트링으로 등록
  useEffect(() => {
    const startParam = searchParams.get("checkInDate");
    const endParam = searchParams.get("checkOutDate");

    setStartDate(String(startParam));
    setEndDate(String(endParam));

    if (endParam) {
      const currentDate = new Date(endParam);
      const daysBefore = differenceInDays(new Date(sellDetailData.checkInDate), currentDate);
      const feePercentage =
        feePolicy2.find((policy) => policy.daysBefore === daysBefore)?.percentage || 0;

      setEndDateInfo({
        endDate: String(endParam),
        daysBefore: daysBefore,
        feePercentage: feePercentage
      });
    }
  }, [searchParams, sellDetailData.checkInDate]);

  // 수정/등록페이지 여부
  const isRegistration = searchParams.get("registration") === "true";

  // TODO : 수정/등록페이지 여부에 따라서
  // 수정이면, id값으로 조회해서 값 넣어주고, button에 patch 요청
  // 등록이면, button에 post 요청

  // 1. 수정&등록 모두 첫번째 조회 진행
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          return;
        }
        const sellDetailData = await getSellDetail({ id });
        console.log("성공!", sellDetailData.data);
        setSellDetailData(sellDetailData.data);
      } catch (error) {
        console.error("Error fetching sell list:", error);
      }
    };

    fetchData();
  }, []);

  // 2. 등록 진행
  const onSubmit = () => {
    const requestData = {
      orderId: parseInt(id!),
      price: price,
      isAutoCancel: isAutoCancel,
      canNegotiate: isNego,
      saleEndDate: formatDate(endDate!),
      description: sellerComment
    };

    callSellApi(requestData);
  };

  // 3. 수정 진행 (호출 및 쏘기)

  return (
    <>
      <UpperNavBar title="상품 등록" type="back" />
      <S.RegisterWrap>
        <S.RegisterInner>
          <S.RegisterTitle>판매 정보를 입력하세요</S.RegisterTitle>
          <Notice
            type="yanolja"
            content="야나바다에서는 야놀자에서 인증된 숙소 매물만을 거래할 수 있습니다."
            shape="lineFill"
          />
          <S.SmallSpace />
          <S.SmallSpace />
          <PriceTable
            originalPrice={sellDetailData.price}
            purchasePrice={sellDetailData.totalPayment}
            policyNumber={sellDetailData.cancelPolicy}
            code={sellDetailData.code}
            image={sellDetailData.accommodationImage}
            accommodationName={sellDetailData.accommodationName}
            roomName={sellDetailData.roomName}
            checkInDate={sellDetailData.checkInDate}
            checkOutDate={sellDetailData.checkOutDate}
          />
          <PriceArea
            title="판매가격"
            placeholder="￦ 판매 가격을 입력해주세요"
            originalPrice={sellDetailData.price}
            purchasePrice={sellDetailData.totalPayment}
            policyNumber={sellDetailData.cancelPolicy}
            resetPrice={sellDetailData.totalPayment}
            isAlert
            charge={false}
            price={price}
            setPrice={setPrice}
            checkInDate={sellDetailData.checkInDate}
          />
        </S.RegisterInner>
        <CS.DetailBlank />
        <NegoOption isNego={isNego} setIsNego={setIsNego} />
        <DateOption
          bottomSheetVisible={bottomSheetVisible}
          setBottomSheetVisible={setBottomSheetVisible}
          checkInDate={sellDetailData.checkInDate}
          purchasePrice={sellDetailData.totalPayment}
          price={price}
          endDate={endDate}
          endDateInfo={endDateInfo}
          policyNumber={sellDetailData.cancelPolicy}
        />
        {sellDetailData.cancelPolicy === "YNBD_3" ? null : (
          <AutoCancelOption
            isAutoCancel={isAutoCancel}
            setIsAutoCancel={setIsAutoCancel}
            originalPrice={sellDetailData.price}
            endDateInfo={endDateInfo}
          />
        )}
        <CS.DetailBlank />
        <S.RegisterInner>
          <S.RegisterTitle>판매자 한마디</S.RegisterTitle>
          <S.RegisterComment
            value={sellerComment}
            onChange={(e) => setSellerComment(e.target.value)}
            placeholder="안전한 거래를 위해 개인정보를 작성하지 않도록 주의해주세요."
          />
        </S.RegisterInner>
        <CS.DetailBlank />
        <S.RegisterInner>
          <Checkbox
            variant="all"
            content="필수 약관 전체 동의"
            setChecked={setAllCheck}
            checked={allCheck}
            setList={[setCheck1, setCheck2, setCheck3]}
          />
          <Checkbox
            variant="individual"
            title=""
            content="아나바다에 등록한 상품을 다른 곳에서 이중판매 한 경우 발생한 불이익에 대해 자사는 책임지지 않음을 동의합니다. (필수)"
            setChecked={setCheck1}
            checked={check1}
          />
          <Checkbox
            variant="individual"
            title=""
            content="개인정보 수집 및 이용 (필수)"
            hasMoreContent
            setChecked={setCheck2}
            checked={check2}
          />
          <Checkbox
            variant="individual"
            title=""
            content="개인정보 제 3자 제공 (필수)"
            hasMoreContent
            setChecked={setCheck3}
            checked={check3}
          />
        </S.RegisterInner>
        <S.RegisterInner>
          <S.ConfirmWrap>
            <p className="des">
              <Link to="/">이용규칙</Link>에 동의하실 경우 상품 등록하기를 클릭해주세요
            </p>
            {isRegistration ? (
              <BaseButton
                type="submit"
                buttonType={allCheck ? "default" : "disabled-default"}
                width="100%"
                onClick={() => {
                  if (allCheck) {
                    onSubmit();
                  }
                }}
              >
                상품 등록하기
              </BaseButton>
            ) : (
              <BaseButton
                buttonType={allCheck ? "default" : "disabled-default"}
                width="100%"
                onClick={() => {
                  if (allCheck) {
                    navigate("/mypage/purchasehistory");
                  }
                }}
              >
                상품 수정하기
              </BaseButton>
            )}
          </S.ConfirmWrap>
        </S.RegisterInner>
      </S.RegisterWrap>
    </>
  );
};

export default SellRegister;
