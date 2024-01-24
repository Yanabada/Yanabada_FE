import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import NumberBadge from "@components/numberBadge";
import { ChatRoom } from "@pages/chat/types/chatRoom";

interface ChatListProps {
  room: ChatRoom;
}

const ChatList = ({ room }: ChatListProps) => {
  const navigate = useNavigate();

  return (
    <S.List onClick={() => navigate(`/chat/${room.chatRoomCode}?productId=${room.productId}`)}>
      <S.ProfileImg src={room.partnerImage} alt="프로필" />
      <S.DetailContainer>
        <S.LeftContainer>
          <S.NameContainer>
            <S.NickName>{room.partnerNickname}</S.NickName>
            <S.RoomName>{room.productName} </S.RoomName>
          </S.NameContainer>
          <S.ChatText>{room.lastChatMessage}</S.ChatText>
        </S.LeftContainer>
        <S.RightContainer>
          <S.TimeText>{room.lastSentMessageTime.toString()}</S.TimeText>
          <NumberBadge number={3} isChatPage={true} />
        </S.RightContainer>
      </S.DetailContainer>
    </S.List>
  );
};

export default ChatList;
