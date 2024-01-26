import { authInstance } from "@apis/instance";

export const postEmailDuplicateCheck = async (email: string) => {
  const response = await authInstance.post("/auth/verification-code/email/password", {
    email: email
  });

  return response.data.data;
};

export default postEmailDuplicateCheck;
