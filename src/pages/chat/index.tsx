import UpperNavBar from "@components/navBar/upperNavBar";
// import NoChatList from "./components/noChatList";
import * as S from "./styles/styles";
import ChatList from "./components/chatList";

const Chat = () => {
  // TODO - 데이터 없으면 NoChatList로 return
  return (
    <>
      <UpperNavBar title="채팅" type="back" hasBorder />
      <S.ChatContainer>
        <ChatList roomId={1} />
        <ChatList roomId={2} />
        {/* <NoChatList type="noLogin" /> */}
      </S.ChatContainer>
    </>
  );
};

export default Chat;
