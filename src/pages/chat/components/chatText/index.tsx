import * as S from "./styles";
import * as CS from "../chatList/styles";
import { Message } from "@pages/chat/types/chatRoom";

interface ChatTextProps {
  // TODO- 명세서 맞춰서 내용 추가 필요
  message: Message;
  isNotice?: boolean;
}

const ChatText = ({ message, isNotice = false }: ChatTextProps) => {
  // FIXME - 나중에 로그인 구현되면 userId를 받아와야함
  const userId = 1;
  const isMe = message.senderId === userId;

  if (isNotice) {
    return (
      <S.ChatNotice>
        <S.HightLight>{message.senderNickname}</S.HightLight>
        님이 네고를 요청하셨습니다.
      </S.ChatNotice>
    );
  }

  return (
    <S.Chat data-type={isMe ? "right" : ""}>
      {!isMe && (
        <CS.ProfileImg
          style={{ height: "35px", width: "35px" }}
          src={message.senderImage}
          alt="프로필"
        />
      )}
      {/* TODO - 테스트 화면 녹화 후 {content}로 변경하기 */}
      <S.Content className={isMe ? "right" : ""}>{message.content}</S.Content>
      <S.Time>{message.sendDateTime.toISOString()}</S.Time>
    </S.Chat>
  );
};

export default ChatText;
