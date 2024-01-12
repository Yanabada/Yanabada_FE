import { create } from "zustand";

interface KeywordState {
  locationName: string;
  setLocationName: (keyword: string) => void;
}

const KeywordStore = create<KeywordState>((set) => ({
  locationName: "전체 지역",
  setLocationName: (keyword: string) =>
    set({
      locationName: keyword
    })
}));

export default KeywordStore;
