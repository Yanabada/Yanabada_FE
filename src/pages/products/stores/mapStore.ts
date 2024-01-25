import { create } from "zustand";

interface MapState {
  isMapOpen: boolean;
  hasProducts: boolean;
  setMapOpen: () => void;
  setHasProducts: (products: number) => void;
}

export const useMapState = create<MapState>()((set) => ({
  isMapOpen: false,
  hasProducts: false,
  setMapOpen: () => set((state) => ({ isMapOpen: !state.isMapOpen })),
  setHasProducts: (products) => set({ hasProducts: products > 0 })
}));
