export const NOTI_TYPE_TO_TEXT = {
  CHAT: { type: "채팅방 개설", text: "에 대한 채팅을 보냈어요!", path: "/chat" },
  TRADE_REQUEST: {
    type: "판매 승인 요청 도착",
    text: "상품이 판매되어 승인 요청이 도착했어요.",
    path: "/mypage/salesHistory"
  },
  TRADE_CANCELED: {
    type: "판매 승인 요청 취소됨",
    text: "상품의 구매를 취소했어요.",
    path: "/mypage/salesHistory"
  },
  TRADE_APPROVAL: {
    type: "구매 승인 완료",
    text: "상품의 구매가 승인되었어요!",
    path: "/mypage/purchaseHistory"
  },
  TRADE_REJECTED: {
    type: "구매 승인 거절",
    text: "상품의 구매가 거절되었어요..",
    path: "/mypage/purchaseHistory"
  }
};
