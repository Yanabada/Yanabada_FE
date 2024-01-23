import axios from "axios";

export const postLogout = async () => {
  const postLogoutURL = "/auth/logout";

  return await axios.post(postLogoutURL);
};

export default postLogout;
