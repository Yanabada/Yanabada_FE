import create from "zustand";

const useCalcFeeStore = create((set) => ({
  calcFeeNumber: 0, // 초기 상태
  setCalcFeeNumber: (value) => set({ calcFeeNumber: value }) // 상태 업데이트 함수
}));

export default useCalcFeeStore;
