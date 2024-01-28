import instance from "@apis/instance";

export const putChangePassword = async (password: string) => {
  const putChangePasswordURL = "/members/password";

  return await instance.put(putChangePasswordURL, { password: password });
};

export default putChangePassword;
