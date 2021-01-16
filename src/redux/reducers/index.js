import { combineReducers } from "redux";
import MainReducer from "./MainReducer.js";

export default combineReducers({
  main: MainReducer,
});
