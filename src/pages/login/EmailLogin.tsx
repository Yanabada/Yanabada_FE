import TextInput from "@components/input/TextInput";
import UpperNavBar from "@components/navBar/upperNavBar";
import BaseButton from "@components/buttons/BaseButton";
import { IoChevronForwardSharp } from "react-icons/io5";
import * as S from "./styles/emailLogin.styles";
import * as C from "./styles/login.styles";
import { useState } from "react";
import BottomSheet from "@components/bottomSheet";
import { useNavigate } from "react-router-dom";

const EmailLogin = () => {
  const navigate = useNavigate();

  const [emailChecked] = useState(true);
  const [psChecked] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [isRequiredChecked] = useState(false);

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
        <C.BtnFlex>
          비밀번호 재설정
          <IoChevronForwardSharp />
        </C.BtnFlex>
        |
        <C.BtnFlex onClick={() => setSheetVisible(!sheetVisible)}>
          이메일로 회원가입
          <IoChevronForwardSharp />
        </C.BtnFlex>
      </S.BtnFlexContainer>
      <BottomSheet title="약관 동의" isVisible={sheetVisible} setIsVisible={setSheetVisible}>
        <S.AgreementContainer>
          체크박스들
          <BaseButton
            type={isRequiredChecked ? "default" : "disabled-default"}
            width="100%"
            onClick={() => {
              if (isRequiredChecked) {
                navigate("/signIn");
              }
            }}
          >
            동의하고 계속하기
          </BaseButton>
        </S.AgreementContainer>
      </BottomSheet>
    </S.EmailLoginContainer>
  );
};

export default EmailLogin;
