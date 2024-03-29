import * as S from "./styles/confirm";
import * as CS from "./styles/password";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { numberFormat } from "@utils/numberFormat";
import BaseButton from "@components/buttons/BaseButton";
import UpperNavBar from "@components/navBar/upperNavBar";
import CheckIcoLogo from "@assets/check-ico.png";

import usePaymentHistory from "./hooks/usePaymentHistory";

const typeMap = new Map([
  ["DISBURSEMENT", "인출"],
  ["CHARGE", "충전"],
  ["DEPOSIT", "입금"],
  ["WITHDRAW", "출금"]
]);

const ChargeConfirm = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type");
  const typeText = typeParam == "charging" ? "충전" : "인출";

  const navigate = useNavigate();
  const { id } = useParams();
  const { data: historyData, isLoading, error } = usePaymentHistory(Number(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <>
      <UpperNavBar title={typeMap.get(historyData.type) + "완료"} type="none" />
      <CS.ConfirmWrapper>
        <img src={CheckIcoLogo} alt="체크아이콘" />
        <CS.ConfirmTit>야놀자페이 {typeText}이 완료되었습니다!</CS.ConfirmTit>
        <S.ChargeBox>
          <p className="tit">결제 정보</p>
          <div className="inner">
            <p className="name">{typeText} 금액</p>
            <p className="price">{numberFormat(historyData.amount)}원</p>
          </div>
          <div className="inner">
            <p className="name">{typeText} 계좌</p>
            <p className="bank">{historyData.bankName}</p>
          </div>
          <p className="bank-number">{historyData.bankAccount}</p>
          <div className="stripe"></div>
          <div className="inner">
            <p className="name">
              <span className="text-black">{typeText} 후 잔액</span>
            </p>
            <p className="price">
              <span className="text-red">{numberFormat(historyData.balance)}원</span>
            </p>
          </div>
        </S.ChargeBox>
        <S.ButtonWrap>
          <BaseButton buttonType="default" width="100%" onClick={() => navigate("/charge/lists")}>
            확인
          </BaseButton>
        </S.ButtonWrap>
      </CS.ConfirmWrapper>
    </>
  );
};

export default ChargeConfirm;
