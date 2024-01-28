import { create } from "zustand";

// TODO - persist 추가하기
interface SignInDataStore {
  email: string;
  password: string;
  nickName: string;
  phoneNumber: string;
  provider: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setNickname: (nickName: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
}

const SignInDataStore = create<SignInDataStore>((set) => ({
  email: "",
  password: "",
  nickName: "",
  phoneNumber: "",
  provider: "KAKAO",
  setEmail: (email: string) => set({ email: email }),
  setPassword: (password: string) => set({ password: password }),
  setNickname: (nickName: string) => set({ nickName: nickName }),
  setPhoneNumber: (phoneNumber: string) => set({ phoneNumber: phoneNumber })
}));

export default SignInDataStore;
