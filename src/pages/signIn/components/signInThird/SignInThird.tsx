import TextInput from "@components/input/TextInput";
import Notice from "@components/notice";
import * as S from "./signInThird.styles";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import { useState } from "react";
import ColoredButtonForm from "@components/buttons/ColoredButtonForm";
import UpperNavBar from "@components/navBar/upperNavBar";

const SignInThird = () => {
  // TODO - 유효성 검사
  const [isValid] = useState(false);
  const [isMultiple] = useState(false);

  const errMsg = (): string => {
    // TODO - value없으면 early return
    if (!isValid) {
      return "닉네임 규칙을 확인해주세요.";
    } else if (isMultiple) {
      return "이미 사용중인 닉네임입니다.";
    }
    return "";
  };

  return (
    <>
      <UpperNavBar type="back" title={`회원가입(3/4)`} />

      <TextInput variant="move" label="닉네임" errorMessage={errMsg()} />
      <S.NoticeContainer>
        <Notice
          type="default"
          color="orange"
          title="닉네임은 한글과 영문만을 사용하여 3글자 이상, 10글자 이하여야 합니다."
        />
      </S.NoticeContainer>
      <AuthenticationButton buttonType={isValid ? "disabled" : "default"} width="100%">
        중복 확인
      </AuthenticationButton>

      <ColoredButtonForm isBottom={true} width="100%">
        다음
      </ColoredButtonForm>
    </>
  );
};

export default SignInThird;
