import instance from "@apis/instance";

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
    await instance.post("/auth/sign-up", { email, password, nickName, phoneNumber });
    setIsSheetVisible(true);
  } catch (error) {
    console.log(error);
  }
};
