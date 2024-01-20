import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/styles";
import ArrowForwardIcon from "@assets/icons/arrowForwardIcon.svg?react";
import CardSectionButton from "@components/buttons/CardSectionButton";
import ListButton from "@components/buttons/ListButton";
import { useState } from "react";

interface MyPageProps {
  width?: string;
}

const MyPage = ({ width }: MyPageProps) => {
  // FIXME: 추후 로그인 여부에 따라 상태 변경 예정
  const [isLoginned] = useState(true);

  return isLoginned ? (
    <>
      <UpperNavBar title="MY 야나바다" type="back" />
      <S.MyPageContainer>
        <S.LoginButtonWrapper>
          <S.LoginButton>
            {/* FIXME: 추후 변수값으로 대체 예정 */}
            USER123456 <ArrowForwardIcon />
          </S.LoginButton>
        </S.LoginButtonWrapper>

        <CardSectionButton buttonType="abledPay" width={width} />
        <CardSectionButton buttonType="abledPoint" width={width} />

        {/* FIXME: 추후 알람 개수에 따라 alert 개수 변경 */}
        <ListButton width={width} alertCount={1}>
          판매내역
        </ListButton>
        <ListButton width={width} alertCount={1}>
          구매내역
        </ListButton>
        <ListButton width={width}>야나바다 고객센터</ListButton>
        <ListButton width={width}>이용가이드</ListButton>
        <ListButton width={width}>이용약관</ListButton>
        <ListButton width={width}>로그아웃</ListButton>
      </S.MyPageContainer>
    </>
  ) : (
    <>
      <UpperNavBar title="MY 야나바다" type="back" />
      <S.MyPageContainer>
        <S.LoginButtonWrapper>
          <S.LoginButton>
            로그인 및 회원가입 하기 <ArrowForwardIcon />
          </S.LoginButton>
        </S.LoginButtonWrapper>

        <CardSectionButton buttonType="disabledPay" width="332px" />
        <CardSectionButton buttonType="disabledPoint" width="332px" />

        <ListButton width={width}>야나바다 고객센터</ListButton>
        <ListButton width={width}>이용가이드</ListButton>
        <ListButton width={width}>이용약관</ListButton>
      </S.MyPageContainer>
    </>
  );
};

export default MyPage;
