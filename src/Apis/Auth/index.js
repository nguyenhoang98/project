import AxiosService from "../../Common/axiosServices";

export const getApi = (url) => {
  return AxiosService.get(url);
};
export const postApi = (url, data) => {
  return AxiosService.post(url, data);
};
