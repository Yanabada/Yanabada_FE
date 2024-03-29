import { useState } from "react";
import * as S from "./styles";
import SendIcon from "@assets/icons/send_button.svg?react";
import { MessagePubType } from "@pages/chat/hooks/publishApi";

interface ChatInputProps {
  chatRoomCode: string;
  senderId: number;
  publish: (params: MessagePubType) => void;
}

const ChatInput = ({ chatRoomCode, senderId, publish }: ChatInputProps) => {
  const [value, setValue] = useState("");

  const handleSendMessage = () => {
    publish({
      chatRoomCode,
      senderId,
      content: value
    });
    setValue("");
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <S.ChatInputContainer className={value ? "active" : ""}>
      <S.ChatInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyPress={handleKeyPress}
        placeholder="메시지를 입력해주세요."
      />
      <button onClick={handleSendMessage}>
        <SendIcon />
      </button>
    </S.ChatInputContainer>
  );
};

export default ChatInput;
