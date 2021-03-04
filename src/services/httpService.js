import axios from "axios";

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async (config) => {
    await TokenStorage.getNewToken();
    const value = TokenStorage.getToken();
    config.headers = {
      Authorization: `Bearer ${value}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default {
  get: axiosApiInstance.get,
  post: axiosApiInstance.post,
  put: axiosApiInstance.put,
  delete: axiosApiInstance.delete,
};
