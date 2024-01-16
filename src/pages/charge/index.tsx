import * as S from "./styles/styles";

import UpperNavBar from "@components/navBar/upperNavBar";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
import Notice from "@components/notice";

import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import BaseButton from "@components/buttons/BaseButton";
import PriceArea from "@components/priceArea";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Charge = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [bankMessage, setBankMessage] = useState("계좌선택");

  const toggleOption = () => {
    setIsOptionVisible((prev) => !prev);
  };

  return (
    <>
      <UpperNavBar title="충전" type="back" />
      <S.ChargeWrapper>
        <S.PayBalance>
          <div>
            <YanoljaIcon />
            <span className="text">야놀자 페이 잔액</span>
          </div>
          <span className="price">0원</span>
        </S.PayBalance>
        <S.paySpace />
        <S.PayTitle>페이를 충전하실 계좌를 선택해 주세요</S.PayTitle>
        <Notice
          type="info"
          color="blue"
          content="잔액 충전은 야놀자 페이에 등록된 본인 명의 계좌로만 가능합니다."
          shape="lineFill"
        />
        <S.paySpace />
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
                onClick={() => setBankMessage("국민은행 000000-00-000000")}
              >
                <motion.div className="inner">
                  <motion.img src="/src/assets/bankIcon.png" />
                  <span className="bank">국민은행</span>
                </motion.div>
                <motion.div className="inner">
                  <div className="number">000000-00-000000</div>
                  {bankMessage !== "계좌선택" && <GoCheck style={{ color: "#028161" }} />}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </S.InputWrapper>
        <S.paySpace />
        <S.paySpace />
        <PriceArea
          title="충전 금액을 입력해 주세요"
          placeholder="￦ 금액을 입력해주세요"
          resetPrice={0}
          isAlert={false}
          charge
        />
        <S.ButtonWrapper>
          <BaseButton buttonType="default" width="100%">
            ₩ 충전하기
          </BaseButton>
        </S.ButtonWrapper>
      </S.ChargeWrapper>
    </>
  );
};

export default Charge;
