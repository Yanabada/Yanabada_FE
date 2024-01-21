type NotificationType =
  | "CHAT"
  | "TRADE_REQUEST"
  | "TRADE_CANCELED"
  | "TRADE_APPROVAL"
  | "TRADE_REJECTED";

export interface Notification {
  notificationId: number;
  senderNickname?: string;
  accommodationName: string;
  image: string;
  registeredDate: Date;
  type: NotificationType;
  isRead: boolean;
}

export interface NotificationResponseData {
  status: string;
  data: {
    notifications: Notification[];
    pageNum: number;
    pageSize: number;
    totalPages: number;
    isFirst: boolean;
    isLast: boolean;
  };
}
