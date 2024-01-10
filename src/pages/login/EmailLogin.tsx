import TextInput from "@components/input/TextInput";
import UpperNavBar from "@components/navBar/upperNavBar";
import BaseButton from "@components/buttons/BaseButton";
import { IoChevronForwardSharp } from "react-icons/io5";
import * as S from "./styles/loginStyle";
import { useState } from "react";

const EmailLogin = () => {
  const [emailChecked] = useState(true);
  const [psChecked] = useState(true);

  return (
    <S.EmailLoginContainer>
      <UpperNavBar title="이메일로 로그인" type="back" shape="fill" />
      <S.InputWrapper>
        <TextInput
          variant="move"
          label="이메일"
          isSuccess={true}
          // errorMessage={"이메일이 올바르지 않습니다."}
        />
        <TextInput
          variant="move"
          label="비밀번호"
          isSuccess={true}
          // errorMessage="비밀번호가 올바르지 않습니다."
        />
      </S.InputWrapper>

      <BaseButton type={emailChecked && psChecked ? "default" : "disabled-default"} width="100%">
        로그인
      </BaseButton>
      <S.BtnFlexContainer>
        <S.BtnFlex>
          비밀번호 재설정
          <IoChevronForwardSharp />
        </S.BtnFlex>
        |
        <S.BtnFlex>
          이메일로 회원가입
          <IoChevronForwardSharp />
        </S.BtnFlex>
      </S.BtnFlexContainer>
    </S.EmailLoginContainer>
  );
};

export default EmailLogin;
