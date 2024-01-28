import * as S from "./styles/password";

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import UpperNavBar from "@components/navBar/upperNavBar";

import Keypads from "./components/Keypads";
import AmountStore from "./stores/amountStore";
import { postPassword, withdrawAmount } from "./apis/charge";
import PasswordStore from "./stores/passwordStore";
import LockIcon from "assets/icons/lockIcon.svg?react";
import useBuyProduct from "@pages/purchase/hooks/useBuyProduct";
import { convertString } from "@pages/purchase/utils/convertString";

const PasswordConfirm = () => {
  const [searchParams] = useSearchParams();
  const isRegistration = searchParams.get("registration") === "true";
  const typeParam = searchParams.get("type");
  const redirectParam = searchParams.get("redirect");

  const navigate = useNavigate();

  const { amount } = AmountStore();

  const [enteredDigits, setEnteredDigits] = useState<number[]>([]);
  const [savedDigits, setSavedDigits] = useState<number[]>([]);
  const [isMatched, setIsMatched] = useState<boolean | null>(null);
  const [confirmText, setConfirmText] = useState<string>(
    isRegistration
      ? "야놀자 페이에서 사용할 비밀번호를 등록해주세요."
      : "간편결제 비밀번호 6자리를 입력해주세요"
  );

  const { setPassword } = PasswordStore();

  // typeParam 이 payment 일때 바로 결제로 넘기기
  const { mutate: buyProductMutate, isSuccess } = useBuyProduct();
  const purchaseInfo = JSON.parse(localStorage.getItem("mutateInfo") as string);

  const shakeOnMismatch = () => {
    keyInputControls.start({
      x: [-5, 5, -5, 5, 0],
      transition: { duration: 0.3, ease: "easeInOut" }
    });
  };
  const keyInputControls = useAnimation();

  // 등록 시 비밀번호 확인
  const checkPasswordMatch = () => {
    if (enteredDigits.length === 6 && isRegistration && savedDigits.length === 6) {
      const matched = enteredDigits.join("") === savedDigits.join("");
      setIsMatched(matched);

      if (!matched) {
        shakeOnMismatch();
      } else {
        setPassword(savedDigits);
        localStorage.setItem("simplePW", enteredDigits.join(""));
        navigate("/charge/account");
      }
    }
  };

  // 등록 시 최초 비밀번호 입력
  useEffect(() => {
    if (enteredDigits.length === 6 && isRegistration) {
      setSavedDigits((prevSavedDigits) => {
        if (prevSavedDigits.length === 0) {
          return [...enteredDigits];
        } else {
          return prevSavedDigits;
        }
      });

      setTimeout(() => {
        setEnteredDigits([]);
        checkPasswordMatch();
        setConfirmText("동일한 비밀번호를 한 번 더 입력해주세요.");
      }, 800);
    }
  }, [enteredDigits, isRegistration]);

  const handleKeyPress = (digit: number | string) => {
    if (digit === "전체삭제") {
      setEnteredDigits([]);
    } else if (digit === "⌫") {
      setEnteredDigits((prevDigits) => prevDigits.slice(0, -1));
    } else if (typeof digit === "number" && enteredDigits.length < 6) {
      setEnteredDigits([...enteredDigits, digit]);
    }
  };

  // 결제 mutate 성공시
  useEffect(() => {
    isSuccess && navigate(redirectParam);
  }, [isSuccess]);

  // 등록이 아닌 비밀번호 확인
  useEffect(() => {
    const checkPassword = async () => {
      if (!isRegistration && enteredDigits.length === 6) {
        const requestData = {
          amount: amount,
          simplePassword: enteredDigits.join("")
        };

        try {
          let response;

          if (typeParam === "charging") {
            response = await postPassword(requestData);
          } else if (typeParam === "withdrawal") {
            response = await withdrawAmount(requestData);
          } else if (typeParam === "payment") {
            buyProductMutate({
              productId: Number(purchaseInfo.productId),
              reservationPersonName: purchaseInfo.reservationPersonName,
              reservationPersonPhoneNumber: purchaseInfo.reservationPersonPhoneNumber,
              userPersonName: purchaseInfo.userPersonName,
              userPersonPhoneNumber: purchaseInfo.userPersonPhoneNumber,
              point: Number(purchaseInfo.point),
              paymentType: convertString(purchaseInfo.paymentType),
              simplePassword: enteredDigits.join("")
            });
          }

          successPassword(response);
        } catch (error) {
          console.error("비밀번호 불일치: ", error);
          setIsMatched(false);
          shakeOnMismatch();
          setEnteredDigits([]);
        }
      }
    };
    checkPassword();
  }, [enteredDigits, isRegistration, typeParam]);

  const successPassword = (response: any) => {
    if (response.yanoljaPayHistoryId) {
      navigate(`/charge/confirm/${response.yanoljaPayHistoryId}?type=${typeParam}`);
    }
  };

  return (
    <>
      <UpperNavBar title={isRegistration ? "비밀번호 등록" : "비밀번호 입력"} type="back" />
      <S.ConfirmWrapper>
        <LockIcon />
        <S.ConfirmTit>{confirmText}</S.ConfirmTit>
        <S.KeyWrapper>
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              variants={{ shake: { x: [-5, 5, -5, 5, 0] } }}
              initial="initial"
              animate={keyInputControls}
            >
              <S.KeyInput className={index < enteredDigits.length ? "active" : ""}>*</S.KeyInput>
            </motion.div>
          ))}
          {isMatched === false && (
            <S.AlertMessage>
              비밀번호가 일치하지 않습니다.
              <br /> 다시 한 번 입력해주세요
            </S.AlertMessage>
          )}
        </S.KeyWrapper>
        <Keypads random={!isRegistration ? true : false} onKeyPress={handleKeyPress} />
      </S.ConfirmWrapper>
    </>
  );
};

export default PasswordConfirm;
