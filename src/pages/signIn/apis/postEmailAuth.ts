import { authInstance } from "@apis/instance";

export const postEmailAuth = async (email: string) => {
  const postEmailURL = "/auth/verification-code/email/signup";

  const response = await authInstance.post(postEmailURL, { email: email });

  return response.data.data;
};

export default postEmailAuth;
