import { useState } from "react";
import * as S from "./styles";
import SendIcon from "@assets/icons/send_button.svg?react";
import publishApi from "@pages/chat/hooks/publishApi";

interface ChatInputProps {
  chatRoomCode: string;
  senderId: number;
}

const ChatInput = ({ chatRoomCode, senderId }: ChatInputProps) => {
  const [value, setValue] = useState("");

  const handleSendMessage = () => {
    publishApi({
      chatRoomCode,
      senderId,
      content: value
    });

    setValue("");
  };

  return (
    <S.ChatInputContainer className={value ? "active" : ""}>
      <S.ChatInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="메시지를 입력해주세요."
      />
      <button onClick={handleSendMessage}>
        <SendIcon />
      </button>
    </S.ChatInputContainer>
  );
};

export default ChatInput;
