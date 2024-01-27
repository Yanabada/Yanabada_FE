export interface Message {
  sendTime: Date;
  senderId: number;
  senderProfileImage: string;
  senderNickname: string;
  content?: string;
}

export interface MessageResponseData {
  status: string;
  data: {
    chatRoomCode: number;
    messages: Message[];
    pageNum: number;
    pageSize: number;
    totalPages: number;
    isFirst: boolean;
    isLast: boolean;
  };
}

export interface MessageRequestParam {
  code: string;
  page?: number;
}

export interface ChatRoom {
  chatRoomCode: number;
  partnerImage: string;
  partnerNickname: string;
  lastChatMessage: string;
  lastSentMessageTime: Date;
  productId: number;
  productName: string;
  unreadMessageCount: number;
}
export interface ChatRoomResponseData {
  status: string;
  data: ChatRoom[];
}
export interface SubscribeData {
  chatRoomCode: string;
  setChatMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export interface ChangePriceData {
  productId: number;
  price: number;
}
