import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles";
import TextInput from "@components/input/TextInput";
import AuthenticationButton from "@components/buttons/AuthenticationButton";
import BaseButton from "@components/buttons/BaseButton";

interface CertificationProps {
  width?: string;
  upperNavBarText: string;
  buttonText: string;
}

const Certification = ({ width, upperNavBarText, buttonText }: CertificationProps) => {
  return (
    <>
      <UpperNavBar title={upperNavBarText} type="back" />
      <S.CertificationContainer>
        <S.CertificationWrapper width={width} gap="16px">
          <TextInput
            variant="move"
            label="휴대폰 번호"
            errorMessage="유효하지 않은 휴대폰 번호입니다."
          />
          <AuthenticationButton buttonType="disabled" width={width}>
            인증번호 전송
          </AuthenticationButton>
          <S.CertificationText>
            인증번호 발송에는 시간이 소요됩니다.
            <br /> 인증번호는 <S.CertificationTextBold>문자메세지</S.CertificationTextBold>로
            발송되며, 수신하지 못했다면 차단된 메세지를 확인해주세요
          </S.CertificationText>
        </S.CertificationWrapper>
        <S.ButtonWrapper>
          <BaseButton buttonType="default">{buttonText}</BaseButton>
        </S.ButtonWrapper>
      </S.CertificationContainer>
    </>
  );
};

export default Certification;
