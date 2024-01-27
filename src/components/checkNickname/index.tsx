import TextInput from "@components/input/TextInput";
import Notice from "@components/notice";
import * as S from "./styles";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import { useEffect, useState } from "react";
import ColoredButtonForm from "@components/buttons/ColoredButtonForm";
import UpperNavBar from "@components/navBar/upperNavBar";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import SignInDataStore from "@pages/signIn/stores/SignInDataStore";
import compareNicknameApi from "@pages/signIn/apis/compareNicknameApi";
interface FormData {
  nickname: string;
}

interface CheckNicknameProps {
  title: string;
  to: string;
}

const CheckNickname = ({ title, to }: CheckNicknameProps) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [isMultiple, setIsMultiple] = useState(true);
  const { setEmail, setNickname } = SignInDataStore();
  const [searchParams] = useSearchParams();
  const providerParam = searchParams.get("provider");
  const emailParam = searchParams.get("email");

  const {
    register,
    formState: { errors },
    getValues,
    setError
  } = useForm<FormData>({
    mode: "onChange"
  });
  const nickname = getValues("nickname");

  useEffect(() => {
    if (!errors.nickname && nickname) {
      setIsValid(true);
    }
  }, [nickname, errors.nickname]);

  useEffect(() => {
    if (providerParam === "KAKAO") {
      setEmail(emailParam!);
    }
  }, []);

  // 닉네임 중복 확인
  const handleCheckMultiple = async (): Promise<void> => {
    try {
      const isDuplication = await compareNicknameApi(nickname);
      if (isDuplication) {
        setError("nickname", {
          type: "manual",
          message: "이미 사용중인 닉네임입니다."
        });
      } else {
        setIsMultiple(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <UpperNavBar type="back" title={title} />

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
          setNickname(nickname);
          navigate(to);
        }}
      >
        다음
      </ColoredButtonForm>
    </>
  );
};

export default CheckNickname;
