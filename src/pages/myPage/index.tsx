import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/styles";
import ArrowForwardIcon from "@assets/icons/arrowForwardIcon.svg?react";
import CardSectionButton from "@components/buttons/CardSectionButton";
import ListButton from "@components/buttons/ListButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@components/modal";
import { useNavigate } from "react-router-dom";
import NumberBadge from "@components/numberBadge";
import { FaRegBell } from "react-icons/fa";
import useProfileDetail from "./hooks/useProfileDetail";
import usePutPhoneNumber from "./hooks/useLogout";
import useBalance from "./hooks/useBalance";
import Cookie from "js-cookie";

interface MyPageProps {
  width?: string;
}

const MyPage = ({ width }: MyPageProps) => {
  // FIXME: 추후 로그인 여부에 따라 상태 변경 예정(localstorage member이용)
  const [isLoginned, setIsLoginned] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const navigate = useNavigate();

  const loginModalProps = {
    title: "회원가입 또는 로그인 후 사용할 수 있습니다.",
    leftBtnText: "로그인/가입",
    rightBtnText: "취소",
    isVisible: isLoginModalVisible,
    setIsVisible: setIsLoginModalVisible,
    leftAction: () => navigate("/login"),
    rightAction: () => setIsLoginModalVisible(false)
  };

  const { data: profileData, error: profileError, refetch: profileRefetch } = useProfileDetail();
  const { data: balanceData, error: balanceError, refetch: balanceRefetch } = useBalance();
  const { mutate } = usePutPhoneNumber();

  if (profileError) {
    console.log(profileError);
  }

  if (balanceError) {
    console.log(balanceError);
  }

  const logoutModalProps = {
    title: "로그아웃 하시겠습니까?",
    leftBtnText: "확인",
    rightBtnText: "취소",
    isVisible: isLogoutModalVisible,
    setIsVisible: setIsLogoutModalVisible,
    leftAction: () => {
      // FIXME: localStorage에서 member 삭제 로직 추가
      mutate();
      localStorage.removeItem("member");
      setIsLoginned(false);
      navigate("/mypage");
    },
    rightAction: () => setIsLogoutModalVisible(false)
  };

  useEffect(() => {
    const token = Cookie.get("accessToken");
    console.log("token", token);
    if (token) {
      setIsLoginned(true);
    }
  }, []);

  useEffect(() => {
    if (isLoginned) {
      profileRefetch();
      balanceRefetch();
    }
  }, [isLoginned]);

  return isLoginned ? (
    <>
      <UpperNavBar
        title="MY 야나바다"
        type="back"
        rightElement={
          <Link to="/notice">
            <S.BellContainer>
              <NumberBadge number={6} />
              <FaRegBell className="bell" />
            </S.BellContainer>
          </Link>
        }
      />
      <S.MyPageContainer>
        <S.LoginButtonWrapper>
          <Link to="/mypage/profile">
            <S.LoginButton>
              {profileData?.id}
              <ArrowForwardIcon />
            </S.LoginButton>
          </Link>
        </S.LoginButtonWrapper>

        {balanceData?.hasJoinedYanoljaPay ? (
          <CardSectionButton buttonType="abledPay" width={width} />
        ) : (
          <CardSectionButton buttonType="abledPay_notRegistered" width={width} />
        )}

        <Link to="/points/list">
          <CardSectionButton buttonType="abledPoint" width={width} />
        </Link>
        {/* FIXME: 승인요청관리 페이지(G-10)으로 이동 */}
        <Link to="/mypage/management">
          <CardSectionButton buttonType="management" width={width} />
        </Link>

        {/* FIXME: 추후 알람 개수에 따라 alert 개수 변경 */}
        <Link to="/mypage/salesHistory">
          <ListButton width={width} alertCount={1}>
            판매내역
          </ListButton>
        </Link>

        <Link to="/mypage/purchaseHistory">
          <ListButton width={width} alertCount={1}>
            구매내역
          </ListButton>
        </Link>

        {/* FIXME: 야나바다 고객센터 페이지(G-7)으로 이동 */}
        <ListButton width={width}>야나바다 고객센터</ListButton>

        {/* FIXME: 이용가이드 페이지(G-8)으로 이동 */}
        <ListButton width={width}>이용가이드</ListButton>

        {/* FIXME: 이용약관 페이지(G-9)으로 이동 */}
        <ListButton width={width}>이용약관</ListButton>
        <ListButton
          width={width}
          onClick={() => {
            setIsLogoutModalVisible(true);
          }}
        >
          로그아웃
        </ListButton>
        <Modal {...logoutModalProps} />
      </S.MyPageContainer>
    </>
  ) : (
    <>
      <UpperNavBar title="MY 야나바다" type="back" />
      <S.MyPageContainer>
        <S.LoginButtonWrapper>
          <Link to="/login">
            <S.LoginButton>
              로그인 및 회원가입 하기 <ArrowForwardIcon />
            </S.LoginButton>
          </Link>
        </S.LoginButtonWrapper>

        <CardSectionButton
          buttonType="disabledPay"
          width={width}
          onClick={() => {
            setIsLoginModalVisible(true);
          }}
        />
        <Modal {...loginModalProps} />
        <CardSectionButton buttonType="disabledPoint" width={width} />

        <ListButton width={width}>야나바다 고객센터</ListButton>
        <ListButton width={width}>이용가이드</ListButton>
        <ListButton width={width}>이용약관</ListButton>
      </S.MyPageContainer>
    </>
  );
};

export default MyPage;
