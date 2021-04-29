import * as typeCommanNumberTable from "../../Constants/CommandNumberTable";
import { getApi, postApi, deleteApi } from "../../Apis/Auth/index";

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
        dispatch(post_api_command_number_table_success(res.data, res.side));
      })
      .catch((err) => {
        console.log("no");
        dispatch(post_api_command_number_table_err(err, data.side));
      });
  };
};
export const post_api_command_number_table_success = (data, params) => {
  return {
    type: typeCommanNumberTable.POST_API_NUMBER_TABLE_SUCCESS,
    payload: {
      data: data,
      params: params,
    },
  };
};
export const post_api_command_number_table_err = (err, params) => {
  return {
    type: typeCommanNumberTable.POST_API_NUMBER_TABLE_ERR,
    payload: {
      err: err,
      params: params,
    },
  };
};

export const delete_api_comment_number_table = (url, data) => {
  console.log(url, data);
  return (dispatch) => {
    console.log("hehe");
    deleteApi(url, data)
      .then((res) => {
        console.log("123456");
        dispatch(delete_api_comment_number_success(data));
      })
      .then((err) => {
        console.log("123456");
        dispatch(delete_api_comment_number_err(err));
      });
  };
};

export const delete_api_comment_number_success = (data) => {
  return {
    type: typeCommanNumberTable.DELETE_API_NUMBER_TABLE_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const delete_api_comment_number_err = (err) => {
  return {
    type: typeCommanNumberTable.DELETE_API_NUMBER_TABLE_SUCCESS,
    payload: {
      err: err,
    },
  };
};
