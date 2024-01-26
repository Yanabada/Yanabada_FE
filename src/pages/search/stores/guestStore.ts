import { create } from "zustand";

interface GuestState {
  adult: number;
  child: number;
  increaseAdult: () => void;
  decreaseAdult: () => void;
  increaseChild: () => void;
  decreaseChild: () => void;
  resetGuestCount: () => void;
}

export const useGuest = create<GuestState>()((set) => ({
  adult: 2,
  child: 0,
  increaseAdult: () =>
    set((state) => ({
      adult: state.adult + 1
    })),
  decreaseAdult: () =>
    set((state) => ({
      adult: state.adult > 0 ? state.adult - 1 : 0
    })),
  increaseChild: () => set((state) => ({ child: state.child + 1 })),
  decreaseChild: () => set((state) => ({ child: state.child > 0 ? state.child - 1 : 0 })),
  resetGuestCount: () => set(() => ({ adult: 2, child: 0 }))
}));
