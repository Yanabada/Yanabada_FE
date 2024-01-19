import TextInput from "@components/input/TextInput";
import Notice from "@components/notice";
import * as S from "./signInSecond.styles";
import { useNavigate } from "react-router-dom";
import ColoredButtonForm from "@components/buttons/ColoredButtonForm";
import UpperNavBar from "@components/navBar/upperNavBar";
import { useForm } from "react-hook-form";
import { useState } from "react";

const SignInSecond = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    getValues
  } = useForm({
    mode: "onBlur"
  });

  const [isPassed, setIsPassed] = useState(false);

  const password = getValues("password");

  const isCodeValid = (value: string) => {
    console.log(value, "value");
    if (value === password) {
      setIsPassed(true);
      return true;
    }
    return false;
  };

  return (
    <>
      <UpperNavBar type="back" title={`회원가입(2/4)`} />

      <TextInput
        variant="move"
        label="비밀번호"
        {...register("password", {
          required: true,
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,20}$/,
            message: "비밀번호가 올바르지 않습니다."
          }
        })}
        errorMessage={errors.password && `${errors.password?.message}`}
      />
      <S.NoticeContainer>
        <Notice
          type="default"
          color="orange"
          title="비밀번호는 8-20자 사이여야 하며, 최소 하나의 숫자, 영문자, 특수문자를 포함하여야 합니다."
        />
      </S.NoticeContainer>
      <TextInput
        variant="move"
        label="비밀번호 확인"
        {...register("secondPassword", {
          required: true,
          validate: {
            validCode: (value) => isCodeValid(value) || "동일한 비밀번호를 입력해주세요."
          }
        })}
        errorMessage={errors.secondPassword && `${errors.secondPassword?.message}`}
      />

      <ColoredButtonForm
        isBottom={true}
        width="100%"
        isActive={isPassed}
        onClick={() => {
          if (!isPassed) {
            return;
          }
          navigate("/signin/2");
        }}
      >
        다음
      </ColoredButtonForm>
    </>
  );
};

export default SignInSecond;
