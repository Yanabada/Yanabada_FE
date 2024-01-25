import { authInstance } from "@apis/instance";

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
  try {
    const res = await authInstance.post("/auth/sign-up", {
      email,
      password,
      nickName,
      phoneNumber
    });
    setIsSheetVisible(true);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
