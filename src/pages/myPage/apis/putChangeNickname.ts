import axios from "axios";

export const putChangeNickname = async (nickname: string) => {
  const putChangeNicknameURL = "/member/nickname";

  return await axios.put(putChangeNicknameURL, {
    nickname: nickname
  });
};

export default putChangeNickname;
