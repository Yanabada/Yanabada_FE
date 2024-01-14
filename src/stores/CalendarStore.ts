import { create } from "zustand";

interface CalendarState {
  searchStartDate: Date | null;
  searchEndDate: Date | null;
  setSearchStartDate: (startDate: Date | null) => void;
  setSearchEndDate: (endDate: Date | null) => void;
}

const CalendarStore = create<CalendarState>((set) => ({
  searchStartDate: null,
  searchEndDate: null,
  setSearchStartDate: (startDate: Date | null) =>
    set({
      searchStartDate: startDate
    }),
  setSearchEndDate: (endDate: Date | null) =>
    set({
      searchEndDate: endDate
    })
}));

export default CalendarStore;
