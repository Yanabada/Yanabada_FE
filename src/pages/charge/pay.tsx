import * as S from "./styles/styles";

import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";

import UpperNavBar from "@components/navBar/upperNavBar";
import Notice from "@components/notice";
import BaseButton from "@components/buttons/BaseButton";
import PriceArea from "@components/priceArea";
import { numberFormat } from "@utils/numberFormat";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
import BankIcoLogo from "@assets/bankIcon.png";

import usePaymentDetail from "./hooks/usePaymentDetail";
import AmountStore from "./stores/amountStore";
import LoadingAnimation from "@components/checkAnimation";

const YanoljaPay = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [bankMessage, setBankMessage] = useState("계좌선택");
  const { amount, setAmount } = AmountStore();
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type");
  const priceParam = searchParams.get("price");
  const nameParam = searchParams.get("name");
  const phoneParam = searchParams.get("phonenumber");
  const productParam = searchParams.get("productId");

  const { data: paymentData, isLoading, error } = usePaymentDetail();

  if (isLoading || !paymentData) {
    return <LoadingAnimation />;
  }

  if (error) return <p>error</p>;

  const diffPrice = parseInt(priceParam) - paymentData.balance;

  const isFormValid =
    amount >= parseInt(priceParam) - paymentData.balance && bankMessage !== "계좌선택";

  const toggleOption = () => {
    setIsOptionVisible((prev) => !prev);
  };

  return (
    <>
      <UpperNavBar title="충전" type="back" />
      <S.ChargeWrapper>
        <S.PayBalance className="product-balance">
          <div>
            <span className="text">₩ 상품가격</span>
          </div>
          <span className="price">{numberFormat(parseInt(priceParam))} 원</span>
        </S.PayBalance>

        <S.PayBalance>
          <div>
            <YanoljaIcon />
            <span className="text">야놀자 페이 잔액</span>
          </div>
          <span className="price">{numberFormat(paymentData?.balance)}원</span>
        </S.PayBalance>
        <S.PaySpace />
        <S.PayTitle>페이를 충전하실 계좌를 선택해 주세요</S.PayTitle>
        <Notice
          type="info"
          color="blue"
          content={`잔액 충전은 야놀자 페이에 등록된 본인 명의 계좌로만 가능합니다.`}
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
          title={`충전 금액을 입력해 주세요`}
          placeholder={`${numberFormat(diffPrice)} 이상 금액을 입력해주세요`}
          purchasePrice={paymentData.purchasePrice}
          policyNumber={paymentData.policyNumber}
          checkInDate={paymentData.checkInDate}
          resetPrice={0}
          charge
          type={typeParam}
          price={amount}
          setPrice={setAmount}
          balance={paymentData.balance}
        />
        <S.ButtonWrapper>
          <Link
            to={`/charge/password?registration=false&payment=true&type=${typeParam}&name=${nameParam}&phonenumber=${phoneParam}&productId=${productParam}`}
          >
            <BaseButton buttonType={isFormValid ? "default" : "disabled-default"} width="100%">
              ₩ 충전하기
            </BaseButton>
          </Link>
        </S.ButtonWrapper>
      </S.ChargeWrapper>
    </>
  );
};

export default YanoljaPay;
