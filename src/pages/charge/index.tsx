import * as S from "./styles/styles";

import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import UpperNavBar from "@components/navBar/upperNavBar";
import Notice from "@components/notice";
import BaseButton from "@components/buttons/BaseButton";
import PriceArea from "@components/priceArea";
import { numberFormat } from "@utils/numberFormat";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
import BankIcoLogo from "@assets/bankIcon.png";

import usePaymentDetail from "./hooks/usePaymentDetail";
import AmountStore from "./stores/amountStore";

const Charge = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [bankMessage, setBankMessage] = useState("계좌선택");
  const { amount, setAmount } = AmountStore();
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type");
  const priceParam = searchParams.get("price");
  const { data: paymentData, isLoading, error } = usePaymentDetail();

  if (isLoading || !paymentData) {
    return <p>Loading...</p>;
  }

  if (error) return <p>error</p>;

  const isChargeValid =
    typeParam === "charging" && amount >= 10000 && amount <= 2000000 && bankMessage !== "계좌선택";
  const isWithdrawalValid =
    typeParam === "withdrawal" && amount <= paymentData.balance && bankMessage !== "계좌선택";

  const isFormValid = typeParam === "charging" ? isChargeValid : isWithdrawalValid;

  const toggleOption = () => {
    setIsOptionVisible((prev) => !prev);
  };

  const typeText = typeParam == "charging" ? "충전" : "인출";

  return (
    <>
      <UpperNavBar title={typeText} type="back" />
      <S.ChargeWrapper>
        {priceParam ? (
          <S.PayBalance className="product-balance">
            <div>
              <span className="text">₩ 상품가격</span>
            </div>
            <span className="price">{numberFormat(parseInt(priceParam))} 원</span>
          </S.PayBalance>
        ) : null}

        <S.PayBalance>
          <div>
            <YanoljaIcon />
            <span className="text">야놀자 페이 잔액</span>
          </div>
          <span className="price">{numberFormat(paymentData?.balance)}원</span>
        </S.PayBalance>
        <S.PaySpace />
        <S.PayTitle>페이를 {typeText}하실 계좌를 선택해 주세요</S.PayTitle>
        <Notice
          type="info"
          color="blue"
          content={`잔액 ${typeText}은 야놀자 페이에 등록된 본인 명의 계좌로만 가능합니다.`}
          shape="lineFill"
        />
        <S.PaySpace />
        <S.InputWrapper>
          <motion.p className="select" onClick={toggleOption}>
            <span>{bankMessage}</span>
            {isOptionVisible ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </motion.p>
          <AnimatePresence>
            {isOptionVisible && (
              <motion.div
                className="option"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => {
                  setBankMessage(`${paymentData.bankName} ${paymentData.accountNumber}`);
                  setIsOptionVisible(false);
                }}
              >
                <motion.div className="inner">
                  <motion.img src={BankIcoLogo} />
                  <span className="bank">{paymentData.bankName}</span>
                </motion.div>
                <motion.div className="inner">
                  <div className="number">{paymentData.accountNumber}</div>
                  {bankMessage !== "계좌선택" && <GoCheck style={{ color: "#028161" }} />}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </S.InputWrapper>
        <S.PaySpace />
        <S.PaySpace />
        <PriceArea
          title={`${typeText} 금액을 입력해 주세요`}
          placeholder="￦ 금액을 입력해주세요"
          purchasePrice={paymentData.purchasePrice}
          policyNumber={paymentData.policyNumber}
          checkInDate={paymentData.checkInDate}
          resetPrice={0}
          charge
          price={amount}
          setPrice={setAmount}
          type={typeParam}
          balance={paymentData.balance}
        />
        {priceParam ? (
          <>{toast.error("야놀자페이 잔액이 부족합니다. 충전을 진행해주세요!")}</>
        ) : null}
        <S.ButtonWrapper>
          {typeParam === "charging" ? (
            <BaseButton buttonType={isFormValid ? "default" : "disabled-default"} width="100%">
              ₩ {typeText}하기
            </BaseButton>
          ) : (
            <Link to={`/charge/password?registration=false&type=${typeParam}`}>
              <BaseButton buttonType={isFormValid ? "default" : "disabled-default"} width="100%">
                ₩ {typeText}하기
              </BaseButton>
            </Link>
          )}
        </S.ButtonWrapper>
      </S.ChargeWrapper>
    </>
  );
};

export default Charge;
