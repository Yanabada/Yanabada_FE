import * as CS from "./styles/styles";

import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

import UpperNavBar from "@components/navBar/upperNavBar";
import BaseButton from "@components/buttons/BaseButton";
import TextInput from "@components/input/TextInput";

const Account = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [bankMessage, setBankMessage] = useState("은행/증권사 선택");
  const [number, setNumber] = useState<number>();
  const [isSuccess, setIsSuccess] = useState<boolean>();

  const toggleOption = () => {
    setIsOptionVisible((prev) => !prev);
  };

  const numberPattern = /^[0-9]{10,14}$/;

  const validateNumber = (value: number) => {
    const isValid = numberPattern.test(String(value));
    setIsSuccess(isValid);
  };

  return (
    <>
      <UpperNavBar title="계좌 연결" type="back" />
      <CS.ChargeWrapper>
        <CS.PayTitle>계좌번호를 입력해 주세요</CS.PayTitle>
        <CS.paySpace />
        <TextInput
          variant="move"
          label="계좌번호 입력"
          value={number}
          isSuccess={isSuccess}
          errorMessage={
            isSuccess === false ? "10~14자리의 숫자를 하이픈 ‘-’ 없이 입력하세요." : null
          }
          onChange={(e) => {
            const numberValue = parseInt(e.target.value, 10);
            setNumber(numberValue);
            validateNumber(numberValue);
          }}
        />
        <CS.paySpace />
        <CS.paySpace />
        <CS.InputWrapper>
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
                  setBankMessage("국민은행");
                  setIsOptionVisible(false);
                }}
              >
                <motion.div className="inner">
                  <motion.img src="/src/assets/bankIcon.png" />
                  <span className="bank">국민은행</span>
                </motion.div>
                <motion.div className="inner">
                  {bankMessage !== "은행/증권사 선택" && <GoCheck style={{ color: "#028161" }} />}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </CS.InputWrapper>
        <CS.ButtonWrapper>
          <BaseButton buttonType="default" width="100%">
            계좌 입력 완료
          </BaseButton>
        </CS.ButtonWrapper>
      </CS.ChargeWrapper>
    </>
  );
};

export default Account;
