import { create } from "zustand";

type TabState = {
  tab: string;
  setTab: (newTab: string) => void;
};

export const useSearchTab = create<TabState>()((set) => ({
  tab: "keyword",
  setTab: (newTab) => set(() => ({ tab: newTab }))
}));
