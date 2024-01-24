import useSocket from "./useSocket";
import { SubscribeData, Message } from "../types/chatRoom";

export interface MessageSubType extends Message {
  chatRoomCode: string;
}

const subscribeApi = (params: SubscribeData) => {
  useSocket().subscribe(`/pub/chats/${params.chatRoomCode}`, ({ body }) => {
    const bodyObj = JSON.parse(body) as MessageSubType;
    params.setChatMessages((prev) => [...prev, bodyObj]);
  });
};

export default subscribeApi;
