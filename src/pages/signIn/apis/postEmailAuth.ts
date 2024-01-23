import axios from "axios";

export const postEmailAuth = async (email: string) => {
  const postEmailURL = "/auth/verification/email";

  const response = await axios.post(postEmailURL, { email: email });

  return response.data;
};

export default postEmailAuth;
