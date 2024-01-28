import * as S from "./styles";
import NavButton from "./NavButton";
import useChatRooms from "@pages/chat/hooks/useChatRooms";
import Cookies from "js-cookie";

const BottomNavBar = () => {
  // 채팅 숫자 업데이트
  const isLoggedIn = Cookies.get("isLoggedIn") === "yes";
  let chatCount = 0;

  if (isLoggedIn) {
    const { data } = useChatRooms();
    chatCount = data?.data.reduce((acc, cur) => acc + cur.unreadMessageCount, 0);
  }

  return (
    <S.BottomNavWrapper>
      <NavButton path="/" />
      <NavButton path="/products" />
      <NavButton path="/sell" />
      <NavButton path="/chat" chatCount={chatCount} />
      <NavButton path="/mypage" />
    </S.BottomNavWrapper>
  );
};

export default BottomNavBar;
