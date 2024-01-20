import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles";
import TextInput from "@components/input/TextInput";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "@components/modal";
import ColoredButtonForm from "@components/buttons/ColoredButtonForm";

interface CertificationProps {
  width?: string;
  upperNavBarText: string;
  buttonText: string;
  handleClick: () => void; // 화면 하단 버튼 동작
}

const Certification = ({ width, upperNavBarText, buttonText, handleClick }: CertificationProps) => {
  const [isSendValid, setIsSendValid] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [isNumCorrect, setIsNumCorrect] = useState(false);
  const [sentCount, setSentCount] = useState(5);
  const [btnText, setBtnText] = useState("인증번호 전송");

  const {
    register,
    setValue,
    formState: { errors },
    getValues
  } = useForm({
    mode: "onBlur"
  });
  const phoneNumber = getValues("phoneNumber");

  // 휴대폰 번호 input 형식 변환 및 입력
  const formatPhoneNumber = (value: string): string => {
    if (value.length > 13) {
      return value.slice(0, 13);
    }
    value = value.replace(/[^0-9]/g, "").replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    return value;
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);

    setValue("phoneNumber", formattedValue);
    if (formattedValue.length >= 12) {
      setIsSendValid(true);
    }
  };

  // 인증번호 전송 남은 횟수
  const handleAuthenticationBtnClick = () => {
    // TODO - 인증번호 재전송 5회 소진시 동작 기획에 맞게 수정
    if (!isSendValid || sentCount < 0) {
      return;
    }
    setSentCount(sentCount - 1);
    setBtnText(`인증번호 재전송(남은 횟수 ${sentCount}회)`);
    setIsModalVisible(true);
  };

  // 인증번호 유효성검사
  const isCodeValid = (value: number) => {
    //  TODO - 인증번호 같은지 비교하는 로직 추가
    if (value.toString().length === 6) {
      setIsNumCorrect(true);
      return true;
    }
    setIsNumCorrect(false);
    return false;
  };

  return (
    <>
      <UpperNavBar title={upperNavBarText} type="back" />
      <S.CertificationContainer>
        <S.CertificationWrapper width={width} gap="16px">
          <TextInput
            variant="move"
            label="휴대폰 번호"
            {...register("phoneNumber", {
              required: true,
              pattern: {
                value: /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/,
                message: "유효하지 않은 휴대폰 번호입니다."
              }
            })}
            onChange={handlePhoneNumberChange}
            errorMessage={errors.phoneNumber && `${errors.phoneNumber?.message}`}
          />
          <AuthenticationButton
            buttonType={isSendValid ? "disabled" : "abled"}
            width={width}
            onClick={handleAuthenticationBtnClick}
          >
            {btnText}
          </AuthenticationButton>

          <S.InputContainer>
            {openInput && (
              <TextInput
                type="number"
                variant="move"
                label="인증번호 6자리"
                {...register("code", {
                  required: true,
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "숫자만 입력하세요."
                  },
                  validate: {
                    validCode: (value) => isCodeValid(value) || "인증번호가 올바르지 않습니다."
                  }
                })}
                errorMessage={errors.code && `${errors.code?.message}`}
              />
            )}

            <S.CertificationText>
              인증번호 발송에는 시간이 소요됩니다.
              <br /> 인증번호는 <S.CertificationTextBold>문자메세지</S.CertificationTextBold>로
              발송되며, 수신하지 못했다면 차단된 메세지를 확인해주세요
            </S.CertificationText>
          </S.InputContainer>
        </S.CertificationWrapper>
        <S.ButtonWrapper>
          <ColoredButtonForm
            isActive={isNumCorrect}
            isBottom={true}
            width="100%"
            onClick={handleClick}
          >
            {buttonText}
          </ColoredButtonForm>
        </S.ButtonWrapper>
      </S.CertificationContainer>
      <Modal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        leftBtnText="아니오"
        rightBtnText="전송하기"
        title={
          <>
            <p>입력한 휴대폰 번호로</p>
            <br />
            <p>인증번호를 전송하시겠어요?</p>
          </>
        }
        content={phoneNumber}
        leftAction={() => {
          setIsModalVisible(false);
        }}
        rightAction={() => {
          // TODO - 전송하기 클릭 시 문자 전송 로직 함수 & 따로 handle 함수로 분리하기
          setIsModalVisible(false);
          setOpenInput(true);
          setValue("code", "");
        }}
      />
    </>
  );
};

export default Certification;
