import { instance } from "@apis/instance";

export const postLogout = async () => {
  const postLogoutURL = "/auth/logout";

  return await instance.post(postLogoutURL);
};

export default postLogout;
