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
import { useEffect } from "react";
import useFCMToken from "./hooks/useFCMToken";
import { requestPermission } from "../../firebase-messaging-sw";

const Home = () => {
  let FCMToken: string | null = "";

  const { mutate } = useFCMToken();

  useEffect(() => {
    async () => {
      await requestPermission();
      FCMToken = localStorage.getItem("FCMToken");
    };
  }, []);

  useEffect(() => {
    if (FCMToken) {
      mutate(FCMToken);
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
