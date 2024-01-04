import navChat from "../../assets/icons/nav_Chat.svg";
import navAll from "../../assets/icons/nav_All.svg";
// import { ReactComponent as NavHome } from "../../assets/icons/nav_Home.svg";
// import NavHome from "../../assets/icons/nav_Home.svg?react";
import navHome from "../../assets/icons/nav_Home.svg";
import navProduct from "../../assets/icons/nav_Product.svg";
import navMy from "../../assets/icons/nav_My.svg";
import { BottomNavButton, BottomNavWrapper } from "./styles";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <BottomNavWrapper>
      <BottomNavButton
        onClick={() => {
          navigate("/");
        }}
      >
        {/* <NavHome /> */}
        {/* <object data={navHome} style={{ fill: "#fff" }} /> */}
        <img src={navHome} style={{ fill: "red" }} />홈
      </BottomNavButton>
      <BottomNavButton
        onClick={() => {
          navigate("/search");
        }}
      >
        {/* <NavAll /> */}
        <img src={navAll} />
        상품리스트
      </BottomNavButton>
      <BottomNavButton
        onClick={() => {
          navigate("/sell");
        }}
      >
        <img src={navProduct} />
        등록
      </BottomNavButton>
      <BottomNavButton
        onClick={() => {
          navigate("/chat");
        }}
      >
        <img src={navChat} />
        채팅
      </BottomNavButton>
      <BottomNavButton
        onClick={() => {
          navigate("/mypage");
        }}
      >
        <img src={navMy} />
        마이
      </BottomNavButton>
    </BottomNavWrapper>
  );
};

export default NavBar;
