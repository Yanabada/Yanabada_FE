import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/styles";
import ChatList from "./components/chatList";
import useChatRooms from "./hooks/useChatRooms";
import NoChatList from "./components/noChatList";
import Cookies from "js-cookie";

const Chat = () => {
  const isLoggedIn = Cookies.get("isLoggedIn") === "yes";
  // const isLoggedIn = Cookies.get("isLoggedIn") === "no";
  const { data, isLoading, error } = useChatRooms(isLoggedIn);

  if (!isLoggedIn) {
    return (
      <>
        <UpperNavBar title="채팅" type="back" hasBorder />
        <S.ChatListContainer>
          <NoChatList type="noLogin" />
        </S.ChatListContainer>
      </>
    );
  }

  // UI 작업 필요 (스켈레톤 등)
  if (error) return <p>Error: {error.message}</p>;
  if (!data || isLoading) return <p>Loading...</p>;

  return (
    <>
      <UpperNavBar title="채팅" type="back" hasBorder />
      {data.data.length === 0 ? (
        <S.ChatListContainer>
          <NoChatList type="noChat" />
        </S.ChatListContainer>
      ) : (
        <S.ChatListContainer>
          {data.data.map((chatroom) => (
            <ChatList key={chatroom.chatRoomCode} room={chatroom} />
          ))}
        </S.ChatListContainer>
      )}
    </>
  );
};

export default Chat;
