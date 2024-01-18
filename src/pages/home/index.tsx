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

const Home = () => {
  return (
    <S.Container>
      <Header />
      <SearchInput />
      <Banner />
      <RecentlyProduct />
      <CategoryProduct title="마감 임박 상품" link="/products" rowCardProps="마감임박" />
      <CategoryProduct title="높은 할인율 상품" link="/products" rowCardProps="높안할인율" />
      <SpecialServices />
      <CategoryList />
      <SubServices />
      <Footer />
    </S.Container>
  );
};
export default Home;
