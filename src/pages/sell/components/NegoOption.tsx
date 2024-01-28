import * as CS from "../styles/register";

import { Dispatch, SetStateAction } from "react";

import AuthenticationButton from "@components/buttons/AuthenticationButton";

interface NegoOptionProps {
  isNego: boolean;
  setIsNego: Dispatch<SetStateAction<boolean>>;
}

const NegoOption = ({ isNego, setIsNego }: NegoOptionProps) => {
  return (
    <CS.RegisterInner>
      <CS.RegisterTitle>판매 옵션</CS.RegisterTitle>
      <CS.RegisterSubTitle>
        가격제안 여부 선택 <span>*</span>
      </CS.RegisterSubTitle>
      <CS.RegisterDes>가격제안 불가능 선택 시 구매자는 채팅을 신청할 수 없습니다.</CS.RegisterDes>
      <CS.SelectWrap>
        <CS.ButtonInner>
          <AuthenticationButton
            buttonType={isNego ? "disabled" : "default"}
            width="100%"
            onClick={() => setIsNego(true)}
          >
            예
          </AuthenticationButton>
        </CS.ButtonInner>
        <CS.ButtonInner>
          <AuthenticationButton
            buttonType={isNego ? "default" : "disabled"}
            width="100%"
            onClick={() => setIsNego(false)}
          >
            아니오
          </AuthenticationButton>
        </CS.ButtonInner>
      </CS.SelectWrap>
    </CS.RegisterInner>
  );
};

export default NegoOption;
