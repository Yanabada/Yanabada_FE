import * as S from "./styles";
import * as CS from "../chatList/styles";
import { Message } from "@pages/chat/types/chatRoom";
import Cookies from "js-cookie";
import { formatDateTo } from "@utils/formatDateTo";
import { forwardRef } from "react";
interface ChatTextProps {
  message: Message;
  isNotice?: boolean;
}

const ChatText = forwardRef<HTMLDivElement, ChatTextProps>(({ message, isNotice = false }, ref) => {
  const userId = JSON.parse(Cookies.get("id")!);
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
    <S.Chat ref={ref} data-type={isMe ? "right" : ""}>
      {!isMe && (
        <CS.ProfileImg
          style={{ height: "35px", width: "35px" }}
          src={message.senderProfileImage}
          alt="프로필"
        />
      )}
      <S.Content className={isMe ? "right" : ""}>{message.content}</S.Content>
      <S.Time>{formatDateTo(message.sendTime, "ahh:mm")}</S.Time>
    </S.Chat>
  );
});

export default ChatText;
