import useSocket from "./useSocket";
import { SubscribeData, Message } from "../types/chatRoom";

interface MessageSubType extends Message {
  chatRoomCode: string;
}

const subscribeApi = (params: SubscribeData) => {
  return useSocket().subscribe(`/pub/chats/${params.chatRoomCode}`, ({ body }) => {
    const bodyObj = JSON.parse(body) as MessageSubType;
    params.setChatMessages((prev) => [...prev, bodyObj]);
  });
};

export default subscribeApi;
