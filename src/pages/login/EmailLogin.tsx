import TextInput from "@components/input/TextInput";
import UpperNavBar from "@components/navBar/upperNavBar";
import BaseButton from "@components/buttons/BaseButton";
import { IoChevronForwardSharp } from "react-icons/io5";
import * as S from "./styles/emailLogin.styles";
import * as C from "./styles/login.styles";
import { useState } from "react";
import SignInBottomSheet from "./components/signInBottomSheet/SignInBottomSheet";
import { useForm } from "react-hook-form";

const EmailLogin = () => {
  const [sheetVisible, setSheetVisible] = useState(false);

  const {
    register,
    formState: { errors },
    getValues
  } = useForm({
    mode: "onBlur"
  });

  const email = getValues("email");
  const password = getValues("password");
  console.log("email", email);
  console.log("password", password);
  console.log("errors.email", errors.email);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errors.email || errors.password) return;
    // TODO - API 연동
    console.log("submit");
  };

  return (
    <S.EmailLoginContainer>
      <UpperNavBar title="이메일로 로그인" type="back" shape="fill" />
      <form onSubmit={onSubmit}>
        <S.InputWrapper>
          <div>
            <TextInput
              variant="move"
              label="이메일"
              isSuccess={true}
              {...register("email", {
                required: true,
                pattern: {
                  // 8-20자 사이, 최소 하나의 숫자, 영문자, 특수문자를 포함, 공백 X
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                  message: "유효한 이메일 주소를 입력하세요"
                }
              })}
              errorMessage={errors.email && `${errors.email?.message}`}
            />
          </div>
          <div>
            <TextInput
              variant="move"
              label="비밀번호"
              isSuccess={true}
              {...register("password", {
                required: true,
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,20}$/,
                  message: "비밀번호가 올바르지 않습니다."
                }
              })}
              errorMessage={errors.password && `${errors.password?.message}`}
            />
          </div>
        </S.InputWrapper>

        <BaseButton
          buttonType={!errors.email && !errors.password ? "default" : "disabled-default"}
          width="100%"
          type="submit"
        >
          로그인
        </BaseButton>
      </form>
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
      <SignInBottomSheet sheetVisible={sheetVisible} setSheetVisible={setSheetVisible} />
    </S.EmailLoginContainer>
  );
};

export default EmailLogin;
