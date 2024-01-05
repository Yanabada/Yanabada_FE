import { create } from "zustand";

type AlertCountState = {
  chatCount: number;
  myPageCount: number;
  setChatCount: (chat: number) => void;
  setMyPageCount: (myPage: number) => void;
};

const AlertCountStore = create<AlertCountState>((set) => ({
  // FIXME - 추후 채팅 & 판매구매 알림 구현 후 기본값 수정
  chatCount: 5,
  myPageCount: 10,
  setChatCount: (chat: number) => set({ chatCount: chat }),
  setMyPageCount: (myPage: number) => set({ myPageCount: myPage })
}));

export default AlertCountStore;
