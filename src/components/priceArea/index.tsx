import * as S from "./styles";

import { ChangeEvent } from "react";
import { GrPowerReset } from "react-icons/gr";

import { numberFormat } from "@utils/numberFormat";
import calculateFee from "@utils/calcCancelFee";
interface PriceAreaProps {
  title: string;
  placeholder: string;
  purchasePrice: number;
  resetPrice: number;
  policyNumber: string;
  charge: boolean;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>> | ((price: number) => void);
  checkInDate: string;
  type?: string;
  balance?: number;
}

const PriceArea = ({
  title,
  placeholder,
  purchasePrice,
  resetPrice,
  policyNumber,
  charge,
  price,
  setPrice,
  checkInDate,
  type,
  balance
}: PriceAreaProps) => {
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

  // 체크인 날짜를 기준으로 오늘의 수수료
  const cancelFee = calculateFee(policyNumber, checkInDate, purchasePrice);

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const numericValue = parseInt(event.target.value.replace(/[^\d]/g, ""), 10);
    setPrice(numericValue || 0);
  };

  const getErrorMessage = () => {
    if (purchasePrice && cancelFee) {
      if (0 < price && price > purchasePrice) {
        return <S.ErrorMessage>실구매가보다 낮은 금액으로만 판매 가능해요.</S.ErrorMessage>;
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

  const getWithdrawalMessage = () => {
    if (price < 10000 && price > 0) {
      return <S.ErrorMessage>1만원 이상부터 인출 가능합니다.</S.ErrorMessage>;
    } else if (price > balance) {
      return <S.ErrorMessage>인출금액이 잔액을 초과할 수 없습니다.</S.ErrorMessage>;
    }
    return;
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
    return `￦ ${formattedNumber}`;
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
        </S.MessageWrap>
        {charge &&
          (type === "charging"
            ? getCommandMessage()
            : type === "withdrawal"
              ? getWithdrawalMessage()
              : getErrorMessage())}
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
