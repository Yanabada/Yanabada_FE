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

const Home = () => {
  const isLoggedIn = Cookie.get("isLoggedIn") === "yes";
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

  useEffect(() => {
    if (!isLoggedIn) {
      Cookie.remove("image", { path: "/", domain: ".yanabada.com" });
      Cookie.remove("email", { path: "/", domain: ".yanabada.com" });
      Cookie.remove("id", { path: "/", domain: ".yanabada.com" });
      Cookie.remove("accessToken", { path: "/", domain: ".yanabada.com" });
      Cookie.remove("refreshToken", { path: "/", domain: ".yanabada.com" });
      Cookie.remove("nickName", { path: "/", domain: ".yanabada.com" });
      Cookie.remove("provider", { path: "/", domain: ".yanabada.com" });
      Cookie.remove("isLoggedIn", { path: "/", domain: ".yanabada.com" });
    }
  }, []);

  return (
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
  );
};
export default Home;
