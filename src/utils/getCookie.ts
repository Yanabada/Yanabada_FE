import axios from "axios";
import Cookies from "js-cookie";

const getAccessToken = () => {
  try {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) {
      return;
    }
    return accessToken;
  } catch (error) {
    console.error(error);
    return;
  }
};

const getRefreshToken = () => {
  try {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) {
      return;
    }
    return refreshToken;
  } catch (error) {
    console.error(error);
    return;
  }
};

const refreshAccessToken = async () => {
  if (!Cookies.get("accessToken")) {
    return;
  }
  try {
    const refreshToken = Cookies.get("refreshToken");
    // TODO - instance쓰는 걸로 수정하기 const res = await instance.post(`/auth/refresh-token`, {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh-token`, null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    });
    return res.data.data.accessToken;
  } catch (error) {
    console.error("refreshAccessToken error", error);
  }
};

export { getAccessToken, getRefreshToken, refreshAccessToken };
