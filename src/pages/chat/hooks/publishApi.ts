import useSocket from "./useSocket";
import { Message } from "../types/chatRoom";

type MessagePubType = Pick<Message, "content" | "senderId"> & {
  chatRoomCode: string;
};

const publishApi = (params: MessagePubType) => {
  if (!useSocket().connected) return;
  if (!params.content?.trim()) return;
  if (params.content?.length > 255) return;

  return useSocket().publish({
    destination: `/pub/chats/message`,
    body: JSON.stringify({
      chatRoomCode: params.chatRoomCode,
      senderId: params.senderId,
      content: params.content
      // senderNickname: params.senderNickname,
      // senderProfileImage: params.senderProfileImage,
      // sendTime: params.sendTime,
    })
    // TODO: 인풋 비우기
  });
};

export default publishApi;
