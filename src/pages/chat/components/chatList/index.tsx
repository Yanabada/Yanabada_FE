import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import NumberBadge from "@components/numberBadge";

interface ChatListProps {
  roomId: number;
}
const ChatList = ({ roomId }: ChatListProps) => {
  const navigate = useNavigate();

  return (
    <S.List onClick={() => navigate(`/chat/${roomId}`)}>
      <S.ProfileImg
        src="https://i.pinimg.com/564x/4d/a5/dd/4da5dd3d7b0a981cd56ec1f7db32c0cf.jpg"
        alt="프로필"
      />
      <S.DetailContainer>
        <S.LeftContainer>
          <S.NameContainer>
            <S.NickName>강쥐사랑해진짜로</S.NickName>
            <S.RoomName>파라스파라 서울 더 그레이트 현대 런던 </S.RoomName>
          </S.NameContainer>
          <S.ChatText>만원만 깎아줘</S.ChatText>
        </S.LeftContainer>
        <S.RightContainer>
          <S.TimeText>오후5:50</S.TimeText>
          <NumberBadge number={3} isChatPage={true} />
        </S.RightContainer>
      </S.DetailContainer>
    </S.List>
  );
};

export default ChatList;
