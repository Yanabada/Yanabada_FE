import { authInstance } from "@apis/instance";
import toast from "react-hot-toast";

const compareNicknameApi = async (nickName: string): Promise<boolean> => {
  try {
    const res = await authInstance.post("/auth/duplication/nickname", { nickName });
    console.log(res);
    return res.data.data.isDuplication;
  } catch (error) {
    console.error(error);
    toast.error("닉네임 중복 확인에 실패했습니다.");
    return false;
  }
};

export default compareNicknameApi;
