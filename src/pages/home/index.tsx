import RowCard from "@components/card/RowCard";
import ColumnCard from "@components/card/ColumnCard";
import RecentlyRowCard from "@components/card/RecentlyRowCard";

const Home = () => {
  return (
    <div>
      <RecentlyRowCard />
      <RowCard props="마감임박" />
      <ColumnCard />
    </div>
  );
};

export default Home;
