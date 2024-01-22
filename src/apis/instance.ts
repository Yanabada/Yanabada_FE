import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
});

instance.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      alert("인증이 만료되어 재 로그인이 필요합니다.");
    }
    return Promise.reject(error);
  }
);

export default instance;
