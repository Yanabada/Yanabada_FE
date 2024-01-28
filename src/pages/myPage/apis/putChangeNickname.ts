import { instance } from "@apis/instance";

export const putChangeNickname = async (nickname: string) => {
  const putChangeNicknameURL = "/members/nickname";

  return await instance.put(putChangeNicknameURL, {
    nickName: nickname
  });
};

export default putChangeNickname;
