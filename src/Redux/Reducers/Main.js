import { combineReducers } from "redux";
import TableCode from "./TableCode";
import CommandNumberTable from "./CommanNumberTable";
const appReducers = combineReducers({
  TableCode: TableCode,
  CommandNumberTable: CommandNumberTable,
});

export default appReducers;
