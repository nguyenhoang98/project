import axios from "axios";
const instance = axios.create();

instance.interceptors.request.use(
  function (config) {
    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
