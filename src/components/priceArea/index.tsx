import * as S from "./styles";

import { ChangeEvent, useState } from "react";
import { GrPowerReset } from "react-icons/gr";

import { numberFormat } from "@utils/numberFormat";
interface PriceAreaProps {
  title: string;
  placeholder: string;
  originalPrice?: number;
  purchasePrice?: number;
  resetPrice: number;
  cancelFee?: number;
  isAlert: boolean;
  charge: boolean;
}

const PriceArea = ({
  title,
  placeholder,
  originalPrice,
  purchasePrice,
  resetPrice,
  cancelFee,
  isAlert,
  charge
}: PriceAreaProps) => {
  const [price, setPrice] = useState(0);

  const plusAmountData: [number, string, string][] = [
    [10000, "1만", "plus"],
    [50000, "5만", "plus"],
    [100000, "10만", "plus"]
  ];

  const minusAmountData: [number, string, string][] = [
    [5000, "5천", "minus"],
    [10000, "1만", "minus"],
    [50000, "5만", "minus"],
    [100000, "10만", "minus"]
  ];

  const amountData = charge ? plusAmountData : minusAmountData;

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numericValue = parseInt(event.target.value.replace(/[^\d]/g, ""), 10);
    setPrice(numericValue || 0);
  };

  const getErrorMessage = () => {
    if (purchasePrice !== undefined && cancelFee !== undefined) {
      if (0 < price && price > purchasePrice) {
        return <S.ErrorMessage>실구매가보다 낮은 금액으로만 판매 가능해요.</S.ErrorMessage>;
      } else if (0 < price && price < cancelFee) {
        return <S.AlertMessage>취소 수수료보다 낮은 금액을 입력하셨어요!</S.AlertMessage>;
      }
    }
    return;
  };

  const getCommandMessage = () => {
    if (price > 1 && price < 10000) {
      return <S.ErrorMessage>1만원 이상부터 충전 가능합니다.</S.ErrorMessage>;
    } else if (price > 2000000) {
      return <S.ErrorMessage>1회당 최대 200만원까지 충전 가능합니다.</S.ErrorMessage>;
    }
    return;
  };

  const getSalesMessage = () => {
    if (originalPrice !== undefined && purchasePrice !== undefined && cancelFee !== undefined) {
      const discountPercentage = ((originalPrice - price) / originalPrice) * 100;
      const savingsAmount = originalPrice - price;

      if (price > cancelFee && price < purchasePrice) {
        return (
          <S.SalesMessage>
            원가 대비 {discountPercentage.toFixed(0)}% 할인! ({numberFormat(savingsAmount)}원 절약)
          </S.SalesMessage>
        );
      }
    }
  };

  const handleCalculation = (amount: number, calc: string) => {
    let calculatedPrice;

    if (calc === "minus") {
      calculatedPrice = price - amount;
    } else if (calc === "plus") {
      calculatedPrice = price + amount;
    }
    if (calculatedPrice !== undefined && calculatedPrice > 0) {
      setPrice(calculatedPrice);
    }
  };

  const handleResetPrice = (price: number) => {
    setPrice(price);
  };

  function priceFormat(n: number): string {
    const formattedNumber = numberFormat(n);
    return `${formattedNumber} ￦`;
  }

  const renderCalButton = ([amount, text, calc]: [number, string, string]): JSX.Element => (
    <S.CalcButton key={text} onClick={() => handleCalculation(amount, calc)}>
      {calc === "minus" ? "-" : null}
      {text}
    </S.CalcButton>
  );

  return (
    <>
      <S.PriceInner>
        <S.PriceTitle>
          {title} <span>*</span>
        </S.PriceTitle>
        <S.MessageWrap>
          <S.PriceInput
            type="text"
            value={(price && priceFormat(price)) || ""}
            onChange={handlePriceChange}
            placeholder={placeholder}
          />
          {isAlert && getSalesMessage()}
        </S.MessageWrap>
        {charge ? getCommandMessage() : getErrorMessage()}
        <S.ButtonWrap>
          {amountData.map(renderCalButton)}
          <S.CalcButton onClick={() => handleResetPrice(resetPrice)}>
            <GrPowerReset />
            초기화
          </S.CalcButton>
        </S.ButtonWrap>
      </S.PriceInner>
    </>
  );
};

export default PriceArea;
