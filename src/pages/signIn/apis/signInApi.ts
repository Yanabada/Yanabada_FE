import instance from "@apis/instance";
import SignInDataStore from "../stores/SignInDataStore";

interface signInApiProps {
  email: string;
  password: string;
  nickName: string;
  phoneNumberSignin: string;
  setIsSheetVisible: (visible: boolean) => void;
}

export const signInApi = async ({
  email,
  password,
  nickName,
  phoneNumberSignin: phoneNumber,
  setIsSheetVisible
}: signInApiProps) => {
  const { setEmail, setPassword, setNickname, setPhoneNumber } = SignInDataStore();

  try {
    await instance.post("/auth/sign-up", { email, password, nickName, phoneNumber });
    setIsSheetVisible(true);
    setEmail("");
    setPassword("");
    setNickname("");
    setPhoneNumber("");
  } catch (error) {
    console.log(error);
  }
};
