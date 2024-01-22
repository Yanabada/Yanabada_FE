import axios from "axios";

export const postEmailAuth = async (email: string) => {
  const postLogoutURL = "/auth/verification/email";

  return await axios.post(postLogoutURL, { email: email });
};

export default postEmailAuth;
