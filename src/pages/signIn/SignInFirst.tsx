import TextInput from "@components/input/TextInput";
import Notice from "@components/notice";
import * as S from "./styles/signInFirst.styles";

const SignInFirst = () => {
  return (
    <>
      <TextInput
        variant="move"
        label="이메일"
        isSuccess={true}
        // errorMessage={"이메일이 올바르지 않습니다."}
      />
      <Notice
        type="default"
        color="orange"
        title="회원 가입시 ID는 반드시 본인 소유의 연락 가능한 이메일 주소를 사용하여야 합니다."
      />
      <S.InformText>
        인증번호 발송에는 시간이 소요되며 하루 최대 5회까지 전송할 수 있습니다.
      </S.InformText>
      <S.InformText>
        인증번호는 <S.ImportantText>입력한 이메일 주소</S.ImportantText>로 발송됩니다. 수신하지
        못했다면 스팸함 또는 해당 이메일 서비스의 설정을 확인해주세요.
      </S.InformText>
    </>
  );
};

export default SignInFirst;
