import { create } from "zustand";

interface PasswordState {
  password: number[];
  setPassword: (price: number[]) => void;
}

const PasswordStore = create<PasswordState>((set) => ({
  password: [],
  setPassword: (price) => set({ password: price })
}));

export default PasswordStore;
