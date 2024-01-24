import { create } from "zustand";

interface AmountState {
  amount: number;
  setAmount: (price: number) => void;
}

const AmountStore = create<AmountState>((set) => ({
  amount: 0,
  setAmount: (price) => set({ amount: price })
}));

export default AmountStore;
