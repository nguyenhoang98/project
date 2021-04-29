import * as typeCommanNumberTable from "../../Constants/CommandNumberTable";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === typeCommanNumberTable.FETCH_API_NUMBER_TABLE_SUCCESS) {
    const { data } = action.payload;
    state = data;
    console.log(state);
    return state;
  }
  if (action.type === typeCommanNumberTable.FETCH_API_NUMBER_TABLE_ERR) {
    const { err } = action.payload;
    toast("Lỗi");
  }

  if (action.type === typeCommanNumberTable.POST_API_NUMBER_TABLE_SUCCESS) {
    const { data, params } = action.payload;
    console.log(data);
    state.push(data);
    console.log(state);
    toast.success(`${params === "NB" ? "Mua" : "Bán"} thành công `);
    return [...state];
  }
  if (action.type === typeCommanNumberTable.POST_API_NUMBER_TABLE_ERR) {
    const { err, params } = action.payload;
    toast.error(`${params === "NB" ? "Mua" : "Bán"} Thất bại `);
  }

  if (action.type === typeCommanNumberTable.DELETE_API_NUMBER_TABLE_SUCCESS) {
    const { data } = action.payload;
  }
  if (action.type === typeCommanNumberTable.DELETE_API_NUMBER_TABLE_ERR) {
    const { err } = action.payload;
  }
  return state;
};
export default reducer;
