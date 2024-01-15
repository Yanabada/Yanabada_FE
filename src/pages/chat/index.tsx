import UpperNavBar from "@components/navBar/upperNavBar";
import NoChatList from "./components/noChatList";
import * as S from "./styles/styles";

const Chat = () => {
  return (
    <>
      <UpperNavBar title="채팅" type="back" />
      <S.ChatContainer>
        <NoChatList type="noLogin" />
      </S.ChatContainer>
    </>
  );
};

export default Chat;
