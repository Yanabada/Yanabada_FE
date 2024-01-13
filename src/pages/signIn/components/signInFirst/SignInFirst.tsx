import { useState } from "react";
import TextInput from "@components/input/TextInput";
import Notice from "@components/notice";
import * as S from "./signInFirst.styles";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import ColoredButtonForm from "@components/buttons/ColoredButtonForm";
import { Link } from "react-router-dom";
import UpperNavBar from "@components/navBar/upperNavBar";

const SignInFirst = () => {
  const [emailInput, setEmailInput] = useState("");
  const [numInput, setNumInput] = useState("");
  // TODO - 유효성 검사 통과 & emailInput 존재할 때 setIsSuccess(true);
  const [isSuccess] = useState(true);
  const [sentCount, setSentCount] = useState(5);
  const [btnText, setBtnText] = useState("인증번호 전송");
  const [openInput, setOpenInput] = useState(false);
  // TODO - 유효성 검사 추가 & 판단 시점 여쭤보고 반영
  const [isNumCorrect] = useState(false);

  const handleAuthenticationBtnClick = () => {
    // TODO - 인증번호 재전송 5회 소진시 동작 기획에 맞게 수정
    if (!isSuccess || sentCount <= 0) {
      return;
    }
    setSentCount(sentCount - 1);
    setBtnText(`인증번호 재전송(남은 횟수 ${sentCount}회)`);
    // TODO - 인증번호 전송 로직
    setOpenInput(true);
  };

  return (
    <>
      <UpperNavBar type="back" title={`회원가입(1/4)`} />

      <TextInput
        value={emailInput}
        onChange={(e) => {
          setEmailInput(e.target.value);
        }}
        variant="move"
        label="이메일"
        isSuccess={isSuccess}
        errorMessage={emailInput && !isSuccess ? "이메일이 올바르지 않습니다." : ""}
      />
      <Notice
        type="default"
        color="orange"
        title="회원 가입시 ID는 반드시 본인 소유의 연락 가능한 이메일 주소를 사용하여야 합니다."
      />
      <S.ButtonContainer>
        <AuthenticationButton
          type={isSuccess ? "disabled" : "default"}
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
            value={numInput}
            onChange={(e) => {
              setNumInput(e.target.value);
            }}
            variant="move"
            label="인증번호 6자리"
            errorMessage={numInput && !isNumCorrect ? "인증번호가 올바르지 않습니다." : ""}
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
      <Link to="/signin/1">
        <ColoredButtonForm isBottom={true} width="100%">
          다음
        </ColoredButtonForm>
      </Link>
    </>
  );
};

export default SignInFirst;
