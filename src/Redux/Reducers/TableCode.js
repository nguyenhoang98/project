import * as typeTableCode from "../../Constants/tablecode";

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === typeTableCode.FETCH_API_TABLE_CODE_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return state;
  }
  if (action.type === typeTableCode.FETCH_API_TABLE_CODE_ERR) {
    const { err } = action.payload;
    console.log(err);
  }
  return state;
};
export default reducer;
