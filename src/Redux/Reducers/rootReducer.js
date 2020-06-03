import { combineReducers } from "redux";
import bussinessOwnerReducer from "./bussinessOwnerReducer";
import ownerInfoReducer from "./ownerInfoReducer";

export default combineReducers({
  bussinessOwnerUsers: bussinessOwnerReducer,
  ownerPersonalInfo: ownerInfoReducer
});
