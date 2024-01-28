import * as S from "./styles/style";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Banner from "./components/Banner";
import RecentlyProduct from "./components/RecentlyProduct";
import CategoryProduct from "./components/CategoryProduct";
import SpecialServices from "./components/SpecialServices";
import CategoryList from "./components/CategoryList";
import SubServices from "./components/SubServices";
import Footer from "./components/Footer";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import useFCMToken from "./hooks/useFCMToken";
import { requestPermission } from "../../firebase-messaging-sw";
import Cookie from "js-cookie";
import { getStoredToken } from "@utils/indexDB";
import useNotifications from "@pages/notice/queries";
import Lottie from "lottie-react";
import approveLottie from "@assets/lotties/approve.json";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoggedIn = Cookie.get("isLoggedIn") === "yes";
  const { data } = useNotifications(isLoggedIn);
  const [FCMToken, setFCMToken] = useState<string | null | undefined>("");
  const [tokenFromCookie, setTokenFromCookie] = useState<string | undefined>("");

  const { mutate, isSuccess } = useFCMToken();

  useEffect(() => {
    const initToken = async () => {
      await requestPermission();
      const token = await getStoredToken();
      setFCMToken(token);
    };

    if (isLoggedIn) {
      initToken();
    }
  }, [isLoggedIn]);

  const in60Minutes = 1 / 24;

  useEffect(() => {
    if (FCMToken && !tokenFromCookie) {
      mutate(FCMToken);
      Cookie.set("FCMToken", FCMToken, { expires: in60Minutes });
    }
  }, [FCMToken, tokenFromCookie]);

  useEffect(() => {
    if (isSuccess) {
      setTokenFromCookie(Cookie.get("FCMToken"));
    }
  }, [isSuccess]);

  const tradeRequest = data?.data.notifications.find((item) => item.type === "TRADE_REQUEST");
  const clickedNotification = localStorage.getItem("notificationId");
  const checkNotification =
    tradeRequest && tradeRequest.notificationId.toString() !== clickedNotification;

  const handleNotificationClick = () => {
    localStorage.setItem("notificationId", tradeRequest?.notificationId.toString() || "");
  };

  return (
    <>
      <S.Container>
        <Header />
        <SearchInput />
        <Banner />
        <RecentlyProduct />
        <Suspense fallback={<p>Loading...</p>}>
          <CategoryProduct
            title="마감 임박 상품"
            link="/products?order=END_DATE_ASC"
            rowCardProps="마감임박"
          />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <CategoryProduct
            title="높은 할인율 상품"
            link="/products?order=SALES_PERCENTAGE_DESC"
            rowCardProps="높은할인율"
          />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <SpecialServices />
        </Suspense>
        <CategoryList />
        <Suspense fallback={<p>Loading...</p>}>
          <SubServices />
        </Suspense>
        <Footer />
      </S.Container>
      {checkNotification && (
        <Link to="/mypage/management" onClick={handleNotificationClick}>
          <S.AlarmContainer>
            <S.LottieContainer>
              <Lottie animationData={approveLottie} />
            </S.LottieContainer>
            <S.TextContainer>
              <S.LinkContainer>
                <S.LinkText>판매승인하러 가기</S.LinkText>
                <S.ArrowIcon />
              </S.LinkContainer>
              <S.Text>등록하신 매물이 승인 대기중입니다.</S.Text>
            </S.TextContainer>
          </S.AlarmContainer>
        </Link>
      )}
    </>
  );
};
export default Home;
