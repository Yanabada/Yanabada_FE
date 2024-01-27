import axios, { AxiosInstance } from "axios";
import { getAccessToken, refreshAccessToken } from "@utils/getCookie";
import Cookies from "js-cookie";

export const instance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/v1`,
  timeout: 5000
});

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

authInstance.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";
    const accessToken = getAccessToken();

    if (!accessToken) {
      return config;
    }
    config.headers["Authorization"] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response?.status === 401) {
      const originalRequest = error.config;
      console.log(error.response);

      if (!("data" in error.response.data)) {
        window.location.href = "/login";
        return Promise.reject(error);
      }
      if (error.response.data.data.isNeededRefresh) {
        const newAccessToken = await refreshAccessToken();
        Cookies.set("accessToken", newAccessToken);
        axios.defaults.headers["Authorization"] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      }
    } else if (error.response?.status === 400) {
      const originalRequest = error.config;

      if (!("data" in error.response.data)) {
        window.location.href = "/login";
        return Promise.reject(error);
      }
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

instance.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";
    const accessToken = getAccessToken();
    if (!accessToken) {
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
      console.log(error.response);
      if (!("data" in error.response.data)) {
        // TODO - 에러페이지
        // window.location.href = "/login";
        return Promise.reject(error);
      }
      if (error.response.data.data.isNeededRefresh) {
        const newAccessToken = await refreshAccessToken();
        Cookies.set("accessToken", newAccessToken);
        axios.defaults.headers["Authorization"] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      }
    } else if (error.response?.status === 400) {
      const originalRequest = error.config;

      if (!("data" in error.response.data)) {
        // window.location.href = "/login";
        return Promise.reject(error);
      }
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
