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
    const { data } = action.payload;
    console.log(data);
    state.push(data);
    console.log(state);
    return [...state];
  }
  if (action.type === typeCommanNumberTable.POST_API_NUMBER_TABLE_ERR) {
    const { err } = action.payload;
    toast("Lỗi không đủ sức mua", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return state;
};
export default reducer;
