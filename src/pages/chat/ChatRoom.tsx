import UpperNavBar from "@components/navBar/upperNavBar";
import OutIcon from "@assets/icons/chatRoomDelete.svg?react";
import ChatRoomBanner from "./components/chatRoomBanner";
const ChatRoom = () => {
  return (
    <>
      <UpperNavBar type="back" title="강쥐사랑해진짜로" rightElement={<OutIcon />} hasBorder />
      <ChatRoomBanner type="sale" title="파라스파라 서울 더 그레이트 현대 런던" />
    </>
  );
};

export default ChatRoom;
