import instance from "@apis/instance";
import { ChatRoomResponseData, MessageRequestParam, MessageResponseData } from "../types/chatRoom";

export const getChatRooms = async () => {
  const response = await instance.get("/chats");

  return response.data as ChatRoomResponseData;
};

export const getMessages = async (params: MessageRequestParam) => {
  const response = await instance.get(`/chats/${params.code}`, {
    params: {
      page: params.page
    }
  });

  return response.data as MessageResponseData;
};
