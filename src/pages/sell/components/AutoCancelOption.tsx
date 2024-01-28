import * as CS from "../styles/register";

import { Dispatch, SetStateAction } from "react";

import AuthenticationButton from "@components/buttons/AuthenticationButton";
import { numberFormat } from "@utils/numberFormat";

import YanoljaIcon from "assets/icons/yanolja_Icon.svg?react";

interface AutoCancelOptionProps {
  isAutoCancel: boolean;
  setIsAutoCancel: Dispatch<SetStateAction<boolean>>;
  purchasePrice: number;
  calcFeeNumber: number;
  endDateInfo: {
    feePercentage: number;
  };
}

const AutoCancelOption = ({
  isAutoCancel,
  setIsAutoCancel,
  calcFeeNumber,
  endDateInfo
}: AutoCancelOptionProps) => {
  return (
    <CS.RegisterInner>
      <CS.RegisterSubTitle>
        판매 중단 후 야놀자에서 자동 예약 취소 할게요 <span>*</span>
      </CS.RegisterSubTitle>
      <CS.SelectWrap>
        <CS.ButtonInner>
          <AuthenticationButton
            buttonType={isAutoCancel ? "disabled" : "default"}
            width="100%"
            onClick={() => setIsAutoCancel(true)}
          >
            예
          </AuthenticationButton>
        </CS.ButtonInner>
        <CS.ButtonInner>
          <AuthenticationButton
            buttonType={isAutoCancel ? "default" : "disabled"}
            width="100%"
            onClick={() => setIsAutoCancel(false)}
          >
            아니오
          </AuthenticationButton>
        </CS.ButtonInner>
      </CS.SelectWrap>
      <CS.RefundText>
        <p className="text">
          <YanoljaIcon />
          야놀자에서 취소 시 환불금
        </p>
        <p className="price">
          {endDateInfo.feePercentage == 0 ? (
            <span>입실일 취소 불가</span>
          ) : (
            <span>{numberFormat(calcFeeNumber)} 원</span>
          )}
        </p>
      </CS.RefundText>
    </CS.RegisterInner>
  );
};

export default AutoCancelOption;
