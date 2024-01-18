import * as S from "./style";
import YanabadaIcon from "@assets/icons/yanabada_ci.svg?react";

interface PhoneNumberProps {
  phoneNumber: string;
}

const Footer = ({ phoneNumber }: PhoneNumberProps) => {
  return (
    <S.Container>
      <S.PhoneContainer>
        <S.Text>숙소 문의</S.Text>
        <S.PhoneNumber> {phoneNumber}</S.PhoneNumber>
      </S.PhoneContainer>
      <S.FooterContainer>
        <YanabadaIcon />
        <S.YanabadaText>
          야나바다는 야놀자와 연계한 패스트캠퍼스 부트캠프 프로젝트로 실제 야놀자 서비스와
          무관합니다
        </S.YanabadaText>
        <S.YanabadaText>
          (주) 야나바다는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의 예약, 이용 및 환불
          등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </S.YanabadaText>
      </S.FooterContainer>
    </S.Container>
  );
};

export default Footer;
