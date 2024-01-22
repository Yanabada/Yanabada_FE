import instance from "@apis/instance";

const compareNicknameApi = async (nickName: string): Promise<boolean> => {
  try {
    const res = await instance.post("/auth/duplication/nickname", { nickName });
    console.log(res);
    return res.data.data.isDuplication;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default compareNicknameApi;
