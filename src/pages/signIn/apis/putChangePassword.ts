import axios from "axios";

export const putChangePassword = async (password: string) => {
  const putChangePasswordURL = "/member/password";

  return await axios.put(putChangePasswordURL, { password: password });
};

export default putChangePassword;
