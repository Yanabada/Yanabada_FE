import TextInput from "@components/input/TextInput";
import Notice from "@components/notice";
import * as S from "./signInThird.styles";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import { useEffect, useState } from "react";
import ColoredButtonForm from "@components/buttons/ColoredButtonForm";
import UpperNavBar from "@components/navBar/upperNavBar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
  nickname: string;
}

const SignInThird = () => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [isMultiple, setIsMultiple] = useState(true);

  const {
    register,
    formState: { errors },
    getValues,
    setError
  } = useForm<FormData>({
    mode: "onBlur"
  });
  const nickname = getValues("nickname");

  useEffect(() => {
    if (!errors.nickname && nickname) {
      setIsValid(true);
    }
  }, [nickname, errors.nickname]);

  const handleCheckMultiple = () => {
    // TODO - 이미 존재하는 닉네밍인지 체크하는 로직
    // 실패시 early return;
    setError("nickname", {
      type: "manual",
      message: "이미 사용중인 닉네임입니다."
    });
    // 성공시
    setIsMultiple(false);
  };

  return (
    <>
      <UpperNavBar type="back" title={`회원가입(3/4)`} />

      <TextInput
        variant="move"
        label="닉네임"
        {...register("nickname", {
          required: true,
          pattern: {
            value: /^[A-Za-z가-힣]{2,8}$/,
            message: "닉네임 규칙을 확인해주세요."
          }
        })}
        errorMessage={errors.nickname && `${errors.nickname?.message}`}
      />
      <S.NoticeContainer>
        <Notice
          type="default"
          color="orange"
          title="닉네임은 한글과 영문만을 사용하여 2글자 이상, 8글자 이하여야 합니다."
        />
      </S.NoticeContainer>
      <AuthenticationButton
        buttonType={isValid ? "disabled" : "default"}
        width="100%"
        onClick={handleCheckMultiple}
      >
        중복 확인
      </AuthenticationButton>

      <ColoredButtonForm
        isBottom={true}
        width="100%"
        isActive={!isMultiple}
        onClick={() => {
          if (isMultiple) {
            return;
          }
          navigate("/signin/3");
        }}
      >
        다음
      </ColoredButtonForm>
    </>
  );
};

export default SignInThird;
