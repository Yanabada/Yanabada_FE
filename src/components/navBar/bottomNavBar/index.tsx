import { useState } from "react";
import { useNavigate } from "react-router";
import NavHome from "@assets/icons/nav_Home.svg?react";
import NavAll from "@assets/icons/nav_All.svg?react";
import NavProduct from "@assets/icons/nav_Product.svg?react";
import NavChat from "@assets/icons/nav_Chat.svg?react";
import NavMy from "@assets/icons/nav_My.svg?react";
import NumberBadge from "@components/numberBadge";
import * as S from "./styles";
import AlertCountStore from "@stores/AlertCountStore";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState<string>("/");
  const { chatCount, myPageCount, setChatCount, setMyPageCount } = AlertCountStore();

  const handleButtonClick = (route: string) => {
    navigate(route);
    setActiveButton(route);
  };

  return (
    <div>
      <S.BottomNavWrapper>
        <S.BottomNavButton
          onClick={() => handleButtonClick("/")}
          className={activeButton === "/" ? "active" : ""}
        >
          <NavHome />홈
        </S.BottomNavButton>

        <S.BottomNavButton
          onClick={() => handleButtonClick("/search")}
          className={activeButton === "/search" ? "active" : ""}
        >
          <NavAll />
          상품리스트
        </S.BottomNavButton>

        <S.BottomNavButton
          onClick={() => handleButtonClick("/sell")}
          className={activeButton === "/sell" ? "active" : ""}
        >
          <NavProduct />
          등록
        </S.BottomNavButton>

        <S.BottomNavButton
          onClick={() => {
            handleButtonClick("/chat");
            setChatCount(0);
          }}
          className={activeButton === "/chat" ? "active" : ""}
        >
          <NavChat />
          {chatCount ? <NumberBadge number={chatCount} /> : undefined}
          채팅
        </S.BottomNavButton>

        <S.BottomNavButton
          onClick={() => {
            handleButtonClick("/myPage");
            setMyPageCount(0);
          }}
          className={activeButton === "/myPage" ? "active" : ""}
        >
          <NavMy />
          {myPageCount ? <NumberBadge number={myPageCount} /> : undefined}
          마이
        </S.BottomNavButton>
      </S.BottomNavWrapper>
    </div>
  );
};

export default BottomNavBar;
