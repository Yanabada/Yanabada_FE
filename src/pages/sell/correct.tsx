import * as S from "./styles/register";
import * as CS from "./styles/detail";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
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
import { formatDate } from "./utils/formatDate";
import getSellResult from "./apis/getSellResult";
import initialSellData from "./constants/initialSellData";
import { usePatchSellData } from "./hooks/usePatchSellApi";

interface EndDateInfo {
  endDate: string;
  daysBefore: number;
  feePercentage: number;
}

const SellCorrect = () => {
  const [allCheck, setAllCheck] = useState(true);
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);
  const [check3, setCheck3] = useState(true);

  const [price, setPrice] = useState(0);
  const [isNego, setIsNego] = useState(false);
  const [isAutoCancel, setIsAutoCancel] = useState(false);
  const [sellerComment, setSellerComment] = useState<string>("");
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const [searchParams] = useSearchParams();
  const redirectParams = searchParams.get("redirect");
  const { id } = useParams();
  const [endDate, setEndDate] = useState<string | undefined>();
  const [endDateInfo, setEndDateInfo] = useState<EndDateInfo>({
    endDate: "",
    daysBefore: 0,
    feePercentage: 0
  });

  const [sellDetailData, setSellDetailData] = useState(initialSellData);
  const isFormValid = check1 && check2 && check3 && price > 0 && endDate;

  useEffect(() => {
    const endParam = searchParams.get("checkOutDate");

    // URL에서 받아온 checkOutDate가 현재 endDate 상태와 다르고, 실제로 값이 존재하는 경우에만 상태 업데이트
    if (endParam && endParam !== endDate) {
      setEndDate(endParam);

      const currentDate = new Date(endParam);
      const daysBefore = differenceInDays(new Date(sellDetailData.checkInDate), currentDate);
      const feePercentage =
        feePolicy2.find((policy) => policy.daysBefore === daysBefore)?.percentage || 0;

      setEndDateInfo({
        endDate: endParam,
        daysBefore: daysBefore,
        feePercentage: feePercentage
      });
    }
  }, [searchParams, endDate, sellDetailData.checkInDate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          return;
        }
        const sellDetailData = await getSellResult({ id });
        console.log("성공!", sellDetailData.data);

        setEndDate(sellDetailData.data.saleEndDate);
        setSellDetailData(sellDetailData.data);
        setSellerComment(sellDetailData.data.description);
        setIsAutoCancel(sellDetailData.data.isAutoCancel);
        setIsNego(sellDetailData.data.canNegotiate);
        setPrice(sellDetailData.data.sellingPrice);
      } catch (error) {
        console.error("Error fetching sell list:", error);
      }
    };

    fetchData();
  }, []);

  const patchSellData = usePatchSellData();

  const onSubmit = () => {
    const requestData = {
      productId: parseInt(id!),
      price: price,
      isAutoCancel: isAutoCancel,
      canNegotiate: isNego,
      saleEndDate: formatDate(endDate!),
      description: sellerComment
    };

    patchSellData(requestData, redirectParams);
  };

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
            purchasePrice={sellDetailData.purchasePrice}
            policyNumber={sellDetailData.roomInfo.cancelPolicy}
            code={sellDetailData.orderCode}
            image={sellDetailData.accommodationInfo.image}
            accommodationName={sellDetailData.accommodationInfo.name}
            roomName={sellDetailData.roomInfo.name}
            checkInDate={sellDetailData.checkInDate}
            checkOutDate={sellDetailData.checkOutDate}
          />
          <PriceArea
            title="판매가격"
            placeholder="￦ 판매 가격을 입력해주세요"
            originalPrice={sellDetailData.price}
            purchasePrice={sellDetailData.purchasePrice}
            policyNumber={sellDetailData.roomInfo.cancelPolicy}
            resetPrice={sellDetailData.purchasePrice}
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
          purchasePrice={sellDetailData.purchasePrice}
          price={price}
          endDate={endDate}
          endDateInfo={endDateInfo}
          policyNumber={sellDetailData.roomInfo.cancelPolicy}
        />
        {sellDetailData.roomInfo.cancelPolicy === "YNBD_3" ? null : (
          <AutoCancelOption
            isAutoCancel={isAutoCancel}
            setIsAutoCancel={setIsAutoCancel}
            purchasePrice={sellDetailData.purchasePrice}
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
            <p className="des">이용규칙에 동의하실 경우 상품 등록하기를 클릭해주세요</p>
            <BaseButton
              buttonType={isFormValid ? "default" : "disabled-default"}
              width="100%"
              onClick={() => {
                if (isFormValid) {
                  onSubmit();
                }
              }}
            >
              상품 수정하기
            </BaseButton>
          </S.ConfirmWrap>
        </S.RegisterInner>
      </S.RegisterWrap>
    </>
  );
};

export default SellCorrect;
