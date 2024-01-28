import { authInstance } from "@apis/instance";
import { LoginApiProps } from "../types/login";

const loginApi = async (requestBody: LoginApiProps) => {
  return await authInstance.post("/auth/login", requestBody, { withCredentials: true });
};

export default loginApi;
