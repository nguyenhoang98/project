import * as typeCommanNumberTable from "../../Constants/CommandNumberTable";
import { getApi, postApi } from "../../Apis/Auth/index";

export const fetch_api_command_number_table = (url) => {
  return (dispatch) => {
    getApi(url)
      .then((res) => {
        console.log(res);
        dispatch(fetch_api_command_number_table_success(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetch_api_command_number_table_err(err));
      });
  };
};

export const fetch_api_command_number_table_success = (data) => {
  return {
    type: typeCommanNumberTable.FETCH_API_NUMBER_TABLE_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetch_api_command_number_table_err = (err) => {
  return {
    type: typeCommanNumberTable.FETCH_API_NUMBER_TABLE_ERR,
    payload: {
      err: err,
    },
  };
};

export const post_api_command_number_table = (url, data) => {
  console.log(data);
  return (dispatch) => {
    postApi(url, data)
      .then((res) => {
        console.log("OK");
        dispatch(post_api_command_number_table_success(res.data));
      })
      .catch((err) => {
        console.log("no");
        dispatch(post_api_command_number_table_err(err, data.side));
      });
  };
};
export const post_api_command_number_table_success = (data) => {
  return {
    type: typeCommanNumberTable.POST_API_NUMBER_TABLE_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const post_api_command_number_table_err = (err, params) => {
  return {
    type: typeCommanNumberTable.POST_API_NUMBER_TABLE_ERR,
    payload: {
      err: err,
    },
  };
};
