import { create } from "zustand";

interface CheckState {
  isCheck: boolean;
  setIsCheck: (check: boolean) => void;
}

const CheckStore = create<CheckState>()((set) => ({
  isCheck: false,
  setIsCheck: (check: boolean) =>
    set({
      isCheck: check
    })
}));

export default CheckStore;
