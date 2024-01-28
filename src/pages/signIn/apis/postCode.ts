import { authInstance } from "@apis/instance";

export const postCode = async (email: string, code: number) => {
  const response = await authInstance.post("/auth/verification/email", {
    email: email,
    code: code.toString()
  });

  return response.data.data;
};

export default postCode;
