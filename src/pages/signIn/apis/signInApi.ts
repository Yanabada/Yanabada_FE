import { authInstance } from "@apis/instance";

interface signInApiProps {
  email: string;
  password?: string;
  nickName: string;
  phoneNumberSignin: string;
  provider?: string;
  setIsSheetVisible: (visible: boolean) => void;
}

export const signInApi = async ({
  email,
  password,
  nickName,
  provider,
  phoneNumberSignin: phoneNumber,
  setIsSheetVisible
}: signInApiProps) => {
  try {
    if (provider) {
      const res = await authInstance.post("/auth/sign-up/social", {
        email,
        nickName,
        phoneNumber,
        provider
      });
      setIsSheetVisible(true);
      console.log(res);
    } else {
      const res = await authInstance.post("/auth/sign-up", {
        email,
        password,
        nickName,
        phoneNumber
      });
      setIsSheetVisible(true);
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
};
