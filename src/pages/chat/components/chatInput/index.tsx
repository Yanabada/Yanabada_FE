import { useState } from "react";
import * as S from "./styles";
import SendIcon from "@assets/icons/send_button.svg?react";

const ChatInput = () => {
  const [value, setValue] = useState("");

  return (
    <S.ChatInputContainer className={value ? "active" : ""}>
      <S.ChatInput
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="메시지를 입력해주세요."
      />
      <SendIcon />
    </S.ChatInputContainer>
  );
};

export default ChatInput;
