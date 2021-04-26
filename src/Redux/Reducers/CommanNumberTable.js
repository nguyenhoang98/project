import * as typeCommanNumberTable from "../../Constants/CommandNumberTable";

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === typeCommanNumberTable.FETCH_API_NUMBER_TABLE_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return state;
  }
  if (action.type === typeCommanNumberTable.FETCH_API_NUMBER_TABLE_ERR) {
    const { err } = action.payload;
    console.log(err);
  }
  return state;
};
export default reducer;
