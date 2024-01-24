import axios, { AxiosInstance } from "axios";
import { getAccessToken, refreshAccessToken } from "@utils/getCookie";
import Cookies from "js-cookie";

export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
});

instance.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";
    const accessToken = getAccessToken();
    const isLogged = localStorage.getItem("member");
    if (!accessToken || !isLogged) {
      return config;
    }
    config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response?.status === 401) {
      const originalRequest = error.config;

      if (error.response.data.data.isNeededRefresh) {
        const newAccessToken = await refreshAccessToken();
        Cookies.set("accessToken", newAccessToken);

        axios.defaults.headers["Authorization"] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
