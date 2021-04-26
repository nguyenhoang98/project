import * as typeTableCode from "../../Constants/tablecode";
import { getApi } from "../../Apis/Auth";
export const fetch_api_table_code = (url) => {
  return (dispatch) => {
    getApi(url)
      .then((res) => {
        dispatch(fetch_api_table_code_success(res.data.data));
      })
      .catch((err) => {
        dispatch(fetch_api_table_code_err(err));
      });
  };
};

export const fetch_api_table_code_success = (data) => {
  return {
    type: typeTableCode.FETCH_API_TABLE_CODE_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetch_api_table_code_err = (err) => {
  return {
    type: typeTableCode.FETCH_API_TABLE_CODE_ERR,
    payload: {
      err: err,
    },
  };
};
