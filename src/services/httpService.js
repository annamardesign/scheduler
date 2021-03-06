import axios from "axios";

const axiosApiInstance = axios.create({
  baseURL: "https://api.hacksoft.io/v1",
});

export default {
  get: axiosApiInstance.get,
  post: axiosApiInstance.post,
  put: axiosApiInstance.put,
  delete: axiosApiInstance.delete,
};
