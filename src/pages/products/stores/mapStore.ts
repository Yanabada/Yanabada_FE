import { create } from "zustand";

interface MapState {
  isMapOpen: boolean;
  setMapOpen: () => void;
}

export const useMapOpen = create<MapState>()((set) => ({
  isMapOpen: false,
  setMapOpen: () => set((state) => ({ isMapOpen: !state.isMapOpen }))
}));
