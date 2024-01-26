import instance from "@apis/instance";
import {
  ChangePriceData,
  ChatRoomResponseData,
  MessageRequestParam,
  MessageResponseData
} from "../types/chatRoom";

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
  console.log(response.data);
  return response.data as MessageResponseData;
};

export const updateChatRoom = async (params: MessageRequestParam) => {
  await instance.put(`/chats`, {
    chatRoomCode: params.code
  });
};

export const deleteChatRoom = async (params: MessageRequestParam) => {
  await instance.delete(`/chats`, {
    data: {
      chatRoomCode: params.code
    }
  });
};

export const changePrice = async ({ productId, price }: ChangePriceData) => {
  const response = await instance.patch<{ data: { productId: number } }>(`/products/${productId}`, {
    price
  });

  return response.data;
};
