import { useState } from "react";
import * as S from "./styles";
import SendIcon from "@assets/icons/send_button.svg?react";
import { Message } from "../../types/chatRoom";
interface ChatInputProps extends Message {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ChatInput = ({ chatRoomCode, senderId, setMessages }: ChatInputProps) => {
  const [value, setValue] = useState("");

  const handleSendMessage = () => {
    if (!value) {
      return;
    }
    setValue("");
    setMessages((prev) => [...prev, { chatRoomCode, senderId, content: value }]);
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
