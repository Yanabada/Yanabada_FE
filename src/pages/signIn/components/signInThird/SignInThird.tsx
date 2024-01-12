import TextInput from "@components/input/TextInput";
import Notice from "@components/notice";
import * as S from "./signInThird.styles";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import { useState } from "react";

const SignInSecond = () => {
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
      <TextInput variant="move" label="닉네임" errorMessage={errMsg()} />
      <S.NoticeContainer>
        <Notice
          type="default"
          color="orange"
          title="닉네임은 한글과 영문만을 사용하여 3글자 이상, 10글자 이하여야 합니다."
        />
      </S.NoticeContainer>
      <AuthenticationButton type={isValid ? "disabled" : "default"} width="100%">
        중복 확인
      </AuthenticationButton>
    </>
  );
};

export default SignInSecond;
