import UpperNavBar from "@components/navBar/upperNavBar";
// import NoChatList from "./components/noChatList";
import * as S from "./styles/styles";
import ChatList from "./components/chatList";
import useChatRooms from "./hooks/useChatRooms";
import NoChatList from "./components/noChatList";

const Chat = () => {
  const { data, isLoading, error } = useChatRooms();

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
            <ChatList room={chatroom} />
          ))}
        </S.ChatListContainer>
      )}
    </>
  );
};

export default Chat;
