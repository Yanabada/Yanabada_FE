import * as S from "./styles/styles";

import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import { numberFormat } from "@utils/numberFormat";
import UpperNavBar from "@components/navBar/upperNavBar";
import Notice from "@components/notice";
import BaseButton from "@components/buttons/BaseButton";
import PriceArea from "@components/priceArea";
import usePaymentDetail from "./hooks/usePaymentDetail";
import AmountStore from "./stores/amountStore";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";

const Charge = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [bankMessage, setBankMessage] = useState("계좌선택");
  const { amount, setAmount } = AmountStore();

  const toggleOption = () => {
    setIsOptionVisible((prev) => !prev);
  };

  const { data: paymentData, isLoading, error } = usePaymentDetail();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>error</p>;

  return (
    <>
      <UpperNavBar title="충전" type="back" />
      <S.ChargeWrapper>
        {/* <S.PayBalance className="product-balance">
          <div>
            <span className="text">₩ 상품가격</span>
          </div>
          <span className="price">623,000원</span>
        </S.PayBalance> */}
        <S.PayBalance>
          <div>
            <YanoljaIcon />
            <span className="text">야놀자 페이 잔액</span>
          </div>
          <span className="price">{numberFormat(paymentData.balance)}원</span>
        </S.PayBalance>
        <S.PaySpace />
        <S.PayTitle>페이를 충전하실 계좌를 선택해 주세요</S.PayTitle>
        <Notice
          type="info"
          color="blue"
          content="잔액 충전은 야놀자 페이에 등록된 본인 명의 계좌로만 가능합니다."
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
                  <motion.img src="/src/assets/bankIcon.png" />
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
          title="충전 금액을 입력해 주세요"
          placeholder="￦ 금액을 입력해주세요"
          originalPrice={paymentData.originalPrice}
          purchasePrice={paymentData.purchasePrice}
          policyNumber={paymentData.policyNumber}
          checkInDate={paymentData.checkInDate}
          resetPrice={0}
          isAlert={false}
          charge
          price={amount}
          setPrice={setAmount}
        />
        {/* <S.AlertBanner>
          <p className="text">
            야놀자페이 잔액이 부족합니다.
            <br />
            충전을 진행해주세요!
          </p>
        </S.AlertBanner> */}
        <S.ButtonWrapper>
          {amount < 10000 || amount > 2000000 ? (
            <BaseButton buttonType="disabled-default" width="100%">
              ₩ 충전하기
            </BaseButton>
          ) : (
            <Link to="/charge/password?registration=false">
              <BaseButton buttonType="default" width="100%">
                ₩ 충전하기
              </BaseButton>
            </Link>
          )}
        </S.ButtonWrapper>
      </S.ChargeWrapper>
    </>
  );
};

export default Charge;
