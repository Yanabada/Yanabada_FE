import * as CS from "./styles/styles";

import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

import UpperNavBar from "@components/navBar/upperNavBar";
import BaseButton from "@components/buttons/BaseButton";
import TextInput from "@components/input/TextInput";
import BottomSheet from "@components/bottomSheet";
import Checkbox from "@components/input/Checkbox";
import BankIcoLogo from "@assets/bankIcon.png";

import PasswordStore from "./stores/passwordStore";
import useRegisterForPayment from "./hooks/useRegisterPayment";

const Account = () => {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [bankName, setBankName] = useState("은행/증권사 선택");
  const [bankNumber, setBankNumber] = useState<number>();
  const { password } = PasswordStore();
  const [isSuccess, setIsSuccess] = useState<boolean>();

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [allCheck, setAllCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const numberPattern = /^[0-9]{10,14}$/;

  useEffect(() => {
    if (check1 && check2) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [check1, check2]);

  const toggleOption = () => {
    setIsOptionVisible((prev) => !prev);
  };

  const validateNumber = (value: number) => {
    const isValid = numberPattern.test(String(value));
    setIsSuccess(isValid);
  };

  const bottomSheetProps = {
    title: "약관 동의",
    isVisible: bottomSheetVisible,
    setIsVisible: setBottomSheetVisible
  };

  const isFormValid = isSuccess && bankName !== "은행/증권사 선택";

  const { mutate } = useRegisterForPayment();

  const completeAccount = () => {
    setBottomSheetVisible(true);
    if (allCheck && isFormValid) {
      const simplePassword = password.join("");
      const accountNumber = String(bankNumber);

      mutate({ simplePassword, bankName, accountNumber });
    }
  };

  return (
    <>
      <UpperNavBar title="계좌 연결" type="back" />
      <CS.ChargeWrapper>
        <CS.PayTitle>계좌번호를 입력해 주세요</CS.PayTitle>
        <CS.PaySpace />
        <TextInput
          type="number"
          variant="move"
          label="계좌번호 입력"
          value={bankNumber}
          isSuccess={isSuccess}
          errorMessage={
            isSuccess === false ? "10~14자리의 숫자를 하이픈 ‘-’ 없이 입력하세요." : null
          }
          onChange={(e) => {
            const numberValue = parseInt(e.target.value, 10);
            setBankNumber(numberValue);
            validateNumber(numberValue);
          }}
        />
        <CS.PaySpace />
        <CS.PaySpace />
        <CS.InputWrapper>
          <motion.p className="select" onClick={toggleOption}>
            <span>{bankName}</span>
            {isOptionVisible ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </motion.p>
          <AnimatePresence>
            {isOptionVisible && (
              <motion.div
                className="option"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => {
                  setBankName("국민은행");
                  setIsOptionVisible(false);
                }}
              >
                <motion.div className="inner">
                  <motion.img src={BankIcoLogo} />
                  <span className="bank">국민은행</span>
                </motion.div>
                <motion.div className="inner">
                  {bankName !== "은행/증권사 선택" && <GoCheck style={{ color: "#028161" }} />}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </CS.InputWrapper>
        <BottomSheet {...bottomSheetProps}>
          <CS.BottomInner>
            <p className="tit">야나바다 페이를 사용을 위해 오픈뱅킹망 활용에 동의해주세요.</p>
            <p className="des">
              야나바다 페이 서비스는 금융결제원의 오픈뱅킹을 활용하여 제공돼요. 더 쉽고 안전한
              당근페이 서비스 사용을 위해 오픈뱅킹 활용 동의 후 이용해주세요.
            </p>
            <Checkbox
              variant="all"
              content="필수 약관 전체 동의"
              setChecked={setAllCheck}
              checked={allCheck}
              setList={[setCheck1, setCheck2]}
            />
            <Checkbox
              variant="individual"
              title=""
              content="(필수) 오픈뱅킹 출금 이체 동의"
              hasMoreContent
              setChecked={setCheck1}
              checked={check1}
            />
            <Checkbox
              variant="individual"
              title=""
              content="(필수) 개인정보 제3자 제공 동의"
              hasMoreContent
              setChecked={setCheck2}
              checked={check2}
            />
            <CS.ButtonInner>
              <BaseButton
                buttonType={allCheck ? "default" : "disabled-default"}
                width="100%"
                onClick={() => completeAccount()}
              >
                다음
              </BaseButton>
            </CS.ButtonInner>
          </CS.BottomInner>
        </BottomSheet>
        <CS.ButtonWrapper>
          <BaseButton
            buttonType={isFormValid ? "default" : "disabled-default"}
            width="100%"
            onClick={() => completeAccount()}
          >
            계좌 입력 완료
          </BaseButton>
        </CS.ButtonWrapper>
      </CS.ChargeWrapper>
    </>
  );
};

export default Account;
