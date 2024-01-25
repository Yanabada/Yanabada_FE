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

const Home = () => {
  const [isLoginned, setIsLoginned] = useState(false);
  const [FCMToken, setFCMToken] = useState<string | null | undefined>("");
  const [tokenFromCookie, setTokenFromCookie] = useState<string | undefined>("");

  const { mutate } = useFCMToken();

  useEffect(() => {
    const id = Cookie.get("id");
    console.log("id", id);
    if (id) {
      setIsLoginned(true);
    }
  }, []);

  useEffect(() => {
    if (isLoginned) {
      requestPermission();
      setFCMToken(localStorage.get("FCMToken"));
    }
  }, [isLoginned]);

  const in60Minutes = 1 / 24;

  useEffect(() => {
    if (FCMToken && !tokenFromCookie) {
      mutate(FCMToken);
      Cookie.set("FCMToken", FCMToken, { expires: in60Minutes });
      setTokenFromCookie(Cookie.get("FCMToken"));
    }
  }, [FCMToken]);

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
