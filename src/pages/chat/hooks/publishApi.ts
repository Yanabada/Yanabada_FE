import useSocket from "./useSocket";
import { Message } from "../types/chatRoom";

export type MessagePubType = Pick<Message, "content" | "senderId"> & {
  chatRoomCode: string;
};

const publishApi = (params: MessagePubType) => {
  if (!useSocket().connected) return;
  if (!params.content?.trim()) return;
  if (params.content?.length > 255) return;

  useSocket().publish({
    destination: `/pub/chats/message`,
    body: JSON.stringify({
      chatRoomCode: params.chatRoomCode,
      senderId: params.senderId,
      content: params.content
    })
  });
};

export default publishApi;
