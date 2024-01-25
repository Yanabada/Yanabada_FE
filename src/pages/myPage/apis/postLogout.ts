import { authInstance } from "@apis/instance";
import Cookie from "js-cookie";

export const postLogout = async () => {
  const postLogoutURL = "/auth/logout";

  const refreshToken = Cookie.get("refreshToken");

  return await authInstance.post(postLogoutURL, null, {
    headers: {
      Authorization: `Bearer ${refreshToken}`
    }
  });
};

export default postLogout;
