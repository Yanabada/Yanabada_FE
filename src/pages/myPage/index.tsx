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
import useLogout from "./hooks/useLogout";
import useBalance from "./hooks/useBalance";
import Cookies from "js-cookie";
import useNotifications from "@pages/notice/queries";
import SalesIcon from "@assets/icons/salesIcon.svg?react";
import PurchaseIcon from "@assets/icons/purchaseIcon.svg?react";
import InfoCenterIcon from "@assets/icons/infoCenterIcon.svg?react";
import GuideIcon from "@assets/icons/guideIcon.svg?react";
import TermIcon from "@assets/icons/termIcon.svg?react";
import LogoutIcon from "@assets/icons/logoutIcon.svg?react";

interface MyPageProps {
  width?: string;
}

const MyPage = ({ width }: MyPageProps) => {
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

  const { mutate } = usePutPhoneNumber();
  const isLoggedIn = Cookies.get("isLoggedIn") === "yes";
  const {
    data: profileData,
    error: profileError,
    refetch: profileRefetch
  } = useProfileDetail(isLoggedIn);
  const {
    data: balanceData,
    error: balanceError,
    refetch: balanceRefetch
  } = useBalance(isLoggedIn);

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
      mutate();
    },
    rightAction: () => setIsLogoutModalVisible(false)
  };

  useEffect(() => {
    if (isLoggedIn) {
      profileRefetch();
      balanceRefetch();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    Cookies.remove("image");
    Cookies.remove("email");
    Cookies.remove("id");
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("nickName");
    Cookies.remove("provider");
    Cookies.set("isLoggedIn", "no");

    navigate("/mypage");
  }, [isSuccess]);

  return isLoggedIn ? (
    <>
      <UpperNavBar
        title="MY 야나바다"
        type="back"
        rightElement={
          <Link to="/notice">
            <S.BellContainer>
              <NumberBadge number={notificationData?.data.notifications.length} />
              <FaRegBell className="bell" />
            </S.BellContainer>
          </Link>
        }
      />
      <S.MyPageContainer>
        <S.LoginButtonWrapper>
          <Link to="/mypage/profile">
            <S.LoginButton>
              {profileData?.nickName} <ArrowForwardIcon />
            </S.LoginButton>
          </Link>
        </S.LoginButtonWrapper>

        {balanceData?.hasJoinedYanoljaPay ? (
          <CardSectionButton buttonType="abledPay" width={width} />
        ) : (
          <CardSectionButton buttonType="abledPay_notRegistered" width={width} />
        )}

        {/* <Link to="/points/list">
          <CardSectionButton buttonType="abledPoint" width={width} />
        </Link> */}

        <Link to="/mypage/management">
          <CardSectionButton buttonType="management" width={width} />
        </Link>

        <Link to="/mypage/salesHistory">
          <ListButton width={width} icon={<SalesIcon />}>
            판매내역
          </ListButton>
        </Link>

        <Link to="/mypage/purchaseHistory">
          <ListButton width={width} icon={<PurchaseIcon />}>
            구매내역
          </ListButton>
        </Link>

        <ListButton width={width} icon={<InfoCenterIcon />}>
          야나바다 고객센터
        </ListButton>

        <ListButton width={width} icon={<GuideIcon />}>
          이용가이드
        </ListButton>

        <ListButton width={width} icon={<TermIcon />}>
          이용약관
        </ListButton>

        <ListButton
          width={width}
          icon={<LogoutIcon />}
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
