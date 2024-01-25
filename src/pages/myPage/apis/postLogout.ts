import { authInstance } from "@apis/instance";

export const postLogout = async () => {
  const postLogoutURL = "/auth/logout";

  return await authInstance.post(postLogoutURL);
};

export default postLogout;
