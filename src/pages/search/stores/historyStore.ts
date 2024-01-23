import { create } from "zustand";
import { HistoryType } from "../types/history";

interface HistoryState {
  history: HistoryType[];
  setHistory: (history: HistoryType[]) => void;
}

const getHistory = JSON.parse(localStorage.getItem("searchHistory") || "[]");

const HistoryStore = create<HistoryState>()((set) => ({
  history: getHistory,
  setHistory: (newHistory: HistoryType[]) =>
    set({
      history: newHistory
    })
}));

export default HistoryStore;
