import * as S from "./styles/style";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Banner from "./components/Banner";
import RecentlyProduct from "./components/RecentlyProduct";
import CategoryProduct from "./components/CategoryProduct";

const Home = () => {
  return (
    <S.Container>
      <Header />
      <SearchInput />
      <Banner />
      <RecentlyProduct />
      <CategoryProduct title="마감 임박 상품" link="/products" rowCardProps="마감임박" />
      <CategoryProduct title="높은 할인율 상품" link="/products" rowCardProps="높안할인율" />
    </S.Container>
  );
};

export default Home;
