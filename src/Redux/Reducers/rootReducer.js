import { combineReducers } from "redux";
import bussinessOwnerReducer from "./bussinessOwnerReducer";
export default combineReducers({
  bussinessOwnerUsers: bussinessOwnerReducer
});
