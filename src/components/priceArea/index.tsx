import * as S from "./styles";

import { ChangeEvent, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { AiFillQuestionCircle } from "react-icons/ai";

import { getDayOfWeek } from "@utils/getDayOfWeek";
import { numberFormat } from "@utils/numberFormat";
import BottomSheet from "@components/bottomSheet";
import Notice from "@components/notice";
import CancellationPolicyTable from "@components/priceModal";
import { checkDayOfFee } from "@utils/checkDayOfFee";

interface PriceAreaProps {
  originalPrice: number;
  purchasePrice: number;
  cancelFee: number;
  productData: {
    code: string;
    image: string;
    accommodationName: string;
    roomName: string;
    checkInDate: string;
    checkOutDate: string;
    policyNumber: number;
  };
}

const PriceArea = ({ originalPrice, purchasePrice, cancelFee, productData }: PriceAreaProps) => {
  const [price, setPrice] = useState(0);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const CURRENCY_SIGN = "￦";
  const bottomSheetProps = {
    title: "취소 규정",
    isVisible: bottomSheetVisible,
    setIsVisible: setBottomSheetVisible
  };
  const amountData: [number, string][] = [
    [5000, "5천"],
    [10000, "1만"],
    [50000, "5만"],
    [100000, "10만"]
  ];

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numericValue = parseInt(event.target.value.replace(/[^\d]/g, ""), 10);
    setPrice(numericValue || 0);
  };

  const getErrorMessage = () => {
    if (0 < price && price > purchasePrice) {
      return <S.ErrorMessage>실구매가보다 낮은 금액으로만 판매 가능해요.</S.ErrorMessage>;
    } else if (0 < price && price < cancelFee) {
      return <S.AlertMessage>취소 수수료보다 낮은 금액을 입력하셨어요!</S.AlertMessage>;
    }
    return;
  };

  const getSalesMessage = () => {
    const discountPercentage = ((originalPrice - price) / originalPrice) * 100;
    const savingsAmount = originalPrice - price;

    if (price > cancelFee && price < purchasePrice) {
      return (
        <S.SalesMessage>
          원가 대비 {discountPercentage.toFixed(0)}% 할인! ({numberFormat(savingsAmount)}원 절약)
        </S.SalesMessage>
      );
    }
  };

  const handleCalculation = (amount: number) => {
    const calculatedPrice = price - amount;
    if (calculatedPrice > 0) {
      setPrice(calculatedPrice);
    }
  };

  const handleResetPrice = () => {
    setPrice(purchasePrice);
  };

  function priceFormat(n: number): string {
    const formattedNumber = numberFormat(n);
    return `${formattedNumber} ${CURRENCY_SIGN}`;
  }

  const renderCalButton = ([amount, text]: [number, string]) => (
    <S.CalcButton key={text} onClick={() => handleCalculation(amount)}>
      -{text}
    </S.CalcButton>
  );

  return (
    <>
      <S.PriceTitle>숙소 정보</S.PriceTitle>
      <S.PriceInner>
        <S.PriceInfoBox>
          <div className="info-box__detail">
            <div className="img-bx">
              <img src={productData.image} alt="숙소이미지" />
            </div>
            <div className="txt-bx">
              <p className="number">숙소 예약 번호 {productData.code}</p>
              <p className="tit">{productData.accommodationName}</p>
              <p className="room">{productData.roomName}</p>
              <p className="date">
                {productData.checkInDate} ({getDayOfWeek(productData.checkInDate)}) -
                {productData.checkOutDate} ({getDayOfWeek(productData.checkOutDate)})
              </p>
            </div>
          </div>
        </S.PriceInfoBox>
      </S.PriceInner>
      <S.PriceInner>
        <S.PriceTable>
          <S.PriceTableData>
            <p className="tit">원가</p>
            <p className="price">
              <span>{numberFormat(originalPrice)}</span>원
            </p>
          </S.PriceTableData>
          <S.PriceTableData>
            <p className="tit">실 구매가</p>
            <p className="price">
              <span>{numberFormat(purchasePrice)}</span>원
            </p>
          </S.PriceTableData>
          {productData.policyNumber === 3 ? (
            <S.PriceTableData>
              <p className="tit">취소 수수료</p>
              <p className="price">
                <span>취소불가</span>
              </p>
            </S.PriceTableData>
          ) : (
            <S.PriceTableData className="highlight">
              <p className="tit">
                취소 수수료
                <button onClick={() => setBottomSheetVisible(true)}>
                  <AiFillQuestionCircle />
                </button>
              </p>
              <p className="price">
                <span>{numberFormat(cancelFee)}</span>원
              </p>
              <BottomSheet {...bottomSheetProps}>
                <S.PolicyInner>
                  <Notice
                    type="default"
                    title={checkDayOfFee({
                      originalPrice,
                      policyNumber: productData.policyNumber,
                      checkInDate: productData.checkInDate
                    })}
                    content="아래는 날짜별로 변화하는 취소 수수료이며 정책은 숙소별로 상이합니다."
                    shape="line"
                  />
                  <CancellationPolicyTable
                    checkInDate={productData.checkInDate}
                    originalPrice={originalPrice}
                    policyNumber={productData.policyNumber}
                  />
                </S.PolicyInner>
              </BottomSheet>
            </S.PriceTableData>
          )}
        </S.PriceTable>
      </S.PriceInner>
      <S.PriceInner>
        <S.PriceTitle>
          판매가격 <span>*</span>
        </S.PriceTitle>
        <S.MessageWrap>
          <S.PriceInput
            type="text"
            value={(price && priceFormat(price)) || ""}
            onChange={handlePriceChange}
            placeholder={`${CURRENCY_SIGN} 판매 가격을 입력해주세요`}
          />
          {getSalesMessage()}
        </S.MessageWrap>
        {getErrorMessage()}
        <S.ButtonWrap>
          {amountData.map(renderCalButton)}
          <S.CalcButton onClick={() => handleResetPrice()}>
            <GrPowerReset />
            초기화
          </S.CalcButton>
        </S.ButtonWrap>
      </S.PriceInner>
    </>
  );
};

export default PriceArea;
