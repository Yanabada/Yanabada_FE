import { useEffect, useState } from "react";
import TextInput from "@components/input/TextInput";
import Notice from "@components/notice";
import * as S from "./styles";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import ColoredButtonForm from "@components/buttons/ColoredButtonForm";
import { useNavigate } from "react-router-dom";
import UpperNavBar from "@components/navBar/upperNavBar";
import { useForm } from "react-hook-form";
import useEmailAuth from "@pages/signIn/hooks/useEmailAuth";
import SignInDataStore from "@pages/signIn/stores/SignInDataStore";

interface CheckEmailProps {
  type: "back" | "close" | "backClose";
  title: string;
  to: string;
  noticeTitle?: string;
}

interface FormData {
  email: string;
  code: number;
}

const CheckEmail = ({ type, title, to, noticeTitle }: CheckEmailProps) => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [sentCount, setSentCount] = useState(5);
  const [btnText, setBtnText] = useState("인증번호 전송");
  const [openInput, setOpenInput] = useState(false);
  const [isNumCorrect, setIsNumCorrect] = useState(false);
  const { setEmail } = SignInDataStore();

  const {
    register,
    formState: { errors },
    getValues,
    trigger
  } = useForm<FormData>({
    mode: "onBlur"
  });
  const email = getValues("email");

  // 최초 렌더링 시에도 유효성 검사 적용
  useEffect(() => {
    trigger("email");
  }, []);

  useEffect(() => {
    if (!errors.email && email) {
      setIsSuccess(true);
      return;
    }
    setIsSuccess(false);
  }, [email, errors.email]);

  const { mutate, isSuccess: isMutateSuccess, data } = useEmailAuth();

  // 인증번호 유효성검사
  const isCodeValid = (value: number) => {
    if (data && value === data.code.toString()) {
      setIsNumCorrect(true);
      return true;
    }

    setIsNumCorrect(false);
    return false;
  };

  const handleAuthenticationBtnClick = () => {
    // TODO - 인증번호 재전송 5회 소진시 동작 기획에 맞게 수정
    if (!isSuccess || sentCount <= 0) {
      return;
    }
    setSentCount(sentCount - 1);

    mutate(email);
  };

  useEffect(() => {
    setBtnText(`인증번호 재전송(남은 횟수 ${sentCount}회)`);
  }, [sentCount]);

  useEffect(() => {
    // TODO - 인증번호 전송 로직
    isMutateSuccess && setOpenInput(true);
  }, [isMutateSuccess]);

  return (
    <>
      <UpperNavBar type={type} title={title} />

      <TextInput
        variant="move"
        label="이메일"
        isSuccess={isSuccess}
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
      <Notice
        type="default"
        color="orange"
        title={
          noticeTitle
            ? noticeTitle
            : "회원 가입시 ID는 반드시 본인 소유의 연락 가능한 이메일 주소를 사용하여야 합니다."
        }
      />
      <S.ButtonContainer>
        <AuthenticationButton
          buttonType={isSuccess ? "disabled" : "default"}
          width="100%"
          onClick={handleAuthenticationBtnClick}
        >
          {btnText}
        </AuthenticationButton>
      </S.ButtonContainer>

      {openInput && (
        <S.InputContainer>
          {/* TODO - 시간제한 추가 */}
          <TextInput
            type="number"
            variant="move"
            label="인증번호 6자리"
            {...register("code", {
              required: true,
              validate: {
                validCode: (value) => isCodeValid(value) || "인증번호가 올바르지 않습니다."
              }
            })}
            errorMessage={errors.code && `${errors.code?.message}`}
          />
        </S.InputContainer>
      )}

      <S.InformText>
        인증번호 발송에는 시간이 소요되며 하루 최대 5회까지 전송할 수 있습니다.
      </S.InformText>
      <S.InformText>
        인증번호는 <S.ImportantText>입력한 이메일 주소</S.ImportantText>로 발송됩니다. 수신하지
        못했다면 스팸함 또는 해당 이메일 서비스의 설정을 확인해주세요.
      </S.InformText>

      <ColoredButtonForm
        isBottom={true}
        width="100%"
        isActive={isNumCorrect}
        onClick={() => {
          if (!isSuccess || !isNumCorrect) {
            return;
          }
          setEmail(email);
          navigate(to);
        }}
      >
        다음
      </ColoredButtonForm>
    </>
  );
};

export default CheckEmail;
