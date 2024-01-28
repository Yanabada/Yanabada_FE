import { create } from "zustand";
import { RecentType } from "../types/recent";

interface RecentState {
  recentItem: RecentType[];
  setRecentItem: (recentData: RecentType[]) => void;
}

const getRecentItem = JSON.parse(localStorage.getItem("recentItem") || "[]");

const RecentStore = create<RecentState>()((set) => ({
  recentItem: getRecentItem,
  setRecentItem: (newItem: RecentType[]) =>
    set({
      recentItem: newItem
    })
}));

export default RecentStore;
