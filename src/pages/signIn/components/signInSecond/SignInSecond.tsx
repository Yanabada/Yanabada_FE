import TextInput from "@components/input/TextInput";
import Notice from "@components/notice";
import * as S from "./signInSecond.styles";

const SignInSecond = () => {
  return (
    <>
      <TextInput variant="move" label="비밀번호" errorMessage={"비밀번호 규칙을 확인해주세요"} />
      <S.NoticeContainer>
        <Notice
          type="default"
          color="orange"
          title="비밀번호는 영문, 숫자, 특수문자 중 2종류 이상을 조합하여 최소 10자리 이상으로 입력해주세요."
        />
      </S.NoticeContainer>
      <TextInput
        variant="move"
        label="비밀번호 확인"
        errorMessage={"동일한 비밀번호를 입력해주세요"}
      />
    </>
  );
};

export default SignInSecond;
