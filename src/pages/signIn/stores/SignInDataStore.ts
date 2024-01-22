import { create } from "zustand";

interface SignInDataStore {
  email: string;
  password: string;
  nickName: string;
  phoneNumber: string;
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
  setEmail: (email: string) => set({ email: email }),
  setPassword: (password: string) => set({ password: password }),
  setNickname: (nickName: string) => set({ nickName: nickName }),
  setPhoneNumber: (phoneNumber: string) => set({ phoneNumber: phoneNumber })
}));

export default SignInDataStore;
