import Header from "./components/Header";
import SearchInput from "./components/SearchInput";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Header />
      <SearchInput />
      {token && (
        <div style={{ marginTop: "300px", color: "#000" }}>
          <p>Token: {token}</p>
        </div>
      )}
    </>
  );
};

export default Home;
